import HeaderLink from "./headerLink/pages";
import Logo from "@/components/logo/page";
import styles from "./styles.module.scss"
import { Suspense } from 'react'

const Header = function () {
    return (
        <header className={styles.header}>
            <Suspense fallback={<p>Loading</p>}>
                <ul>
                    <HeaderLink href="/" name_en="Work" name_jp="過去の案件" />
                    <HeaderLink href="/lab" name_en="Lab" name_jp="個人制作" />
                    <Logo />
                    <HeaderLink href="/blog" name_en="Blog" name_jp="ブログ" />
                    <HeaderLink href="/about" name_en="About" name_jp="あなたはだあれ" />
                </ul>
            </Suspense>
        </header >
    );
}

export default Header;