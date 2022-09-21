import { SearchOutlined } from '@ant-design/icons'

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles['top-header']}>
      <div className={styles['white-header']}>
        <div className={styles['store-name']}>Candee Store</div>
        <div className={styles['search-bar']}>
          <input />
          <SearchOutlined />
        </div>
      </div>
    </div>
  )
}

export default Header