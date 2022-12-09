import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/login'

    const options = {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    
    if (result.authenticated) {
      router.push('/home')
    } else {
      setMessage(result.error)
    }
  }

  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1>Login App</h1>
      <p className={styles.error}>{message}</p>
      <form className={styles.form} action="/api/login" method="post" onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Enter username" />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Enter password" />
        <button type="submit">Login</button>
      </form>
    </main>
  </div>
  )
}

export default Home
