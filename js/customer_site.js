const CUSTOMER_SITES = {
    yinghua: {
        api: "http://m3u8.apiyhzy.com/api.php/provide/vod",
        name: "樱花资源"
    },

    zyku: {
        api: "http://api.1080zyku.com/inc/api.php/provide/vod",
        name: "优质资源库"
    },

    sdzy: {
        api: "http://sdzyapi.com/api.php/provide/vod",
        name: "闪电资源"
    },

    hongniu: {
        api: "http://hongniuzy2.com/api.php/provide/vod",
        name: "红牛资源"
    },

    uku: {
        api: "http://api.ukuapi.com/api.php/provide/vod",
        name: "U酷资源"
    },

    wolong: {
        api: "http://collect.wolongzyw.com/api.php/provide/vod",
        name: "卧龙资源"
    },

    apibd: {
        api: "http://api.apibdzy.com/api.php/provide/vod",
        name: "百度资源"
    },

    lzi: {
        api: "http://cj.lziapi.com/api.php/provide/vod",
        name: "量子资源"
    },

    tianyi: {
        api: "https://www.911ysw.top/tianyi.php/provide/vod",
        name: "天翼资源"
    },

    yaya: {
        api: "https://cj.yayazy.net/api.php/provide/vod",
        name: "丫丫资源"
    },

    piaoling: {
        api: "https://p2100.net/api.php/provide/vod",
        name: "飘零影院"
    },

    wujin: {
        api: "https://api.wujinapi.me/api.php/provide/vod",
        name: "无尽资源"
    },

    zuida: {
        api: "http://zuidazy.me/api.php/provide/vod",
        name: "最大资源"
    },

    niuniu: {
        api: "https://api.niuniuzy.me/api.php/provide/vod",
        name: "牛牛资源"
    },

    zy360: {
        api: "https://360zy.com/api.php/provide/vod",
        name: "360资源"
    },

    jszy: {
        api: "https://jszyapi.com/api.php/provide/vod",
        name: "极速资源"
    },

    ikun: {
        api: "https://ikunzyapi.com/api.php/provide/vod",
        name: "爱坤资源"
    },

    ffzy: {
        api: "http://cj.ffzyapi.com/api.php/provide/vod",
        name: "非凡资源"
    },

    bfzy: {
        api: "https://bfzyapi.com/api.php/provide/vod",
        name: "暴风资源"
    },

    heimuer: {
        api: "https://www.heimuer.tv/api.php/provide/vod",
        name: "黑木耳资源"
    },

    dbzy: {
        api: "https://caiji.dbzy5.com/api.php/provide/vod",
        name: "豆瓣资源"
    },

    iqiyi: {
        api: "https://iqiyizyapi.com/api.php/provide/vod",
        name: "爱奇艺资源"
    },

    maotai: {
        api: "https://caiji.maotaizy.cc/api.php/provide/vod",
        name: "茅台资源"
    },

    mdzy: {
        api: "https://www.mdzyapi.com/api.php/provide/vod",
        name: "魔都资源"
    },

    ruyi: {
        api: "https://cj.rycjapi.com/api.php/provide/vod",
        name: "如意资源"
    },

    mozhuazy: {
        api: "https://mozhuazy.com/api.php/provide/vod",
        name: "魔爪资源"
    },

    subo: {
        api: "https://subocj.com/api.php/provide/vod",
        name: "速播资源"
    },

    dytt: {
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
        name: "电影天堂"
    },

    tyys: {
        api: "https://tyyszyapi.com/api.php/provide/vod",
        name: "天涯影视资源"
    },

    wwzy: {
        api: "https://wwzy.tv/api.php/provide/vod",
        name: "旺旺短剧"
    },

    okcdn: {
        api: "https://vs.okcdn100.top/api.php/provide/vod",
        name: "小绵羊资源"
    },

    jyzy: {
        api: "https://jyzyapi.com/provide/vod",
        name: "金鹰资源"
    },

    guangsu: {
        api: "https://api.guangsuapi.com/api.php/provide/vod",
        name: "光速资源"
    },

    jinchan: {
        api: "https://zy.jinchancaiji.com/api.php/provide/vod",
        name: "金蝉资源"
    },

    maoyan: {
        api: "https://api.maoyanapi.top/api.php/provide/vod",
        name: "猫眼资源"
    },

    taopian: {
        api: "https://taopianapi.com/cjapi/mc/vod",
        name: "淘片资源网"
    },

    qiqi: {
        api: "https://www.qiqidys.com/api.php/provide/vod",
        name: "七七资源"
    },

    qw: {
        api: "https://www.jhyrjp.com/api.php/provide/vod",
        name: "影视资源"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
