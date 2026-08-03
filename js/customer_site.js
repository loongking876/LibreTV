const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    heimuer: {
        api: "https://json.heimuer.xyz/api.php/provide/vod",
        name: "黑木耳资源"
    },
    yinghua: {
        api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
        name: "樱花资源"
    },
    360zy: {
        api: "https://360zy.com/api.php/provide/vod",
        name: "360资源"
    },
    ffzy: {
        api: "http://ffzy5.tv/api.php/provide/vod",
        name: "非凡资源"
    },
    bfzy: {
        api: "https://bfzyapi.com/api.php/provide/vod",
        name: "暴风资源"
    },
    apibdzy: {
        api: "https://api.apibdzy.com/api.php/provide/vod",
        name: "百度云资源"
    },
    wujin: {
        api: "https://api.wujinapi.me/api.php/provide/vod",
        name: "无尽资源"
    },
    mdzy: {
        api: "https://www.mdzyapi.com/api.php/provide/vod",
        name: "魔都资源"
    },
    mozhuazy: {
        api: "https://mozhuazy.com/api.php/provide/vod",
        name: "魔爪资源"
    },
    dbzy: {
        api: "https://dbzy.com/api.php/provide/vod",
        name: "豆瓣资源"
    },
    jszy: {
        api: "https://jszyapi.com/api.php/provide/vod",
        name: "极速资源"
    },
    hwba: {
        api: "https://cjhwba.com/api.php/provide/vod",
        name: "华为吧资源"
    },
    wolong: {
        api: "https://wolongzyw.com/api.php/provide/vod",
        name: "卧龙资源"
    },
    iqiyi: {
        api: "https://www.iqiyizyapi.com/api.php/provide/vod",
        name: "爱奇艺资源"
    },
    xiaomaomi: {
        api: "https://zy.xiaomaomi.cc/api.php/provide/vod",
        name: "小猫咪资源"
    },
    tyys: {
        api: "https://tyyszy.com/api.php/provide/vod",
        name: "天涯资源"
    },
    ryzy: {
        api: "https://cj.rycjapi.com/api.php/provide/vod",
        name: "如意资源"
    },
    dytt: {
        api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
        name: "电影天堂资源"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
