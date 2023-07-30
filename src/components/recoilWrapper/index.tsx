"use client"

import { RecoilRoot } from "recoil"
import { initState } from "@/states";
// import { getLocale } from "next-intl/server";
export default ({ children }: { children: React.ReactElement }) => {

    // const locale = getLocale();
    // console.log(locale)
    return (
        <RecoilRoot initializeState={initState}>{children}</RecoilRoot>
    );
}