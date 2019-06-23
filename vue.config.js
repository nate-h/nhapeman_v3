const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/nhapeman_v3/" : "/",
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/scss/main.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.module.rules.delete("svg").end();
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
