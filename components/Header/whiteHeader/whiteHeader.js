import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import styles from './whiteHeader.module.scss'

const WhiteHeader = () => {

  return (
    <div className={styles['white-header']}>
      <div className={styles['left']}>

        <div className={styles['store-name']}>Candee Store</div>
        <div className={styles['search-bar']}>
          <input />
          <SearchOutlined />
        </div>
      </div>

      <div className={styles['right']}>
        <div className={styles['login-signup']}>Login/Signup</div>
        <div className={styles['cart']}><ShoppingCartOutlined />Giỏ hàng</div>
      </div>
    </div>
  )
}

export default WhiteHeader