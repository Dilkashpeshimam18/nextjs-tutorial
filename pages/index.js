import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Link
  from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Next Tutorial | Home </title>
      </Head>
      <div>
        <h1>Home Page</h1>
        <p>This is home page</p>
        <Link href='alldata'>All Data</Link>
      </div>
    </>

  )
}
