// "use client"

import '../styles/global.scss'
import type { Metadata } from 'next'
import { M_PLUS_1p } from 'next/font/google'

import Header from "../components/layout/header"
import Footer from "../components/layout/footer/page"
import Widget from "../components/layout/widget"


// import { languageState } from '@/states'
// import { useRecoilState } from "recoil"
import RecoilWrapper from '@/components/recoilWrapper'
import HtmlWrapper from '@/components/htmlWrapper'
import ConsoleMessage from '@/components/layout/consoleMessage/page'
import MobilePageBar from '@/components/mobile/mobilePageNavigator'

import Head from 'next/head'
import MainWrapper from '@/components/layout/mainWrapper'

import { fetchGQL, GET_ALLPOSTS } from '@/graphql/queries'
import PassAllPostsToClient from '@/components/passAllPostsToClient'

const inter = M_PLUS_1p({ weight: ["100", "300", "400", "500", "700", "800", "900"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tatsuma Nakano | Creative Solution',
  description: 'Tatsuma Nakano Website',
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
        </Head>

        <body className={inter.className}>
          <Header />
          <MainWrapper>
            {children}
          </MainWrapper>
          <Footer />

          <MobilePageBar />

        </body>
        <ConsoleMessage />
        <PassAllPostsToClient allPostsWP={allPostsFromWP} />

      </HtmlWrapper>
    </RecoilWrapper>
  )
}

