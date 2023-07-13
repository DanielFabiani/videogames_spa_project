import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.scanner}>
        <span>Loading...</span>
      </div>
    </div>
  )
}

export default Loading