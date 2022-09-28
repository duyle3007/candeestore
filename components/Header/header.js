import { useMemo } from "react";

import GreenHeader from "./greenHeader/greenHeader";
import WhiteHeader from "./whiteHeader/whiteHeader";

import styles from "./header.module.scss";
import { useRouter } from "next/router";

const PAGE_WITHOUT_GREEN_HEADER = ["/cart", "/signup", "/login"];

const Header = () => {
  const router = useRouter();
  const isShowGreenHeader = useMemo(() => {
    const url = router.pathname;
    return !PAGE_WITHOUT_GREEN_HEADER.some((page) => page === url);
  });
  return (
    <div className={styles["top-header"]}>
      <WhiteHeader />
      {isShowGreenHeader ? <GreenHeader /> : <div />}
    </div>
  );
};

export default Header;
