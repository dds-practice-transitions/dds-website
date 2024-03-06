import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-header.module.css";
import { Navbar } from "../Navbar";
import { Link } from "@remix-run/react";
import { Button } from "../Button/Button";
import { NavbarLink } from "../NavbarLink";

export const PageHeader = forwardRef<
  HTMLElement,
  JSX.IntrinsicElements["header"]
>(function PageHeader({ className, ...restProps }, ref) {
  return (
    <header {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div>
        <div>
          <Link to="/">
            <img src="/logo.jpg" alt="dds-logo" className={styles.img} />
          </Link>
        </div>
        <Navbar>
          <NavbarLink to="/contact-us">about</NavbarLink>
        </Navbar>
        <div>{/* <Button>Get in touch</Button> */}</div>
      </div>
    </header>
  );
});
