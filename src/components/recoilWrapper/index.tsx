"use client"

import { RecoilRoot } from "recoil"
import { initState } from "@/states";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <RecoilRoot initializeState={initState}>{children}</RecoilRoot>
    );
}