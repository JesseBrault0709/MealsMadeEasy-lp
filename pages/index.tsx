import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Meals Made Easy</title>
                <meta
                    name="description"
                    content="Make planning your meals for the week a breeze!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Welcome to the future home page for Meals Made Easy</h1>

                <p>Stay tuned for updates</p>
            </main>
        </div>
    )
}

export default Home
