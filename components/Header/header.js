import { useMemo } from "react";
import { useRouter } from "next/router";

import GreenHeader from "./greenHeader/greenHeader";
import WhiteHeader, { MOBILE_BREAKPOINT } from "./whiteHeader/whiteHeader";

import styles from "./header.module.scss";

const PAGE_WITHOUT_GREEN_HEADER = ["/cart", "/signup", "/login"];

const Header = () => {
  const router = useRouter();
  const isShowGreenHeader = useMemo(() => {
    const url = router.pathname;

    // Wont show green header in mobile
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      return false;
    }
    return !PAGE_WITHOUT_GREEN_HEADER.some((page) => page === url);
  }, [router]);
  return (
    <div className={styles["top-header"]}>
      <WhiteHeader />
      {isShowGreenHeader ? <GreenHeader /> : <div />}
    </div>
  );
};

export default Header;
