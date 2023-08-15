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
    //     locales: ['en-US', 'en', 'ja-JP', 'ja'],
    //     defaultLocale: 'en',

    //     domains: [
    //         {
    //             // Note: subdomains must be included in the domain value to be matched
    //             // e.g. www.example.com should be used if that is the expected hostname
    //             domain: 'en.tatsuma.co',
    //             defaultLocale: 'en',
    //         },
    //         {
    //             domain: 'ja.tatsuma.co',
    //             defaultLocale: 'ja',
    //         },
    //         {
    //             domain: 'example.nl',
    //             defaultLocale: 'nl-NL',
    //             // specify other locales that should be redirected
    //             // to this domain
    //             locales: ['nl-BE'],
    //         },
    //     ],
    // },
}

module.exports = nextConfig
