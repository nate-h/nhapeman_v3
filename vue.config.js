const path = require("path");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/scss/main.scss";`
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                img: path.resolve(__dirname, "src/assets/images"),
                resume: path.resolve(__dirname, "resume")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(pdf)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: 'files/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }
};
