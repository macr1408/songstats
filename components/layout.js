import Head from 'next/head'
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import AnimatedBackground from './AnimatedBackground'

function logoutUser() {
    destroyCookie(null, 'authToken')
    destroyCookie(null, 'authEmail')
}

export default function Layout({ children, username }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Get interesting facts about the song you are currently listening"
                />
            </Head>
            <header className="header relative z-10">
                {username &&
                    <nav className="bg-gray-main">
                        <div className="flex flex-wrap container mx-auto">
                            <div className="w-8/12 md:w-10/12 p-4">Welcome {username}</div>
                            <div className="w-4/12 md:w-2/12 p-4 text-center self-center"> <Link href="/"><a onClick={logoutUser}>Logout</a></Link></div>
                        </div>
                    </nav>
                }
            </header>
            <main>
                <AnimatedBackground />
                <div className="relative z-10">{children}</div>
            </main>
        </div>
    )
}