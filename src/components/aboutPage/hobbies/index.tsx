import styles from "./styles.module.scss"

const Hobbies = function () {
    return (
        <div className={styles.hobbies}>
            <h1 className="en">Hobbies</h1>
            <h1 className="jp">趣味</h1>
            <div>
                <p className="en">My hobby is playing with computers. I also enjoy hikes. I also have PADI open-water license.</p>
                <p className="jp">趣味はコンピュータで物を作ることです。ハイキングも好きです。PADI Open-waterのダイビングライセンスを持ってます。</p>
            </div>
        </div>
    )
}

export default Hobbies;