

const defaultNavData = {
    "card_type": -1,
    "card_name": 'nav'
}

export const defaultFocusData =  {
    "card_type": 5,
    "card_name": 'focus',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_entertainment_click",
    "statTab": 4,
    "title": "正在追剧",
    "itemList": [
        {
            "resourceId": "99",
            "strList": [
                "【韩剧】太阳的后裔",
                "周六日更新",
                "图文直播"
            ],
            "scheme": "http://tieba.baidu.com/p/4375862649"
        },
        {
            "resourceId": "54",
            "strList": [
                "程序员的世界观察",
                "还没有拍摄呢",
                "图文直播"
            ],
            "scheme": "http://tieba.baidu.com/p/4243123798"
        },
        {
            "resourceId": "53",
            "strList": [
                "北京现代生活",
                "还没有拍摄呢",
                "图文直播"
            ],
            "scheme": "http://tieba.baidu.com/p/4243123798"
        }
    ]
};

export const defaultGroupData = {
    "card_type": 11,
    "card_name": "group",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "",
    "statTab": "",
    "showLine": 1,
    "cards": [
        //defaultFocusData,
        //defaultFocusData
    ]
}
export const carouselData =  {
    "card_type": 1,
    "card_name": 'carousel',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_entertainment_click",
    "statTab": 1,
    "duration": 3000,
    "ratio": 0.5,
    "descOnPic": 1,
    "pics": [
        {
            "picId": 110,
            "pic": "http://tb1.bdstatic.com/tb/one.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
            "desc": "lego scheme",
            "descColorNight":"",
            "descColor":""
        },
        {
            "picId": 109,
            "pic": "http://tb1.bdstatic.com/tb/two.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/109?isHot=1",
            "desc": "lego scheme",
            "descColorNight":"",
            "descColor":""
        },
        {
            "picId": 27,
            "pic": "http://tb1.bdstatic.com/tb/three.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/27?isHot=1",
            "desc": "这是一个焦点图",
            "descColorNight":"",
            "descColor":""
        },
        {
            "picId": 5,
            "pic": "http://tb1.bdstatic.com/tb/four.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/5?isHot=1",
            "desc": "【冰冰邦邦】董子健吧全体“咚咚锵”与您共庆元宵佳节",
            "descColorNight":"",
            "descColor":""
        }
    ]
};

export const onepicInfo = {
    "card_type": 3,
    "card_name": "one-pic-info",
    "item_id": "",
    "flip_id": "",
    "statistics": "",
    "statTab": "",
    "tag":"测试吧",
    "pic": "http://tb1.bdstatic.com/tb/r/image/2016-03-02/ecb4202e7bd1e349da412deae50969a6.png",
    "title": "暴走的肾上腺！今夏最爽片《碟5》要来了！竞请大家期待本...",
    "scheme": "http://tieba.baidu.com/p/4243123798",
    "icons":[
        {
            "url": "",
            "urlNight": "",
            "type":4,
            "content": 88
        },
        {
            "url": "",
            "urlNight": "",
            "type":2,
            "content": 99
        }
    ]
};

export const singleCardData = {
    "card_type": 2,
    "card_name": 'single-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "statTab": 4,
    "title": "北京线下吧友聚会报名,北京线下吧友聚会报名,北京线下吧友聚会报名",
    "showLeftLine": 0,
    "showLeftIcon": 1,
    "icon": {
        "url": "",
        "urlNight":"",
        "type": 3,// 3代表通知， :5,frs_ba_ticket;6,frs_game;7,frs_news;8,new_live,目 前贴吧娱乐只用3,对于新业务推荐下发url和urlNight,不推荐下发type
    },
    "moreButton": {
        "moreText": "",
        "moreColor": "#ffffff",
        "moreColorNight": "",
        "moreScheme": "tieba://...",
        "moreSchemeWeb": "http://www.baidu.com"
    },
    "maxLines": 1,
    'textSize': 32
};
const blessCard = {
    "card_type": 9,
    "card_name": 'bless-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "statTab": 4,
    "blessItem": {
        "blessId": 2934294892,
        "pic": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
        "name": "周杰伦",
        "blessNum": 12132,
        "canBless": 1
    }
};
export const rankDetailTrendData = {
    "card_type": 7,
    "card_name": 'rank-detail-trend',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "rank":1,
    "title": "少年少年少少",
    "radio": 1,
    "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
    "iconUrl": "",
    "picTrendType": "1",
    "picTrendUrl": ""
};
export const horRankCard = {
    "card_type": 6,
    "card_name": "hor-rank-card",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "title": "电影好评帮",
    "displayNum": 5,
    "ratio":1,
    "scrollEnabled":true,
    "picType": 1,
    "ranks": [
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球大",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        }
    ]
};

const horRankCard2 = {
    "card_type": 6,
    "card_name": "hor-rank-card",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "title": "电影好评帮",
    "displayNum": 5,
    "ratio":1,
    "scrollEnabled":true,
    "picType": 2,
    "ranks": [
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球大",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        }
    ]
};

export const rankDetailScoreData = {
    "card_type": 8,
    "card_name": "rank-detail-score",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "rank": 1,
    "title": "少年少年少",
    "desc": "主演：冯小刚& 吴一凡冯小刚& 吴一凡冯小刚& 吴一凡冯小刚& 吴一凡冯小刚& 吴一凡",
    "desc2": "2016.01.01上映",
    "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
    "subTitle": "9.7分"
};

const PageJson = {
    cards:[
        defaultNavData,
        defaultGroupData,
        horRankCard,
        horRankCard2,
        carouselData,
        defaultFocusData,
        onepicInfo,
        singleCardData,
        blessCard,
        rankDetailTrendData,
        rankDetailScoreData,
    ]
}

export const pageInfo = {
    type:2,
    sync:1,
    desc:'页面描述',
    title:'页面标题',
    share: {
        title: '分享标题',
        pic: '',
        scheme: '',
        picNight:'',
        type:2,
        extra:'{}'
    },
    tab:[
        {
            title:'11',
            page_id:'1',
            page_type:'1',
            item_id:'1',
            rn:'',
            params:''
        }
    ]

}
export default PageJson
