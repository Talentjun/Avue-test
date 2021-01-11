/*
 * @Author: yejun
 * @Date: 2020-06-30 17:57:54
 * @LastEditors: yejun
 * @LastEditTime: 2020-10-19 18:14:25
 * @Description: Do not edit
 * @FilePath: \Avue-test\vue.config.js
 */
// 基础路径 注意发布之前要先修改这里
let baseUrl = '/'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    publicPath: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: false, //eslint校验
    productionSourceMap: false,
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new BundleAnalyzerPlugin()
    //             ]
    //         }
    //     }
    // },
    chainWebpack: (config) => {
        //忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
        entry
            .add('classlist-polyfill')
            .end()
        entry
            .add('@/mock')
            .end()
    }
}