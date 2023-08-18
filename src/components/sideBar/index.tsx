import styles from "./styles.module.scss"

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div>
                <div className={styles.profile}><div></div><div></div></div>
                {/* <h3 className="en">Hi! I&#39;m Tatsuma.</h3>
                <h3 className="jp">こんにちは！</h3> */}

                <p className="en">I am a freelance Creative Technologist living in Japan.</p>
                <p className="jp">フリーでデザイナー・個人開発者をやっております。</p>
                <p className="en">My Ikigai is making people happy with what I make.</p>
                <p className="jp">僕の作った物で人が喜んでくれるのが生き甲斐です。</p>
                <br />
                <p className="en">Feel free to drop me a message if you&#39;re interested in</p>
                <p className="en">working together and bringing our ideas to life.</p>
                <p className="jp">お仕事のご依頼はお問い合わせから受け付けております。</p>
            </div>
        </div>
    );
}

export default SideBar;