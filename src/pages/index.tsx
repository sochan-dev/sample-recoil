import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { List } from '../components/organisms/List'
import React, { Suspense } from 'react'
import { useRouter } from 'next/router'
import { Pagination } from 'components/organisms/Pagination'
import { SampleAsynchronousProcess } from 'components/organisms/SampleAsynchronousProcess'

const Home: NextPage = () => {
  const router = useRouter()
  const page = router.query.page ? parseInt(router.query.page as string) : 1

  return (
    <div className={styles.container}>
      <Head>
        <title>recoil sample</title>
      </Head>

      <Suspense fallback={<>Loading...</>}>
        <main className={styles.main}>
          <h1 className={styles.title}>Pokemon List</h1>
          <List page={page} />
          <Pagination page={page} />
        </main>
        <SampleAsynchronousProcess />
      </Suspense>
    </div>
  )
}

export default Home
