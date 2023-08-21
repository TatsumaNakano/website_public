'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import type { Metadata } from 'next'

function HeadTag() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            {/* <link key="x-default" rel='alternate' hrefLang='x-default' href={"tatsuma.co" + usePathname()}></link>
            <link key="ja" rel='alternate' hrefLang='en' href={"en.tatsuma.co" + usePathname()}></link>
            <link key="en" rel='alternate' hrefLang='ja' href={"ja.tatsuma.co" + usePathname()}></link> */}
        </Head>
    );
}

export default HeadTag;