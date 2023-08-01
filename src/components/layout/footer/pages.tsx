import styles from "./styles.module.scss"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li>ArtStaion</li>
                <li>Github</li>
                <li>HuggingFace</li>
                <li>LinkedIn</li>
            </ul>
            <label>@All rights reserved</label>
        </div>
    );
}