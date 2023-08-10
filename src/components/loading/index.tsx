import styles from "./styles.module.scss"
import LoadingIcon from "@/assets/icons/icon_loading.svg"

const LoadingTemplate = () => {
    return (
        <div className={styles.loading}>
            <LoadingIcon />
        </div>
    );
}

export default LoadingTemplate;