import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fred's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Under construction!  (o_.)" />
        <p className="description">
           <code></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
