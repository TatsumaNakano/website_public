import CertificateItem from './certificateItem'
import styles from "./styles.module.scss"

export default () => {
    return (
        <div className={styles.certs}>
            <h1>Certificates</h1>
            {certificates.map((item: any, index: number) => {
                return <CertificateItem data={item} key={index} />
            })}
        </div>
    )
}

var certificates = [
    {
        date: "May 29, 2023",
        title: "Introduction to Deep Learning & Neural Networks with Keras",
        icon: "https://cdn-icons-png.flaticon.com/512/5969/5969083.png",
        link: "https://www.coursera.org/account/accomplishments/verify/DQA7ULANY7UB"
    },
    {
        date: "Jult 23, 2023",
        title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        icon: "https://cdn-icons-png.flaticon.com/512/5969/5969083.png",
        link: "https://www.coursera.org/account/accomplishments/certificate/3QYHAG967VJ3"
    },


]