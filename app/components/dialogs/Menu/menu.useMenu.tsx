import {
  useRef,
  useCallback,
  useMemo,
  MutableRefObject,
  FocusEventHandler,
} from "react";
import { DialogDefaultState, DialogRef } from "../dialog.useDialog";
import { MenuOptions, MenuState } from "./Menu";
import { exhaustiveMatchGuard } from "../../../utils";

function getNextTabbableElement(currentNode: HTMLElement) {
  // Select all tabbable elements
  const tabbableElements = document.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  // Convert NodeList to an array for easier manipulation
  const tabbableArray = Array.from(tabbableElements);

  // Get the index of the current node among tabbable elements
  const currentIndex = tabbableArray.findIndex(
    (element) => element === currentNode,
  );

  if (currentIndex !== -1) {
    // Find the next tabbable element
    for (let i = currentIndex + 1; i < tabbableArray.length; i++) {
      // Check if the next tabbable element is focusable
      if (
        // @ts-expect-error general property
        !tabbableArray[i].disabled &&
        !tabbableArray[i].hidden &&
        // @ts-expect-error general property
        !tabbableArray[i].readOnly
      ) {
        return tabbableArray[i];
      }
    }
  }

  // If no next tabbable element is found, return null
  return null;
}

export function useMenu<T extends DialogDefaultState>(options?: MenuOptions) {
  const menuRef = useRef<DialogRef<MenuState<T>>>(null);
  const nextTabbableEl = useRef<HTMLElement | null>(null);

  const openMenu = useCallback<DialogRef<MenuState<T>>["handleOpen"]>(
    (e, initData = {} as MenuState<T>) => {
      if (!menuRef.current || !e) return;
      // TODO: Broken
      // const nextEl = getNextTabbableElement(e.currentTarget);
      // const eventType = e.nativeEvent.type;
      // debugger;
      // if (eventType !== "click" && nextEl !== null) {
      //   console.log(nextEl);
      //   nextTabbableEl.current = nextEl;
      // }
      menuRef.current.handleOpen(e, {
        ...initData,
        referenceElement: e?.currentTarget,
        menuOptions: options,
      });
    },
    [options],
  );

  const closeMenu = useCallback<DialogRef<MenuState<T>>["handleClose"]>(() => {
    if (!menuRef.current) return;
    menuRef.current.handleClose();
    if (nextTabbableEl.current) {
      nextTabbableEl.current.focus();
    }
  }, []);

  const onFocus = useCallback(
    (e: React.FocusEvent, initData?: MenuState<T>) => {
      if (!menuRef.current?.nodeRef.current?.contains(e.relatedTarget)) {
        // @ts-expect-error mismatch on the event type
        return openMenu(e, initData);
      }
    },
    [openMenu],
  );

  const onClick = useCallback(
    (e: React.MouseEvent, initData?: MenuState<T>) => {
      // @ts-expect-error mismatch on the event type
      return openMenu(e, initData);
    },
    [openMenu],
  );

  const onBlur = useCallback<FocusEventHandler<HTMLElement>>(
    (e) => {
      if (!menuRef.current?.nodeRef.current?.contains(e.relatedTarget)) {
        closeMenu();
      }
    },
    [closeMenu],
  );

  const eventHandlers = useMemo(() => {
    const mode = options?.mode ?? "manual";
    switch (mode) {
      case "manual":
        return {
          openProps: {},
          closeProps: {},
        };

      case "focus":
        return {
          openProps: {
            onFocus,
            onClick,
          },
          closeProps: {
            onBlur,
          },
        };

      default:
        return exhaustiveMatchGuard(mode);
    }
  }, [onBlur, onClick, onFocus, options?.mode]);

  return useMemo(
    () => ({
      menuRef: menuRef as unknown as MutableRefObject<DialogRef>,
      openMenu,
      closeMenu,
      ...eventHandlers,
    }),
    [closeMenu, eventHandlers, openMenu],
  );
}
