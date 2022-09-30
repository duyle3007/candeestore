import { CaretDownOutlined } from "@ant-design/icons";

import styles from "./dropdown.module.scss";

const Dropdown = ({ title, menu }) => {
  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdown-title"]}>
        {title} <CaretDownOutlined />
      </div>
      <div className={styles["dropdown-section"]}>
        {menu.map((menu, index) => (
          <div key={index} className={styles["dropdown-item"]}>
            {menu}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
