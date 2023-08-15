// "use client"

import '../styles/global.scss'
import '../styles/wp-styles.scss'

import RecoilWrapper from '@/components/recoilWrapper'
import HtmlWrapper from '@/components/htmlWrapper'

import Head from 'next/head'
import MainWrapper from '@/components/layout/mainWrapper'

import { fetchGQL, GET_ALLPOSTS } from '@/graphql/queries'
import PassAllPostsToClient from '@/components/passAllPostsToClient'


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tatsuma Nakano',
  description: 'Tatsuma Nakano',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const allPostsFromWP = await fetchGQL(GET_ALLPOSTS);

  return (
    <RecoilWrapper>
      <HtmlWrapper>

        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>

        <MainWrapper>
          {children}
        </MainWrapper>

        <PassAllPostsToClient allPostsWP={allPostsFromWP} />

      </HtmlWrapper>
    </RecoilWrapper>
  )
}

