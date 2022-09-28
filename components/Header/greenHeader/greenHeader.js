import Dropdown from "components/Dropdown/dropdown";

import styles from "./greenHeader.module.scss";

const HEADER_CONTENT = [
  { name: "Flash sale" },
  { name: "Nước hoa", subMenu: ["Nước hoa nữ", "Nước hoa nam"] },
  { name: "Trang điểm" },
  { name: "Chăm sóc da mặt" },
  { name: "Chăm sóc cơ thể" },
  { name: "Thời trang & Phụ kiện" },
];
const GreenHeader = () => {
  return (
    <div className={styles["green-header"]}>
      <div className={styles["green-header-content"]}>
        {HEADER_CONTENT.map((section) => (
          <div className={styles["header-section"]} key={section.name}>
            <div className={styles["section-name"]}>
              {section.subMenu ? (
                <Dropdown title={section.name} menu={section.subMenu} />
              ) : (
                section.name
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenHeader;
