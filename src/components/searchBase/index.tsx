// "use client"

import styles from "./styles.module.scss"
import { useRef, useState, useEffect } from "react"

import { languageState } from "@/states"
import { allPosts } from "@/states";
import { useRecoilState } from "recoil"


function SearchBase() {

    const inputRef = useRef<any>(null);
    const [inputVal, setInputState] = useState("");
    const [ap, setAllPostToGlobal] = useRecoilState(allPosts);

    const setInput = () => {
        setInputState(inputRef.current.value);
    }

    useEffect(() => {
        if (!inputRef?.current) return;
        inputRef.current.addEventListener("change", setInput)
        return inputRef.current.removeEventListener("change", setInput)
    }, [])

    const searchResult = Search(inputVal);

    const [lang, setLang] = useRecoilState(languageState);
    const placeholderText = lang == "en" ? "Type Anything" : "何か入力してください";
    return (
        <div className={styles.searchBase}>
            <div>
                <input placeholder={placeholderText} ref={inputRef}></input>
            </div>
        </div>
    );
}

function Search(keyword: string) {
    console.log(keyword);
}


export default SearchBase;