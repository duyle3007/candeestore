
import GreenHeader from './greenHeader/greenHeader';
import WhiteHeader from './whiteHeader/whiteHeader';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles['top-header']}>
      <WhiteHeader />
      <GreenHeader />
    </div>
  )
}

export default Header