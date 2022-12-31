import React from 'react'

import Button from 'app/components/Button'

import styles from './page.module.css'

type Props = {
  children: React.ReactNode
}

const LayoutCountry = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.buttonWrapper}>
        <Button toPage="/" label="← Back" />
      </div>
      {children}
    </section>
  )
}

export default LayoutCountry
