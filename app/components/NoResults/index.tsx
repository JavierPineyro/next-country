import React from 'react'

import styles from './noresults.module.css'
type Props = {
  children: React.ReactNode
}

export default function index({children}: Props) {
  return (
    <div className={styles.noresults}>{children}</div>
  )
}