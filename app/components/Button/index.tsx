'use client'

import React from 'react'
import Link from 'next/link'

import styles from 'app/components/Button/Button.module.css'
import { useDarkStore } from 'utils'

type Props = {
  label: string
  toPage?: string
}

const handleClick = () => window.history.back()

function Button(props: Props) {

  const darkMode = useDarkStore(state => state.darkMode)

  const button =
    props.toPage === '/' ? (
      <button className={darkMode ? styles.backDark : styles.backLight} onClick={handleClick}>
        {props.label}
      </button>
    ) : (
      <Link className={darkMode ? styles.buttonDark : styles.buttonLight} href={props.toPage || "/"}>
        {props.label}
      </Link>
    )

  return button
}

export default Button
