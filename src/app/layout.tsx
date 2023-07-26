import '../styles/global.scss'
import type { Metadata } from 'next'
import { M_PLUS_1p } from 'next/font/google'

import Header from "../components/layout/header/pages"
import Footer from "../components/layout/footer/pages"
import Widget from "../components/layout/widget/pages"

import styles from "../styles/layout.module.scss"

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

    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.contents}>{children}</main>
        <Footer />
        <Widget />
      </body>
    </html>
  )
}
