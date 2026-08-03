const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
    {
        "name": "黑木耳资源",
        "url": "https://json.heimuer.xyz/api.php/provide/vod"
    },
    {
        "name": "樱花资源",
        "url": "https://m3u8.apiyhzy.com/api.php/provide/vod"
    },
    {
        "name": "360资源",
        "url": "https://360zy.com/api.php/provide/vod"
    },
    {
        "name": "非凡资源",
        "url": "http://ffzy5.tv/api.php/provide/vod"
    },
    {
        "name": "暴风资源",
        "url": "https://bfzyapi.com/api.php/provide/vod"
    },
    {
        "name": "百度云资源",
        "url": "https://api.apibdzy.com/api.php/provide/vod"
    },
    {
        "name": "无尽资源",
        "url": "https://api.wujinapi.me/api.php/provide/vod"
    },
    {
        "name": "魔都资源",
        "url": "https://www.mdzyapi.com/api.php/provide/vod"
    },
    {
        "name": "魔爪资源",
        "url": "https://mozhuazy.com/api.php/provide/vod"
    },
    {
        "name": "豆瓣资源",
        "url": "https://dbzy.com/api.php/provide/vod"
    },
    {
        "name": "极速资源",
        "url": "https://jszyapi.com/api.php/provide/vod"
    },
    {
        "name": "华为吧资源",
        "url": "https://cjhwba.com/api.php/provide/vod"
    },
    {
        "name": "卧龙资源",
        "url": "https://wolongzyw.com/api.php/provide/vod"
    },
    {
        "name": "爱奇艺资源",
        "url": "https://www.iqiyizyapi.com/api.php/provide/vod"
    },
    {
        "name": "小猫咪资源",
        "url": "https://zy.xiaomaomi.cc/api.php/provide/vod"
    },
    {
        "name": "天涯资源",
        "url": "https://tyyszy.com/api.php/provide/vod"
    },
    {
        "name": "如意资源",
        "url": "https://cj.rycjapi.com/api.php/provide/vod"
    },
    {
        "name": "电影天堂资源",
        "url": "http://caiji.dyttzyapi.com/api.php/provide/vod"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
