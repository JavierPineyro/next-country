'use client'

import React from 'react'
import Link from 'next/link'

import styles from 'app/components/Button/Button.module.css'

type Props = {
  label: string
  toPage: string
}

const handleClick = () => window.history.back()

function Button(props: Props) {
  const button =
    props.toPage === '/' ? (
      <button className={styles.back} onClick={handleClick}>
        {props.label}
      </button>
    ) : (
      <Link className={styles.button} href={props.toPage}>
        {props.label}
      </Link>
    )

  return button
}

export default Button
