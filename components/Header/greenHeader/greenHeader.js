import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import styles from './greenHeader.module.scss'

const HEADER_CONTENT = [
  { name: 'Flash sale', subMenu: ['Nước hoa nữ', 'Nước hoa nam'] },
  { name: 'Nước hoa' }, { name: 'Trang điểm' }, { name: 'Chăm sóc da mặt' }, { name: 'Chăm sóc cơ thể' }, { name: 'Thời trang & Phụ kiện' }
]
const GreenHeader = () => {

  return (
    <div className={styles['green-header']}>
      <div className={styles['green-header-content']}>
        {HEADER_CONTENT.map(section =>
          <div className={styles['header-section']} key={section.name}>
            {section.name}
            {section.subMenu ? <div className={styles['dropdown-section']}>
              {section.subMenu.map(menu => <div key={menu}>{menu}</div>)}
            </div> : null}
          </div>)}
      </div>
    </div>
  )
}

export default GreenHeader