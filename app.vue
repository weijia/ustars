<script setup lang="ts">
import Search from '@/pages/components/search.vue'

const allStars = ref([
  {
    "stargazers_count": 350,
    "language": "TypeScript",
    "description": "A fully customizable component library built on top of shadcn/ui. Beautiful, accessible, and ready for production.",
    "full_name": "Codehagen/Prismui",
    "name": "Prismui",
    "topics": [
      "open-source",
      "prisma",
      "shadcn-ui",
      "tailwind",
      "typescript"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/24507211?v=4",
      "login": "Codehagen"
    },
    "html_url": "https://github.com/Codehagen/Prismui",
    "created_at": "2025-01-03T08:53:54Z",
    "updated_at": "2025-01-06T16:32:22Z"
  },
  {
    "stargazers_count": 5160,
    "language": "TypeScript",
    "description": "开源的SSL证书管理工具，可以帮助你自动申请、部署SSL证书，并在证书即将过期时自动续期。An open-source SSL certificate management tool that helps you automatically apply for and deploy SSL certificates, as well as automatically renew them when they are about to expire.",
    "full_name": "usual2970/certimate",
    "name": "certimate",
    "topics": [
      "acme",
      "automation",
      "certbot",
      "hacktoberfest",
      "https",
      "https-certificate",
      "lego",
      "letsencrypt",
      "ssl",
      "ssl-cert",
      "ssl-certificate",
      "ssl-certificates"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/1818414?v=4",
      "login": "usual2970"
    },
    "html_url": "https://github.com/usual2970/certimate",
    "created_at": "2024-08-21T03:54:39Z",
    "updated_at": "2025-01-06T13:42:04Z"
  },
  {
    "stargazers_count": 64,
    "language": "JavaScript",
    "description": "将你的星标项目做成前端页面",
    "full_name": "Mran/githubstartog",
    "name": "githubstartog",
    "topics": [
      "golang",
      "starred-repositories",
      "starred-search"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/4069404?v=4",
      "login": "Mran"
    },
    "html_url": "https://github.com/Mran/githubstartog",
    "created_at": "2024-12-12T10:01:07Z",
    "updated_at": "2025-01-06T12:57:55Z"
  },
  {
    "stargazers_count": 130,
    "language": "TypeScript",
    "description": "Generate beautiful Open Graph images",
    "full_name": "FadyMak/imgsrc-app",
    "name": "imgsrc-app",
    "topics": [
      "image-generation",
      "opengraph",
      "social"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/12938935?v=4",
      "login": "FadyMak"
    },
    "html_url": "https://github.com/FadyMak/imgsrc-app",
    "created_at": "2024-12-20T10:39:04Z",
    "updated_at": "2025-01-06T13:18:28Z"
  },
  {
    "stargazers_count": 4625,
    "language": "Rust",
    "description": "Readyset is a MySQL and Postgres wire-compatible caching layer that sits in front of existing databases to speed up queries and horizontally scale read throughput. Under the hood, ReadySet caches the results of cached select statements and incrementally updates these results over time as the underlying data changes.",
    "full_name": "readysettech/readyset",
    "name": "readyset",
    "topics": [
      "backend",
      "cache",
      "caching",
      "caching-proxy",
      "databases",
      "mysql",
      "mysql-database",
      "postgres",
      "postgresql",
      "postgresql-database",
      "rust",
      "rust-lang",
      "sql",
      "streaming-data"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/71727599?v=4",
      "login": "readysettech"
    },
    "html_url": "https://github.com/readysettech/readyset",
    "created_at": "2022-05-24T14:39:20Z",
    "updated_at": "2025-01-06T16:18:28Z"
  },
  {
    "stargazers_count": 1359,
    "language": "Go",
    "description": "Nitric is a multi-language framework for cloud applications with infrastructure from code.",
    "full_name": "nitrictech/nitric",
    "name": "nitric",
    "topics": [
      "ai",
      "aws",
      "azure",
      "backend",
      "cloud",
      "cloud-native",
      "dart",
      "devops",
      "gcp",
      "go",
      "golang",
      "infrastructure-as-code",
      "javascript",
      "microservices",
      "nitric",
      "pulumi",
      "python",
      "serverless",
      "terraform",
      "typescript"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/72055470?v=4",
      "login": "nitrictech"
    },
    "html_url": "https://github.com/nitrictech/nitric",
    "created_at": "2020-12-01T21:50:56Z",
    "updated_at": "2025-01-06T11:57:37Z"
  },
  {
    "stargazers_count": 6056,
    "language": "Python",
    "description": "A suite of utilities for converting to and working with CSV, the king of tabular file formats.",
    "full_name": "wireservice/csvkit",
    "name": "csvkit",
    "topics": [],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/17111824?v=4",
      "login": "wireservice"
    },
    "html_url": "https://github.com/wireservice/csvkit",
    "created_at": "2011-04-01T03:00:30Z",
    "updated_at": "2025-01-05T21:45:37Z"
  },
  {
    "stargazers_count": 9163,
    "language": "Shell",
    "description": "Enable macOS HiDPI and have a native setting.",
    "full_name": "xzhih/one-key-hidpi",
    "name": "one-key-hidpi",
    "topics": [
      "hidpi",
      "macos-hidpi"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/13920737?v=4",
      "login": "xzhih"
    },
    "html_url": "https://github.com/xzhih/one-key-hidpi",
    "created_at": "2018-04-02T16:30:45Z",
    "updated_at": "2025-01-06T08:09:28Z"
  },
  {
    "stargazers_count": 2969,
    "language": "TypeScript",
    "description": "🪄 An online tool for making notion-style avatars.",
    "full_name": "Mayandev/notion-avatar",
    "name": "notion-avatar",
    "topics": [
      "avatar",
      "nextjs",
      "notion"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/28648715?v=4",
      "login": "Mayandev"
    },
    "html_url": "https://github.com/Mayandev/notion-avatar",
    "created_at": "2021-09-24T04:03:03Z",
    "updated_at": "2025-01-06T16:00:54Z"
  },
  {
    "stargazers_count": 1034,
    "language": "C++",
    "description": "📟 Switch your input method through terminal",
    "full_name": "daipeihust/im-select",
    "name": "im-select",
    "topics": [
      "im",
      "keyboard-layout",
      "linux",
      "mac",
      "terminal",
      "windows"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/13344830?v=4",
      "login": "daipeihust"
    },
    "html_url": "https://github.com/daipeihust/im-select",
    "created_at": "2018-05-29T05:52:30Z",
    "updated_at": "2025-01-05T13:58:13Z"
  },
  {
    "stargazers_count": 16360,
    "language": "Python",
    "description": "A cd command that learns - easily navigate directories from the command line",
    "full_name": "wting/autojump",
    "name": "autojump",
    "topics": [
      "autojump",
      "command-line-tool",
      "filesystem",
      "python"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/622170?v=4",
      "login": "wting"
    },
    "html_url": "https://github.com/wting/autojump",
    "created_at": "2009-01-14T11:18:07Z",
    "updated_at": "2025-01-06T08:22:05Z"
  },
  {
    "stargazers_count": 852,
    "language": "Shell",
    "description": "Always on top solution, quickly install Afloat in macOS",
    "full_name": "rwu823/afloat",
    "name": "afloat",
    "topics": [
      "afloat",
      "macos",
      "on-top",
      "osx"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/890063?v=4",
      "login": "rwu823"
    },
    "html_url": "https://github.com/rwu823/afloat",
    "created_at": "2015-09-22T03:04:39Z",
    "updated_at": "2025-01-04T19:49:54Z"
  },
  {
    "stargazers_count": 366,
    "language": "Objective-C",
    "description": "An alternative to Afloat that lives in the dock icon menu ",
    "full_name": "jslegendre/AfloatX",
    "name": "AfloatX",
    "topics": [
      "macforge",
      "macforge-plugin",
      "nswindow",
      "simbl",
      "simbl-plugin"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/20951585?v=4",
      "login": "jslegendre"
    },
    "html_url": "https://github.com/jslegendre/AfloatX",
    "created_at": "2019-10-20T02:26:19Z",
    "updated_at": "2025-01-01T23:37:01Z"
  },
  {
    "stargazers_count": 8471,
    "language": "Go",
    "description": "Open Source Development Platform for building robust type-safe distributed systems with declarative infrastructure",
    "full_name": "encoredev/encore",
    "name": "encore",
    "topics": [
      "api",
      "aws",
      "backend",
      "backend-framework",
      "cloud",
      "cloud-native",
      "database",
      "devops",
      "distributed-systems",
      "encore",
      "gcp",
      "go",
      "golang",
      "microservice-framework",
      "microservices",
      "nodejs-framework",
      "postgresql",
      "serverless",
      "typescript",
      "typescript-framework"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/50438175?v=4",
      "login": "encoredev"
    },
    "html_url": "https://github.com/encoredev/encore",
    "created_at": "2021-02-17T16:33:24Z",
    "updated_at": "2025-01-06T16:14:17Z"
  },
  {
    "stargazers_count": 10286,
    "language": "TypeScript",
    "description": "A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search",
    "full_name": "hoarder-app/hoarder",
    "name": "hoarder",
    "topics": [
      "bookmark-manager",
      "bookmarks",
      "bookmarks-manager",
      "nextjs",
      "react-native",
      "read-it-later",
      "self-hosted"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/170265186?v=4",
      "login": "hoarder-app"
    },
    "html_url": "https://github.com/hoarder-app/hoarder",
    "created_at": "2024-02-06T12:28:31Z",
    "updated_at": "2025-01-06T16:23:32Z"
  },
  {
    "stargazers_count": 3085,
    "language": "Vue",
    "description": "在线批量下载微信公众号文章，支持阅读量、评论、内嵌音视频，无需搭建任何环境，可100%还原文章样式，支持私有部署",
    "full_name": "jooooock/wechat-article-exporter",
    "name": "wechat-article-exporter",
    "topics": [
      "download",
      "wechat",
      "wechat-article"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/156505552?v=4",
      "login": "jooooock"
    },
    "html_url": "https://github.com/jooooock/wechat-article-exporter",
    "created_at": "2024-07-17T14:41:12Z",
    "updated_at": "2025-01-06T10:52:36Z"
  },
  {
    "stargazers_count": 1694,
    "language": "TypeScript",
    "description": "💬 Chat with anyone on any website.",
    "full_name": "molvqingtai/WebChat",
    "name": "WebChat",
    "topics": [
      "browser-extension",
      "chat",
      "chrome-extension",
      "p2p",
      "webchat",
      "webrtc"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/26295698?v=4",
      "login": "molvqingtai"
    },
    "html_url": "https://github.com/molvqingtai/WebChat",
    "created_at": "2023-06-30T14:41:52Z",
    "updated_at": "2025-01-06T13:34:02Z"
  },
  {
    "stargazers_count": 5467,
    "language": "TypeScript",
    "description": "The visual editor for React",
    "full_name": "measuredco/puck",
    "name": "puck",
    "topics": [],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/65702254?v=4",
      "login": "measuredco"
    },
    "html_url": "https://github.com/measuredco/puck",
    "created_at": "2023-06-02T12:23:41Z",
    "updated_at": "2025-01-06T13:16:27Z"
  },
  {
    "stargazers_count": 5567,
    "language": "TypeScript",
    "description": "Open source Loom alternative. Beautiful, shareable screen recordings.",
    "full_name": "CapSoftware/Cap",
    "name": "Cap",
    "topics": [
      "app",
      "cap",
      "coss",
      "loom",
      "mac",
      "nextjs",
      "nextjs14",
      "open-source",
      "oss",
      "react",
      "record",
      "screen-capture",
      "screen-recorder",
      "screenshot",
      "solidjs",
      "tauri",
      "tauri-app",
      "typescript",
      "vite"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/151241629?v=4",
      "login": "CapSoftware"
    },
    "html_url": "https://github.com/CapSoftware/Cap",
    "created_at": "2023-11-17T20:31:46Z",
    "updated_at": "2025-01-06T16:23:34Z"
  },
  {
    "stargazers_count": 433,
    "language": "TypeScript",
    "description": "Generate OG Images with Vue templates in Nuxt.",
    "full_name": "nuxt-modules/og-image",
    "name": "og-image",
    "topics": [],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/111748132?v=4",
      "login": "nuxt-modules"
    },
    "html_url": "https://github.com/nuxt-modules/og-image",
    "created_at": "2022-12-14T10:14:51Z",
    "updated_at": "2025-01-02T01:57:11Z"
  },
  {
    "stargazers_count": 1735,
    "language": null,
    "description": "🚁🚀 机场推荐 |  熊猫VPN（PandaVPNPro）已确定跑路！快连VPN ，小牛加速器（小牛VPN）体验不佳且价格贵。低价机场，便宜机场，平价机场，性价比机场，高速机场，稳定机场，一元机场，翻墙机场，付费机场，收费机场，冷门机场，优质机场，廉价机场。机场评测，中国翻墙，科学上网，梯子。非永久免费梯子，官网，非永久免费VPN，非免费机场！VPN China。机场节点订阅，节点分享，Clash节点，V2ray节点，非免费节点。适用ClashForWindows，V2rayN，singbox，nekobox，小火箭等代理软件🚀🚁",
    "full_name": "DiningFactory/panda-vpn-pro",
    "name": "panda-vpn-pro",
    "topics": [
      "airport",
      "clash",
      "gfw",
      "hysteria2",
      "shadowsocks",
      "sing-box",
      "ssr",
      "trojan",
      "v2ray",
      "vless",
      "vmess",
      "vpn"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/130195470?v=4",
      "login": "DiningFactory"
    },
    "html_url": "https://github.com/DiningFactory/panda-vpn-pro",
    "created_at": "2023-04-08T01:36:14Z",
    "updated_at": "2025-01-06T14:23:07Z"
  },
  {
    "stargazers_count": 1715,
    "language": "Shell",
    "description": "《语法俱乐部》- 旋元佑",
    "full_name": "llwslc/grammar-club",
    "name": "grammar-club",
    "topics": [],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/5865414?v=4",
      "login": "llwslc"
    },
    "html_url": "https://github.com/llwslc/grammar-club",
    "created_at": "2019-06-04T19:15:37Z",
    "updated_at": "2025-01-06T09:46:55Z"
  },
  {
    "stargazers_count": 5200,
    "language": "Go",
    "description": "解决Cursor在免费订阅期间出现以下提示的问题:  Too many free trial accounts used on this machine. Please upgrade to pro. We have this limit in place to prevent abuse. Please let us know if you believe this is a mistake.",
    "full_name": "yuaotian/go-cursor-help",
    "name": "go-cursor-help",
    "topics": [
      "cursor",
      "error"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/50616060?v=4",
      "login": "yuaotian"
    },
    "html_url": "https://github.com/yuaotian/go-cursor-help",
    "created_at": "2024-12-09T07:07:09Z",
    "updated_at": "2025-01-06T16:06:53Z"
  },
  {
    "stargazers_count": 313,
    "language": "TypeScript",
    "description": "一个用于抓取和分析 X (Twitter) 用户数据和推文的工具。",
    "full_name": "xiaoxiunique/x-kit",
    "name": "x-kit",
    "topics": [
      "crawler",
      "kols",
      "twitter",
      "x"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/27221739?v=4",
      "login": "xiaoxiunique"
    },
    "html_url": "https://github.com/xiaoxiunique/x-kit",
    "created_at": "2024-12-16T03:05:01Z",
    "updated_at": "2025-01-06T16:01:11Z"
  },
  {
    "stargazers_count": 7453,
    "language": "TypeScript",
    "description": "Get started quickly with Next.js, Postgres, Stripe, and shadcn/ui.",
    "full_name": "leerob/next-saas-starter",
    "name": "next-saas-starter",
    "topics": [
      "nextjs",
      "postgres",
      "shadcn-ui",
      "stripe"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/9113740?v=4",
      "login": "leerob"
    },
    "html_url": "https://github.com/leerob/next-saas-starter",
    "created_at": "2024-09-10T00:18:56Z",
    "updated_at": "2025-01-06T16:07:03Z"
  },
  {
    "stargazers_count": 28742,
    "language": "TypeScript",
    "description": "Shardeum is an EVM based autoscaling blockchain",
    "full_name": "shardeum/shardeum",
    "name": "shardeum",
    "topics": [
      "blockchain",
      "dapp",
      "ethereum",
      "evm",
      "evm-blockchain",
      "payments",
      "sharding",
      "typescript"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/98940804?v=4",
      "login": "shardeum"
    },
    "html_url": "https://github.com/shardeum/shardeum",
    "created_at": "2024-04-16T22:37:25Z",
    "updated_at": "2025-01-06T16:29:04Z"
  },
  {
    "stargazers_count": 618,
    "language": "TypeScript",
    "description": "Synpress is e2e testing framework based on Cypress.io and playwright with support for metamask.",
    "full_name": "Synthetixio/synpress",
    "name": "synpress",
    "topics": [
      "blockchain",
      "cypress",
      "docker",
      "e2e",
      "ethereum",
      "metamask",
      "playwright",
      "testing"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/30892445?v=4",
      "login": "Synthetixio"
    },
    "html_url": "https://github.com/Synthetixio/synpress",
    "created_at": "2020-11-18T22:10:14Z",
    "updated_at": "2025-01-05T02:16:21Z"
  },
  {
    "stargazers_count": 1346,
    "language": "C",
    "description": "HTTP client for PostgreSQL, retrieve a web page from inside the database.",
    "full_name": "pramsey/pgsql-http",
    "name": "pgsql-http",
    "topics": [],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/113883?v=4",
      "login": "pramsey"
    },
    "html_url": "https://github.com/pramsey/pgsql-http",
    "created_at": "2012-04-18T22:32:42Z",
    "updated_at": "2025-01-02T13:34:26Z"
  },
  {
    "stargazers_count": 30845,
    "language": "TypeScript",
    "description": "Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly. Use Payload as a headless CMS or for building powerful applications.",
    "full_name": "payloadcms/payload",
    "name": "payload",
    "topics": [
      "cms",
      "content-management",
      "content-management-system",
      "express",
      "graphql",
      "headless",
      "headless-cms",
      "jamstack",
      "javascript",
      "mit-license",
      "mongodb",
      "nextjs",
      "nodejs",
      "open-source",
      "payload",
      "payloadcms",
      "postgres",
      "react",
      "typescript"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/62968818?v=4",
      "login": "payloadcms"
    },
    "html_url": "https://github.com/payloadcms/payload",
    "created_at": "2021-01-05T18:49:45Z",
    "updated_at": "2025-01-06T16:21:11Z"
  },
  {
    "stargazers_count": 1390,
    "language": null,
    "description": "Postman collection for Binance Public API, including spot, margin, futures, etc.",
    "full_name": "binance/binance-api-postman",
    "name": "binance-api-postman",
    "topics": [
      "binance-api",
      "connector",
      "crypto",
      "market-data"
    ],
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/69836600?v=4",
      "login": "binance"
    },
    "html_url": "https://github.com/binance/binance-api-postman",
    "created_at": "2020-02-07T02:11:10Z",
    "updated_at": "2025-01-06T15:54:50Z"
  }
])

onMounted(async () => {
  const response = await fetch('/api/stars')
  allStars.value = await response.json()
})

provide('allStars', allStars)

</script>
<template>
  <div class="bg-gradient-to-t from-[#C1C9DB] to-[#E0E0E1] h-full min-h-screen bg-fixed trancy-zh-CN">
    <NuxtLayout>
      <Search />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
