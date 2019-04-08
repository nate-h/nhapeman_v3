const path = require("path");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/scss/main.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rules.delete("svg").end()
            .rule('raw')
            .test(/\.text$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
            ;
    },
    configureWebpack: {
        resolve: {
            alias: {
                img: path.resolve(__dirname, "src/assets/images"),
                subs: path.resolve(__dirname, "submodules")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(pdf)(\?.*)?$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: "files/[name].[hash:8].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    loader: "vue-svg-loader"
                }
            ]
        }
    }
};
