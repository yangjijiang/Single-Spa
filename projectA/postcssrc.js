/**
 * css全局添加一个namespace, postcss扩展插件postcss-global-namespace
 *
 * @type {postcss | ((...plugins: postcss.AcceptedPlugin[]) => postcss.Processor) | ((plugins?: postcss.AcceptedPlugin[]) => postcss.Processor)}
 */
const postcss = require('postcss');

module.exports = postcss.plugin('postcss-global-namespace', opts => {
    opts = opts || {};
    let globalClsName = opts.hasOwnProperty('globalClsName') && opts.globalClsName
    return root => {
        root.walk(node => {
            let selectorArr = (node.selector || '').split(',')
            return node.selector = ((selectorArr || []).map((itm) => {
                if (itm.match(/^(\s*)(html|body)(\s*)$/)) {
                    return itm
                }
                return globalClsName + ' ' + itm
            }).join(','))
        })
    }
})
