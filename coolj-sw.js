const
    // cooljed-v0.2.4-20220828
    __cName = 'cooljed-v024-1',

    __appFiles = [
        "/",
        "/base/hlparse/base.js",
        "/base/hlparse/languages/cplus.js",
        "/base/hlparse/languages/css.js",
        "/base/hlparse/languages/golang.js",
        "/base/hlparse/languages/html.js",
        "/base/hlparse/languages/javascript.js",
        "/base/hlparse/languages/mdline.js",
        "/base/hlparse/languages/normal.js",
        "/base/hlparse/main.js",
        "/base/main.js",
        "/base/scripter.js",
        "/base/shortcuts.js",
        "/base/tpb/config.js",
        "/base/tpb/default.css",
        "/base/tpb/tools/date.js",
        "/base/tpb/tools/ease.js",
        "/base/tpb/tools/filter.js",
        "/base/tpb/tools/hotkey.js",
        "/base/tpb/tools/render.js",
        "/base/tpb/tools/spliter.js",
        "/base/tpb/tools/templater.js",
        "/base/tpb/tools/tloader.js",
        "/base/tpb/tools/util.js",
        "/base/tpb/tpb.esm.js",
        "/base/tpb/user.js",
        "/base/tquery/plugins/history.min.js",
        "/base/tquery/tquery.min.js",
        "/config.js",
        "/coolj.webmanifest",
        "/docs/intro.html",
        "/editor.js",
        "/favicon.ico",
        "/icons/cooljed.png",
        "/icons/icon-168.png",
        "/index.js",
        "/plugins/coolmd/extend.js",
        "/plugins/coolmd/files.json",
        "/plugins/coolmd/index.html",
        "/plugins/coolmd/logo.png",
        "/plugins/coolmd/main.js",
        "/plugins/coolmd/styles.css",
        "/plugins/example/extend.js",
        "/plugins/example/files.json",
        "/plugins/example/index.html",
        "/plugins/example/logo.png",
        "/plugins/example/main.js",
        "/plugins/example/maps.json",
        "/plugins/example/styles.css",
        "/register.js",
        "/styles.css",
        "/styles/example/codes.css",
        "/styles/example/main.css",
        "/styles/hometown/codes.css",
        "/styles/hometown/main.css",
        "/styles/wildwide/codes.css",
        "/styles/wildwide/main.css",
        "/templates/editor.html",
        "/templates/inputs.html",
        "/templates/main.html",
        "/templates/maps.json",
        "/templates/obts/alink.json",
        "/templates/obts/codes.json",
        "/templates/obts/create.json",
        "/templates/obts/etext.json",
        "/templates/obts/graph.json",
        "/templates/obts/h2header.json",
        "/templates/obts/indet2val.json",
        "/templates/obts/itexts.json",
        "/templates/obts/list1.json",
        "/templates/obts/list2.json",
        "/templates/obts/list2ps.json",
        "/templates/obts/pastes.json",
        "/templates/obts/prop1.json",
        "/templates/obts/propcss.json",
        "/templates/obts/state2val.json",
        "/templates/obts/sublist.json",
        "/templates/obts/table.json",
        "/templates/obts/xsubmit.json",
        "/templates/options.html",
        "/templates/panel.html",
        "/templates/properties.html",
        "/templates/styles.html",
        "/themes/Classic-gray/icons.css",
        "/themes/Classic-gray/images/icons.png",
        "/themes/Classic-gray/style.css",
        "/themes/Dark-less/icons.css",
        "/themes/Dark-less/images/icons.png",
        "/themes/Dark-less/style.css",
        "/themes/Dark-less/style-ligh.css",
        "/themes/Example/icons.css",
        "/themes/Example/images/current.png",
        "/themes/Example/images/icons.png",
        "/themes/Example/images/selected.png",
        "/themes/Example/style.css",
        "/themes/The-blue/icons.css",
        "/themes/The-blue/images/icons.png",
        "/themes/The-blue/style.css",
        "/themes/beep.ogg",
        "/themes/normalize.css",
    ];


/**
 * 初始缓存准备。
 * @param  {String} name 缓存名
 * @param  {[String]} files 待缓存文件
 * @return {Promise}
 */
async function cacheReady( name, files ) {
    const cache = await caches.open( name );
    await cache.addAll( files );
}


/**
 * 更新后清理缓存。
 * 在用户关闭所有旧sw管理的页面后执行。
 * @param  {String} name 缓存名称
 * @return {Promise}
 */
async function updateClean( name ) {
    const list = await caches.keys();
    return Promise.all( list.map( key => name !== key && caches.delete(key) ) );
}


/**
 * 从响应补充缓存。
 * @param  {FetchEvent} ev 请求事件对象
 * @param  {String} name 缓存名
 * @return {Response}
 */
async function respondCache( ev, name ) {
    let _resp = await caches.match( ev.request );

    if ( _resp ) {
        return _resp;
    }
    console.log( `[Service Worker] Caching new resource: ${ev.request.url}` );

    // 丢弃原有请求的状态直接使用.url，
    // 否则刷新fetch可能会出错（beep.ogg）。
    _resp = await fetch( ev.request.url );

    if ( _resp.ok ) {
        let cache = await caches.open( name );
        cache.put( ev.request, _resp.clone() );
    }
    return _resp;
}



self.addEventListener(
    'install',
    ev => ev.waitUntil( cacheReady(__cName, __appFiles) )
);


// 更新清理。
self.addEventListener(
    'activate',
    ev => ev.waitUntil( updateClean(__cName) )
);


self.addEventListener(
    'fetch',
    ev => ev.respondWith( respondCache(ev, __cName) )
);

