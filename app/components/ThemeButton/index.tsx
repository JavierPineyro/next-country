import React from 'react'
import Moon from '../Icons/Moon'
import Sun from '../Icons/Sun'

import styles from './themebutton.module.css'

type Props = {
  darkMode: boolean
  title: string
  toggleColorMode: () => void
}

export default function ThemeButton(props: Props) {
  return (
    <button className={styles.button} 
      onClick={props.toggleColorMode} title={props.title}>
        {props.darkMode ? <Sun />: <Moon />}
        {/* {props.darkMode? 'Light Mode': 'Dark Mode'} */}
    </button>
  )
}