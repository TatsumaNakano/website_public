class MessageAgent {

    constructor() {

    }

    init() {

    }



}

const chatTemplate = {
    message: {
        intro: {
            message: "Hello! Could you please let me know the nature of your inquiry?",
            message_jp: "こんにちは！お問い合わせ内容をお知らせください。",
            options: [
                {
                    en: "Request for creating something",
                    jp: "制作を依頼したい",
                    detail: "If I will be working on beginning to the end, please select this.",
                    detail_jp: "制作のすべての工程の委託をご希望の場合はこちら",
                    nextAction: "requestCreate"
                },
                {
                    en: "Request for freelancing",
                    jp: "仕事を手伝ってほしい",
                    detail: "If I will be the part of creative/development team, please select this.",
                    detail_jp: "一時的に制作チームへの参加のご依頼の場合はこちら",
                    nextAction: "requestFreelancing"
                },
                {
                    en: "Request for setting a Casual Meeting",
                    jp: "カジュアル面談をしたい",
                    nextAction: "requestMeeting"
                },
                {
                    en: "Other inquiries",
                    jp: "その他お問い合わせ",
                    nextAction: "misc"
                }
            ]

        },
        orderCreate: {
            message: "Thanks for your interest!🙂 What are you looking to create?",
            message_jp: "興味を持っていただきありがとうございます🙂。どういった物の制作をお求めでしょうか。",
            options: [
                {
                    en: "Website",
                    jp: "ウェブサイト",
                    nextAction: "detail"
                },
                {
                    en: "Video",
                    jp: "動画",
                    nextAction: "detail"
                },
                {
                    en: "App(iOS & Android)",
                    jp: "アプリ",
                    nextAction: "detail"
                },
                {
                    en: "Others",
                    jp: "その他",
                    nextAction: "detail"
                }
            ]
        },
        requestFreelancing: {
            message: "Thanks for your interest!🙂 What type of job can I help you with?",
            message_jp: "興味を持っていただきありがとうございます🙂。どのようなお仕事のお手伝いをできるかお聞かせください。",
            options: "input",
            nextAction: "email"
        },
        requestMeeting: {
            message: "It will be nice to chat casually. When will be the best time for you to chat?",
            message_jp: "気軽にお話しましょう。都合のいい日程と時間帯を複数教えてください。",
            options: "calender",
            nextAction: "email"
        },
        detail: {
            message: "Could you let me know more details?",
            message_jp: "もう少し詳細も教えてください。",
            options: "input",
            nextAction: "email"
        },
        email: {
            message: "What will be a good email address that I can follow back?",
            message_jp: "折り返し連絡させて頂きますので、メールアドレスを教えてください。",
            options: "input",
            nextAction: "confirmEmail"
        },
        confirmEmail: {
            message: "Is the email looks correct to you?",
            message_jp: "メールアドレスはこちらでお間違いないでしょうか。",
            options: [
                {
                    en: "Yes, that's correct.",
                    jp: "間違いありません。",
                    nextAction: "name"
                },
                {
                    en: "No, I need to fix.",
                    jp: "修正が必要です。",
                    nextAction: "email"
                }

            ]
        },
        name: {
            message: "Lastly, may I ask your name?",
            message_jp: "最後にあなたのお名前を教えてください。",
            options: "input",
            nextActon: "sent"
        },
        sent: {
            message: "Thank you for your inquiry! You will be receiving a confirmation email. I will be following back to you as soon as possible.🙏",
            message_jp: "お問い合わせありがとうございました！確認のメールをお送りさせて頂いております。できるだけ早急に連絡させて頂きますので、今しばらくお待ちください。ご縁がありますことを願っています🙏",
            nextActon: "end"
        }
    }
}

export default MessageAgent;