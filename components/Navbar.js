import styles from "../styles/Navbar.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(prevState => !prevState)
  }
  const check = (event) => {
    console.log(event.target)
  }
  return (
    <nav className={styles["navbar"]} onClick={check}>
      <button 
        className={`
          ${styles["btn"]}
          ${styles["left-btn"]}
        `}
        onClick={toggleMenu}
      >
        <MenuIcon/>
      </button>
      <div className={styles["brand-title"]}>
        <Link href="/">WhateverHappens</Link>
      </div>
      <div 
        className={styles["menu"]}
        style={{width: showMenu ? "65%" : 0}}
      >
        <button 
          className={`
            ${styles["btn"]}
            ${styles["right-btn"]}
          `}
          onClick={toggleMenu}
        >
          <CloseIcon/>
        </button>
        <ul className={styles["nav-links"]}>
          <li className={styles["link"]}>
            <Link href="#">Collections</Link>
          </li>
          <li className={styles["link"]}>
            <Link href="#">New Arrivals</Link>
          </li>
          <li className={styles["link"]}>
            <Link href="#">On Sale</Link>
          </li>
        </ul>
      </div>
      <button className={`
        ${styles["btn"]}
        ${styles["right-btn"]}
      `}>
        <Link href="#">
          <ShoppingBagIcon/>
        </Link>
      </button>
    </nav>
  )
}

export default Navbar