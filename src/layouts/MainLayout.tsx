import { Link, Outlet, useLocation } from 'react-router-dom'
import { bg_icon_tr, bg_icon_tr_2, logo } from 'src/assets/images'
import { path } from 'src/constants/path'
import styles from './mainLayout.module.css'

export interface MainLayoutProps {}

export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg_icon}>
        <img src={bg_icon_tr} alt='bg-icon' />
        <img src={bg_icon_tr_2} alt='bg-icon-2' />
      </div>
      {pathname === path.home && (
        <Link className={styles.logo} id='app-logo' to={path.home}>
          <img src={logo} alt='DSC-DUT Logo' />
        </Link>
      )}
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  )
}
