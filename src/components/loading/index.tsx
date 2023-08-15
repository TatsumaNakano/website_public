import styles from "./styles.module.scss"
import LoadingIcon from "@/assets/icons/icon_loading.svg"

const LoadingTemplate = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.first}>
                <div>
                    <LoadingIcon />
                </div>
                <p>
                    <span className="en">Taking longer to load than usual.<br />Thanks for your patience.</span>
                    <span className="jp">通常よりロードが長引いています。<br />もう少しお待ちください。</span>
                </p>
            </div>
            <div className={styles.second}>
                <p>
                    <span className="en">Couldn&#39;t load the data. Please reload the page.</span>
                    <span className="jp">データを取得することが出来ませんでした。ページを再読み込みしてください。</span>
                </p>
            </div>
        </div>
    );
}

export default LoadingTemplate;