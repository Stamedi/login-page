import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <button onClick={() => router.push('/')}>Go back</button>
      </main>
    </div>
  )
}

export default home