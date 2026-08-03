const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    heimuer: {
        api: "https://json.heimuer.xyz/api.php/provide/vod",
        name: "黑木耳资源"
    },
    360zy: {
        api: "https://360zy.com/api.php/provide/vod",
        name: "360资源"
    },
    ffzy: {
        api: "http://ffzy5.tv/api.php/provide/vod",
        name: "非凡资源"
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
