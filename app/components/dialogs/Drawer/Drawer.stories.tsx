import type { Meta } from "@storybook/react";
import { Drawer } from "./Drawer";
import { useDrawer } from "./drawer.useDrawer";
import { Button } from "../../inputs/Button";

const meta: Meta = {
  title: "Dialogs / Drawer",
} satisfies Meta<typeof meta>;

export default meta;

export const RightToLeft = () => {
  const { drawerRef, openDrawer } = useDrawer();

  return (
    <>
      <Button onClick={openDrawer}>Toggle Portal</Button>
      <Drawer ref={drawerRef}>This is some drawer content!</Drawer>
    </>
  );
};

export const LeftToRight = () => {
  const { drawerRef, openDrawer } = useDrawer();

  return (
    <>
      <Button onClick={openDrawer}>Toggle Portal</Button>
      <Drawer ref={drawerRef} ddSize="lg">
        This is some drawer content!
      </Drawer>
    </>
  );
};
