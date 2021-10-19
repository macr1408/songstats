import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import AnonymousApiClient from '../lib/AnonymousApiClient'
import nookies from 'nookies'
import Gap from '../components/Gap'

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const { authToken } = cookies

  // User already logged in, redirect
  if (authToken) {
    return {
      redirect: {
        destination: '/playing',
        permanent: false
      }
    }
  }

  // User not logged in, prepare everything for auth
  const client = new AnonymousApiClient()
  const redirectUrl = 'http://localhost:3000'

  // First time visiting index, return plain home
  if (!context.query.code) {
    const authUrl = await client.getAuthLink(redirectUrl)
    return {
      props: {
        authUrl
      }
    }
  }

  // Coming from auth 1st step, redirect!
  const token = await client.getAuthToken(redirectUrl, context.query.code)
  if (token.loginToken) {
    nookies.set(context, 'authToken', token.loginToken, {
      maxAge: 86400, // 1 day
      path: '/',
    })
    nookies.set(context, 'authEmail', token.email, {
      maxAge: 86400, // 1 day
      path: '/',
    })
    return {
      redirect: {
        destination: '/playing',
        permanent: false
      }
    }
  } else {
    // 1st step failed, return auth url so client can try again
    const authUrl = await client.getAuthLink(redirectUrl);
    return {
      props: {
        authUrl
      }
    }
  }

}

export default function Home({ authUrl }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full px-4 pb-4 text-center">
          <Gap size="400px" />
          <a href={authUrl.url ? authUrl.url : ''} className="bg-green-500 px-10 py-2 rounded-full text-2xl">Connect</a>
          {authUrl.error &&
            <p className="mt-4 italic max-w-xs md:max-w-sm mx-auto">{authUrl.error}</p>
          }
        </div>
      </div>
    </Layout>
  )
}