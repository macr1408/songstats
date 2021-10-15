import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import AnonymousApiClient from '../lib/AnonymousApiClient'
import nookies from 'nookies'
import Gap from '../components/Gap'

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const { authToken, authEmail } = cookies

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
  let authError = ''

  // First time visiting index, return plain home
  if (!context.query.code) {
    const authUrl = await client.getAuthLink(redirectUrl);
    return {
      props: {
        authUrl,
        authError
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
    const authUrl = await client.getAuthLink(redirectUrl);
    authError = token.error ? token.error : 'There was an error, please try again.'
  }

  return {
    props: {
      authUrl,
      authError
    }
  }
}

export default function Home({ authUrl, authError }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full px-4 pb-4 text-center">
          <Gap size="400px" />
          <a href={authUrl.url} className="bg-green-500 px-10 py-2 rounded-full text-2xl">Connect</a>
          {authError &&
            <p className="mt-4 italic max-w-xs md:max-w-sm mx-auto">{authError}</p>
          }
        </div>
      </div>
    </Layout>
  )
}