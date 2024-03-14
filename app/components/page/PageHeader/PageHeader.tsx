import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-header.module.css";
import { Navbar } from "../../navbar";
import { Link } from "@remix-run/react";

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
          {/* <NavbarLink to="/contact-us">contact us</NavbarLink> */}
        </Navbar>
        <div>{/* <Button>Get in touch</Button> */}</div>
      </div>
    </header>
  );
});
