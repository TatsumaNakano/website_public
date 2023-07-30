import CertificateItem from './certificateItem'
import styles from "./styles.module.scss"

export default () => {
    return (
        <div className={styles.certs}>
            <h1 className="en">Certificates</h1>
            <h1 className="jp">資格</h1>
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
        date: "July 23, 2023",
        title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        icon: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125559383%2F317212851579%2F1%2Foriginal.20210208-232017?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2246%2C2246&s=40aa0fb13fe40ce86241ae7b8fc8caea",
        link: "https://www.coursera.org/account/accomplishments/certificate/3QYHAG967VJ3"
    },
    {
        date: "July 30, 2023",
        title: "AWS Cloud Technical Essentials",
        icon: "https://cdn.iconscout.com/icon/free/png-256/free-aws-1869025-1583149.png",
        link: "https://www.coursera.org/account/accomplishments/certificate/2HZY6LPVFWXF"
    },


]