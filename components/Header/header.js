import { forwardRef, useMemo } from "react";
import { useRouter } from "next/router";

import GreenHeader from "./greenHeader/greenHeader";
import WhiteHeader, { MOBILE_BREAKPOINT } from "./whiteHeader/whiteHeader";

import styles from "./header.module.scss";

export const PAGE_WITHOUT_GREEN_HEADER = ["/cart", "/signup", "/login"];
export const PAGE_WITHOUT_WHITE_HEADER = ["/signup"];

const Header = forwardRef((_, ref) => {
  const router = useRouter();
  const isShowGreenHeader = useMemo(() => {
    const url = router.pathname;

    // Wont show green header in mobile
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      return false;
    }
    return !PAGE_WITHOUT_GREEN_HEADER.some((page) => page === url);
  }, [router]);

  const isShowWhiteHeader = useMemo(() => {
    const url = router.pathname;

    return !PAGE_WITHOUT_WHITE_HEADER.some((page) => page === url);
  }, [router]);
  return (
    <div ref={ref} className={styles["top-header"]}>
      {isShowWhiteHeader ? <WhiteHeader /> : <div />}
      {isShowGreenHeader ? <GreenHeader /> : <div />}
    </div>
  );
});

export default Header;
