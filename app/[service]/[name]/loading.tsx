import styles from './loading.module.css'

export default function loading() {
  return ( 
    <div className={styles.loader}>
      <div className={styles.scanner}>
        <span>Loading...</span>
      </div>
    </div>  
  )
}
