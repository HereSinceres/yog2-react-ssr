/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'home');
fis.enableNPM({
    autoPack: true
});
// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);
// 按照 react-redux 的目录规范设置源代码目录
fis.match(
    '/client/{actions,components,constants,routes,containers,page,reducers,store}/**.{js,es,jsx,ts,tsx}',
    {
        parser: fis.plugin('typescript', {
            compilerOptions: {
                
            },
            module: 1,
            target: 0
        }),
        isJsXLike: true,
        isMod: true
    }
);

fis.media('debug').match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
fis.media('debug-prod').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});

//  yog2 release debug --watch