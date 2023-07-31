// "use client"

import '../styles/global.scss'
import type { Metadata } from 'next'
import { M_PLUS_1p } from 'next/font/google'

import Header from "../components/layout/header/pages"
import Footer from "../components/layout/footer/pages"
import Widget from "../components/layout/widget/pages"

import styles from "../styles/layout.module.scss"
// import { languageState } from '@/states'
// import { useRecoilState } from "recoil"
import RecoilWrapper from '@/components/recoilWrapper'
import HtmlWrapper from '@/components/htmlWrapper'
import ConsoleMessage from '@/components/layout/consoleMessage/page'

import Head from 'next/head'

const inter = M_PLUS_1p({ weight: ["100", "300", "400", "500", "700", "800", "900"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tatsuma Nakano | Creative Solution',
  description: 'Tatsuma Nakano Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <RecoilWrapper>
      <HtmlWrapper>

        <Head>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
        </Head>

        <body className={inter.className}>
          <Header />
          <main className={styles.contents}>{children}</main>
          <Footer />
          <Widget />
        </body>
        <ConsoleMessage />
      </HtmlWrapper>
    </RecoilWrapper>
  )
}

