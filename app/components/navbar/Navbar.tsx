import {
  ReactElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NavbarLauncher } from "./NavbarLauncher";
import { NavbarLinkProps } from "./NavbarLink";

export type NavbarProps = Omit<JSX.IntrinsicElements["nav"], "children"> & {
  children: ReactElement<NavbarLinkProps>[] | ReactElement<NavbarLinkProps>;
};
export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { children, className, ...restProps },
  ref,
) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef<HTMLElement | null>(null);

  const toggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const getBody = useCallback(() => {
    if (!bodyRef.current) {
      bodyRef.current = document.body;
    }
    return bodyRef.current;
  }, []);

  useEffect(() => {
    const bodyNode = getBody();
    if (isOpen) {
      bodyNode.style.overflow = "hidden";
      return;
    }
    bodyNode.style.overflow = "auto";

    return () => {
      const bodyNode = getBody();
      bodyNode.style.overflow = "auto";
    };
  }, [getBody, isOpen]);

  return (
    <nav {...restProps} className={clsx(styles.navbar, className)} ref={ref}>
      <NavbarLauncher onClick={toggle} />
      <ul
        className={clsx({
          [styles.open]: isOpen,
        })}
      >
        {children}
      </ul>
    </nav>
  );
});
