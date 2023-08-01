const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                },
            ],
        });
        return config;
    },
    images: {
        disableStaticImages: true, // importした画像の型定義設定を無効にする
        // remotePatterns: [{
        //     protocol: "https",
        //     hostname: "cm5y5tem.tatsuma.co",
        // port: "",
        // pathname: "/"
        // }]
    },
    // i18n: {
    //     locales: ["en", "ja"],
    //     defaultLocale: "en",
    // },
}

module.exports = nextConfig
