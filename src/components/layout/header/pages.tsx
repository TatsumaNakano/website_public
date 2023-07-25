import HeaderLink from "./headerLink/pages";
import Logo from "@/components/logo/page";
import styles from "./styles.module.scss"

export default () => {
    return (
        <header className={styles.header}>
            <ul>
                <HeaderLink href="/" name="Work" />
                <HeaderLink href="/products" name="Products" />
                <Logo />
                <HeaderLink href="/blog" name="Blog" />
                <HeaderLink href="/about" name="About" />
            </ul>
        </header >
    );
}