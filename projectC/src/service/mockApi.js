import Mock from 'mockjs'

Mock.mock(/(app1Api)/, function (options) {
    // const [body, type] = [options.body, options.type]
    console.debug('--app1Api-mock---', options)
    const result = {appName: 'app1', nowDate: Date.now()}
    return result
})

