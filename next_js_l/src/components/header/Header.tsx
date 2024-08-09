import Link  from 'next/link'
import style from './Header.module.css'
import { GrTechnology } from "react-icons/gr";
const Header = () => {
  return (
   <header className={style.header}>
        <nav className={style.navbar}>
            <div>
                <Link href="/" className={style.logo}>Bestie<GrTechnology />Shop</Link>
            </div>
            <ul className={style.navLinks}>
                <Link className={style.navLink} href="/">Home</Link>
                <Link className={style.navLink} href="/about">About</Link>
                <Link className={style.navLink} href="/articles">Articles</Link>
                <Link className={style.navLink} href="/admin">admin Dashbord</Link>
            </ul>
        </nav>
        <div className={style.right}>
            <Link className={style.btn} href="/login">Login</Link>
            <Link className={style.btn} href="/register">Register</Link>
        </div>
   </header>
  )
}

export default Header
