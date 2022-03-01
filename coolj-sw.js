const
    version = 'cooljed-v1.0-20220301',

    __cName = 'cooljed-v1',

    __appFiles = [
        '/',
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
        "/icons/icon-192.png",
        "/index.js",
        "/plugins/coolmd/extend.js",
        "/plugins/coolmd/files.json",
        "/plugins/coolmd/index.html",
        "/plugins/coolmd/logo.png",
        "/plugins/coolmd/styles.css",
        "/plugins/example/extend.js",
        "/plugins/example/files.json",
        "/plugins/example/index.html",
        "/plugins/example/logo.png",
        "/plugins/example/maps.json",
        "/plugins/example/styles.css",
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
        "/templates/obts/figimg.json",
        "/templates/obts/figsvg.json",
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
        '/themes/beep.ogg',
    ];


/**
 * 缓存就绪处理。
 * @param {String} name 缓存名
 * @param {[String]} files 待缓存文件
 */
async function cacheReady( name, files ) {
    const cache = await caches.open( name );
    await cache.addAll( files );
}


/**
 * 从缓存响应。
 * @param  {FetchEvent} ev 请求事件对象
 * @param  {String} name 缓存名
 * @return {Response}
 */
async function respondCache( ev, name ) {
    let _resp = await caches.match( ev.request );

    if ( _resp ) {
        return _resp;
    }
    _resp = await fetch( ev.request.url );
    console.log( `[Service Worker] Caching new resource: ${ev.request.url}` );

    let cache = await caches.open( name );
    cache.put( ev.request, _resp.clone() );

    return _resp;
}


self.addEventListener(
    'install',
    ev => ev.waitUntil( cacheReady(__cName, __appFiles) )
);

self.addEventListener(
    'fetch',
    ev => ev.respondWith( respondCache(ev, __cName) )
);
