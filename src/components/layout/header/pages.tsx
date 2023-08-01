import HeaderLink from "./headerLink/pages";
import Logo from "@/components/logo/page";
import styles from "./styles.module.scss"

const Header = function () {
    return (
        <header className={styles.header}>
            <ul>
                <HeaderLink href="/" name_en="Work" name_jp="過去の案件" />
                <HeaderLink href="/lab" name_en="Lab" name_jp="個人制作" />
                <Logo />
                <HeaderLink href="/blog" name_en="Blog" name_jp="ブログ" />
                <HeaderLink href="/about" name_en="About" name_jp="あなたはだあれ" />
            </ul>
        </header >
    );
}

export default Header;