import Head from 'next/head'
import Layout from '../components/layout'
import nookies from 'nookies'
import NowPlayingCard from '../components/NowPlaying'
import ApiClient from '../lib/ApiClient'
import { useState, useEffect } from 'react'
import Gap from '../components/Gap'

export async function getServerSideProps(context) {
    const cookies = nookies.get(context)
    const { authToken, authEmail } = cookies
    return {
        props: {
            authToken,
            authEmail
        }
    }
}

export default function Playing({ authToken, authEmail }) {
    const [nowPlaying, setNowPlaying] = useState()
    const client = new ApiClient(authToken)
    useEffect(() => {
        client.currentPlaying().then(json => { setNowPlaying(json) })
        const interval = setInterval(() => {
            client.currentPlaying().then(json => { setNowPlaying(json) })
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <Layout username={authEmail}>
            <Head>
                <title>Now playing</title>
            </Head>
            <Gap size="30px" />
            <div className="flex flex-wrap justify-center container mx-auto">
                <div className="w-full px-4 pb-4">
                    <NowPlayingCard data={nowPlaying} />
                </div>
                <div className="w-full px-4 pb-4">
                    <NowPlayingCard data={nowPlaying} />
                </div>
            </div>
        </Layout>
    )
}
