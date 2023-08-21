// "use client"

import '../styles/global.scss'
import '../styles/wp-styles.scss'

import RecoilWrapper from '@/components/recoilWrapper'
import HtmlWrapper from '@/components/htmlWrapper'

import MainWrapper from '@/components/layout/mainWrapper'

import { fetchGQL, GET_ALLPOSTS } from '@/graphql/queries'
import PassAllPostsToClient from '@/components/passAllPostsToClient'



import HeadTag from '@/components/headTag'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Tatsuma Nakano',
  description: 'Tatsuma Nakano',
  metadataBase: new URL("https://tatsuma.co"),
  // alternates: {
  //   canonical: "/",
  //   languages: {
  //     "x-default": "https://tatsuma.co/",
  //     "en": "https://en.tatsuma.co/",
  //     "ja": "https://ja.tatsuma.co/",
  //   }
  // }
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

        <HeadTag />

        <MainWrapper>
          {children}
        </MainWrapper>

        <PassAllPostsToClient allPostsWP={allPostsFromWP} />

      </HtmlWrapper>
    </RecoilWrapper>
  )
}

