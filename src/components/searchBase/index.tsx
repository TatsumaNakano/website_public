// "use client"

import styles from "./styles.module.scss"
import { useRef, useState, useEffect } from "react"

import { languageState, mobileSearchState } from "@/states"
import { allPosts } from "@/states";
import { useRecoilState } from "recoil"
import Link from "next/link";

import WorkIcon from "@/assets/icons/icon_home.svg"
import LabIcon from "@/assets/icons/icon_lab.svg"
import BlogIcon from "@/assets/icons/icon_blog.svg"
import AboutIcon from "@/assets/icons/icon_about.svg"
import SettingIcon from "@/assets/icons/icon_setting.svg"
import MsgIcon from "@/assets/icons/icon_message.svg"



function SearchBase() {

    const inputRef = useRef<any>(null);
    // const [inputVal, setInputState] = useState("");
    const [posts, setAllPostToGlobal] = useRecoilState<any>(allPosts);
    const [searchResults, setSearchResults] = useState<object[]>([]);

    const [searchVisible, setSearchVisible] = useRecoilState(mobileSearchState);
    const [hasInputVal, setIsNotEmpty] = useState(false);

    useEffect(() => {
        if (searchVisible) {
            inputRef.current.focus();
        }
        else {
            inputRef.current.value = "";
            setIsNotEmpty(false);
            setSearchResults([])
        }
    }, [searchVisible])

    const SearchOnChange = (e: any) => {
        const result = Search(e.target.value, posts.data.posts.nodes);
        setSearchResults(result);
        setIsNotEmpty(e.target.value !== "")
    }

    const [lang, setLang] = useRecoilState(languageState);
    const placeholderText = lang == "en" ? "Type Anything" : "何か入力してください";

    const itemSection = generateItemSection(hasInputVal && searchResults.length > 0, searchResults, hasInputVal, setSearchVisible);
    return (
        <div className={styles.searchBase}>
            <div>
                <input
                    placeholder={placeholderText}
                    onChange={SearchOnChange}
                    onFocus={(e) => { e.target.select() }}
                    ref={inputRef}
                />
                {itemSection}
            </div>
        </div >
    );
}


function Search(keyword: string, posts: object[]): object[] {
    if (keyword == "") return [];
    var searchResults: object[] = [];

    // Search from english title of posts
    for (const item of posts) {
        if (item.title.toLowerCase().includes(keyword)) {
            searchResults.push(item);
        }
    }

    // Search from japanese title of posts
    for (const item of posts) {

        if (item.post_setting.jptitle && item.post_setting.jptitle.toLowerCase().includes(keyword)) {
            if (searchResults.indexOf(item) == -1) {//If object doesn't exist on the english search yet
                searchResults.push(item);
            }
        }
    }


    return searchResults;
}

const generateItemSection = (showSearchResultTag: boolean, searchResults: object[], hasInputVal: boolean, setSearchVisible: Function) => {
    const searchResultElements = generateSearchResultListElements(searchResults, hasInputVal, setSearchVisible);
    const searchResultTag = (showSearchResultTag) ? <><span className="en">Search Result</span><span className="jp">検索結果</span></> : null;
    const disableSearchView = () => { setSearchVisible(false) }
    if ((searchResults.length > 0)) {

        return (<div className={styles.results}>
            <label>{searchResultTag}</label>
            <ul>{searchResultElements}</ul>
        </div>)
    } else {
        if (!hasInputVal) {
            return (<div className={styles.frequentlyViewed}>
                <label><span className="en">Pages</span><span className="jp">ページ一覧</span></label>
                <ul>
                    <li>
                        <Link href={"/"} onClick={disableSearchView}>
                            <div>
                                <div><WorkIcon /></div>
                                <label className="en">Work</label>
                                <label className="jp">過去の案件</label>
                            </div>
                            <p className="en">This page shows featured work that I have worked on.</p>
                            <p className="jp">過去の案件の中で僕にとって特別な物を選んだページです。</p>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/lab"} onClick={disableSearchView}>
                            <div>
                                <div><LabIcon /></div>
                                <label className="en">Lab</label>
                                <label className="jp">個人制作</label>
                            </div>
                            <p className="en">This page shows my personal works that I did on my free time.</p>
                            <p className="jp">自分の空き時間で作った物を寄せ集めたページです。</p>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/blog"} onClick={disableSearchView}>
                            <div>
                                <div><BlogIcon /></div>
                                <label className="en">Blog</label>
                                <label className="jp">ブログ</label>
                            </div>
                            <p className="en">My blog for arts, technical stuff, or something random. </p>
                            <p className="jp">アート関係や技術関係、個人的なことなどを書いています。</p>
                        </Link>
                    </li>

                    <li>
                        <Link href={"/about"} onClick={disableSearchView}>
                            <div>
                                <div><AboutIcon /></div>
                                <label className="en">About</label>
                                <label className="jp">経歴</label>
                            </div>
                            <p className="en">About myself. My resume, services, certificates, and other informations.</p>
                            <p className="jp">僕の経歴やサービス内容、保有中の資格などを載せています。</p>
                        </Link>
                    </li>

                    <li>
                        <Link href={""} onClick={disableSearchView}>
                            <div>
                                <div><MsgIcon /></div>
                                <label className="en">Message</label>
                                <label className="jp">お問い合わせ</label>
                            </div>
                            <p className="en">Feel free to drop me a message if you're interested in working together and bringing our ideas to life.</p>
                            <p className="jp">お仕事の依頼はこちらまで。</p>
                        </Link>
                    </li>
                </ul>
            </div>)
        } else {
            return (<label className={styles.noResults} >
                <span className="en">No results.</span>
                <span className="jp">何も見つかりませんでした。</span>
            </label>)
        }
    }
}

const FrequentlyViewedItem = (children: any, href: string) => {
    return (<li>
        <Link href={href}>
            {children}
        </Link>
    </li>)
}

const generateSearchResultListElements = (searchResults: object[], hasInputVal: boolean, setSearchVisible: Function) => {
    var res = null;
    if (searchResults.length > 0) {
        res = (searchResults.map((item, key) => {
            const categorySlug = item.categories.nodes[0].slug;
            const url = (categorySlug == "work" ? "/" : `/${categorySlug}/`) + item.slug;
            return (<li key={key}>
                <Link href={url} onClick={() => setSearchVisible(false)}>
                    <span className="en">{item.title}</span>
                    <span className="jp">{item.post_setting.jptitle ? item.post_setting.jptitle : item.title}</span>
                </Link>
            </li>);
        }))
    } else {
        res = null;
    }
    console.log(res)
    return res;
}
export default SearchBase;