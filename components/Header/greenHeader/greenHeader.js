import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import styles from './greenHeader.module.scss'

const HEADER_CONTENT = [
  'Flash sale', 'Nước hoa', 'Trang điểm', 'Chăm sóc da mặt', 'Chăm sóc cơ thể', 'Thời trang & Phụ kiện'
]
const GreenHeader = () => {

  return (
    <div className={styles['green-header']}>
      <div className={styles['green-header-content']}>
        {HEADER_CONTENT.map(section =>
          <div className={styles['header-section']}>
            {section}
          </div>)}
      </div>
    </div>
  )
}

export default GreenHeader