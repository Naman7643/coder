self.__BUILD_MANIFEST = function(e, s, t, a, c, i, d, o, n, b, r, u, h, p, g, k, f, l, j, I, m, x, w, B, Y, G, v, S, _, y, A, M, T, F, N, C, D, P, L, U, W, E, V) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [{
                has: T,
                source: "/embed/:docId*",
                destination: "/public/:docId*"
            }, {
                has: T,
                source: "/templates/([\\w-]*-|):id(\\w+)",
                destination: "/templates/:id"
            }, {
                has: T,
                source: "/folders/:channelSlug*",
                destination: U
            }, {
                has: T,
                source: "/sites/:siteId/pages/:pageId/preview",
                destination: "/sites/:siteId/pages/:pageId"
            }, {
                has: [{
                    type: "header",
                    key: "user-agent",
                    value: "(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|Google-Certificates-Bridge|Iframely|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot)(.*)"
                }],
                source: "/(docs|example|public)/:slug",
                destination: "/docs-robot/:slug"
            }, {
                has: T,
                source: "/:path*.map",
                destination: W
            }],
            fallback: []
        },
        "/": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, j, w, F, "static/chunks/87-ddc149b7bda654e9.js", c, h, p, k, f, I, m, B, N, "static/chunks/pages/index-a343d20357ac1c35.js"],
        "/404": ["static/chunks/pages/404-6d1d08135f2921df.js"],
        "/_error": ["static/chunks/pages/_error-2203fa1acbfb01a1.js"],
        "/_offline": ["static/chunks/pages/_offline-82c0b04f8ee121be.js"],
        "/admin/prompt-studio/[prompt]": [e, "static/chunks/742-bb48ac66e33dd44e.js", "static/chunks/pages/admin/prompt-studio/[prompt]-211ab3c61746cca2.js"],
        "/auth/done": ["static/chunks/pages/auth/done-02539a1509213d2d.js"],
        "/auth/error": ["static/chunks/pages/auth/error-52fd65956ba2813f.js"],
        "/checkout/success": ["static/chunks/pages/checkout/success-d0f2b1794ab2b3aa.js"],
        "/create": [e, p, "static/chunks/pages/create-982b182f8cf16b17.js"],
        "/create/generate": [s, t, i, d, o, n, b, e, a, r, u, c, h, C, "static/chunks/pages/create/generate-116a6b7ab09d46ce.js"],
        "/create/import": [s, t, i, d, o, n, b, e, a, r, u, c, h, p, C, "static/chunks/pages/create/import-3fc895853df61973.js"],
        "/create/paste": [s, t, i, d, o, n, b, e, a, r, u, c, h, p, C, E, "static/chunks/pages/create/paste-4e0be6946601c83b.js"],
        "/demo/[docId]": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, "static/chunks/pages/demo/[docId]-9e262cb62d72dbd5.js"],
        "/docs/screenshot": [s, t, i, d, o, n, b, "static/chunks/fb69e836-1880cafc5f2594d6.js", e, a, r, u, "static/chunks/5743-0926d679cbc3bfca.js", c, h, p, k, "static/chunks/3496-ebe2c3f8929098a6.js", "static/chunks/pages/docs/screenshot-a9509a3d0622ad77.js"],
        "/docs/[docId]": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, "static/chunks/pages/docs/[docId]-dcd776bed2fde46c.js"],
        "/docs-robot/[docId]": [s, t, i, d, o, n, b, e, a, r, u, "static/chunks/3823-9d34e2319fb8a2c4.js", c, h, k, "static/chunks/pages/docs-robot/[docId]-13c98753dfa6556f.js"],
        "/example/[docId]": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, "static/chunks/pages/example/[docId]-3f6b4e1fab8193f0.js"],
        "/forgot": [y, g, A, M, "static/chunks/pages/forgot-ac221510c937196f.js"],
        "/generate": ["static/chunks/pages/generate-68484d222fccbf89.js"],
        "/generate/[id]": [s, t, i, d, o, n, b, e, a, r, u, Y, "static/chunks/6622-866e997607f66d1f.js", c, h, G, C, E, "static/chunks/pages/generate/[id]-745ddc6eaff2bfc2.js"],
        "/inspiration": [s, t, i, d, o, n, b, e, a, r, u, g, F, D, c, h, p, k, f, N, P, "static/chunks/pages/inspiration-4d5ad287b5378a5d.js"],
        "/invitations/docs/[docId]": [y, e, g, A, p, M, "static/chunks/pages/invitations/docs/[docId]-076b6c62e07bc4ad.js"],
        "/invitations/workspaces/[workspaceId]": [y, g, A, M, "static/chunks/pages/invitations/workspaces/[workspaceId]-ddd7a51975624a18.js"],
        "/new": [s, t, i, d, o, n, b, e, a, r, u, c, h, "static/chunks/pages/new-bc2dc577b91c3488.js"],
        "/public/[docId]": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, "static/chunks/pages/public/[docId]-d882d1e032196ffa.js"],
        "/published/[docId]": [s, t, i, d, o, n, b, e, a, r, u, c, h, k, V, "static/chunks/pages/published/[docId]-8ad14b5baf96f194.js"],
        "/published_mobile/[docId]": [s, t, i, d, o, n, b, e, a, r, u, c, h, k, V, "static/chunks/pages/published_mobile/[docId]-26d5916cf2d93a52.js"],
        "/reset": [y, g, A, M, "static/chunks/pages/reset-d1f7536150c33800.js"],
        "/sandbox/[pageName]": [s, t, i, d, o, n, b, l, e, a, r, u, j, "static/chunks/4600-3d069bc7707a0f13.js", c, h, k, I, m, "static/chunks/pages/sandbox/[pageName]-5c43986f5d5806c3.js"],
        "/setup": [y, g, A, M, "static/chunks/pages/setup-1942b637b26b1965.js"],
        "/signin": [y, g, A, M, "static/chunks/pages/signin-3d7a045b91fdd37e.js"],
        "/signup": [y, g, A, M, "static/chunks/pages/signup-185048a690e24085.js"],
        "/sites/[siteId]": [e, p, "static/chunks/pages/sites/[siteId]-5f7ab08f86f4fe7c.js"],
        "/sites/[siteId]/domains": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, L, "static/chunks/pages/sites/[siteId]/domains-f677089f44b371b8.js"],
        "/sites/[siteId]/pages/[docId]": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, L, "static/chunks/pages/sites/[siteId]/pages/[docId]-e65beb711905e5b3.js"],
        "/sites/[siteId]/settings": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, L, "static/chunks/pages/sites/[siteId]/settings-6b453b69a9d059d0.js"],
        "/sites/[siteId]/themes": [s, t, i, d, o, n, b, l, x, e, a, r, u, g, Y, j, w, v, c, h, p, k, f, G, I, m, B, S, _, L, "static/chunks/pages/sites/[siteId]/themes-8c2d319fccb8b583.js"],
        "/slack": [e, p, "static/chunks/pages/slack-07698077eb931933.js"],
        "/templates": [s, t, i, d, o, n, b, e, a, r, u, g, F, D, c, h, p, k, f, N, P, "static/chunks/pages/templates-ef816a34f7b6ccec.js"],
        "/templates/categories/[categorySlug]": [s, t, i, d, o, n, b, e, a, r, u, g, F, D, c, h, p, k, f, N, P, "static/chunks/pages/templates/categories/[categorySlug]-1a3e0e66af078dda.js"],
        "/templates/[id]": [s, t, i, d, o, n, b, e, a, r, u, g, F, D, c, h, p, k, f, N, P, "static/chunks/pages/templates/[id]-1c5dbd1701ec32bb.js"],
        "/theme-generate": ["static/chunks/pages/theme-generate-da3d57f49150240f.js"],
        "/tldraw": [s, t, a, c, "static/css/3a638670584f9430.css", "static/chunks/pages/tldraw-c2a1aafa1563521a.js"],
        "/user-deleted": [e, p, "static/chunks/pages/user-deleted-47ece15533d880bb.js"],
        "/welcome": [e, p, "static/chunks/pages/welcome-5486ac2368a7f806.js"],
        "/[orgId]/join": [y, e, g, A, p, M, "static/chunks/pages/[orgId]/join-fbce9100b81800c7.js"],
        sortedPages: [U, W, "/_app", "/_error", "/_offline", "/admin/prompt-studio/[prompt]", "/auth/done", "/auth/error", "/checkout/success", "/create", "/create/generate", "/create/import", "/create/paste", "/demo/[docId]", "/docs/screenshot", "/docs/[docId]", "/docs-robot/[docId]", "/example/[docId]", "/forgot", "/generate", "/generate/[id]", "/inspiration", "/invitations/docs/[docId]", "/invitations/workspaces/[workspaceId]", "/new", "/public/[docId]", "/published/[docId]", "/published_mobile/[docId]", "/reset", "/sandbox/[pageName]", "/setup", "/signin", "/signup", "/sites/[siteId]", "/sites/[siteId]/domains", "/sites/[siteId]/pages/[docId]", "/sites/[siteId]/settings", "/sites/[siteId]/themes", "/slack", "/templates", "/templates/categories/[categorySlug]", "/templates/[id]", "/theme-generate", "/tldraw", "/user-deleted", "/welcome", "/[orgId]/join"]
    }
}("static/chunks/9497-847c328c942f2168.js", "static/chunks/b13ba9de-728fa6994d76cb9e.js", "static/chunks/9b583bcd-cc628e696cb2b575.js", "static/chunks/1517-20b96e73398efd0d.js", "static/chunks/9849-bffe03a7dc52b471.js", "static/chunks/69bd6bf3-29f0b7cb8f105621.js", "static/chunks/3d35b88c-b76b02b8b4f685a8.js", "static/chunks/998ccc15-e34c55ecc60fa86b.js", "static/chunks/91bbf309-b834bec362a19596.js", "static/chunks/a29ae703-5438c25e21c2428c.js", "static/css/a8859db864af7fa7.css", "static/chunks/380-464a37cade591083.js", "static/chunks/1819-65715bbd1c9c3216.js", "static/chunks/9962-ddc38b6bf927916e.js", "static/chunks/9097-dde7416c74eb2f62.js", "static/chunks/1153-0aefc4240ff0ac01.js", "static/chunks/4400-e06708ec5459a3c6.js", "static/chunks/64bbefcc-07681d1f4a56d80c.js", "static/chunks/8022-d5ee27fd84f88aa8.js", "static/chunks/9836-0093dfc8125c5b52.js", "static/chunks/7581-df8fc81732fbbff1.js", "static/chunks/e13d4e3c-1e577e36c3ee2b23.js", "static/chunks/3167-d1324313ec80cbeb.js", "static/chunks/4188-a265e928dd8fe678.js", "static/chunks/2274-f10799d1f0ecd3ca.js", "static/chunks/417-65bc05e11994bb4e.js", "static/chunks/8503-9ec044414d314fca.js", "static/chunks/8923-7ea943d2da61c6f8.js", "static/chunks/3275-570a70a532dda001.js", "static/chunks/9814d858-6888b4d279a90af0.js", "static/chunks/1918-c463925f61842d8a.js", "static/chunks/9816-0343e16f840f1692.js", void 0, "static/chunks/6364-55cee936d70a00de.js", "static/chunks/4999-38e7a6675be91de8.js", "static/chunks/7693-c4988628f2145a89.js", "static/chunks/1821-b0f589de19ff0607.js", "static/chunks/6146-92a09c10b13d8d73.js", "static/chunks/3048-b28a9c2cec1de290.js", "/", "/404", "static/chunks/9631-096cb8753c4da6a9.js", "static/chunks/6154-ee1a3d988e268253.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();