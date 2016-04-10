import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import _ from 'lodash'

import './index.scss'

export default class Carousel extends React.Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            activeIndex: 0,
            descOnPic: 1 // 描述文字相对于图片的位置，1：内部，2：上不，3：下部
        };
    }

    getWidth (elem) {
        return elem.getBoundingClientRect().width;
    }

    changeCarousel (index, left, props) {
        if (this.isUnmounted) {
            return;
        }
        this.setState({
            activeIndex: index,
            trackStyle: _.assignIn(props.trackStyle, {
                opacity: 1,
                WebkitTransform: 'translate3d(' + left + 'px, 0px, 0px)',
                transform: 'translate3d(' + left + 'px, 0px, 0px)',
                transition: '',
                WebkitTransition: '',
                msTransform: 'translateX(' + left + 'px)'
            })
        });
    }
    componentWillUnmount() {
        // 这里必须要清楚下定时器，有报错，我猜应该和这个定时器有关系
        // 去掉果然没有报错了
        // setState on unmounted component，
        clearInterval(this.state.timer);
        this.isUnmounted = true;
    }
    componentDidMount() {
        console.log('componentDidMount', this.props.pics.length);
        let count = this.props.pics.length;
        let carouselWidth = this.getWidth(ReactDOM.findDOMNode(this));
        let listWidth = this.getWidth(ReactDOM.findDOMNode(this.refs.list));
        let trackWidth = this.getWidth(ReactDOM.findDOMNode(this.refs.track));

        let imageWidth = 472;
        let imageHeight =  352;

        let spec= {left: 0};

        this.setState({
            itemStyle: {
                width: carouselWidth
            },
            itemWrapperStyle: {
                height: this.props.descOnPic === 1 ? '100%': imageHeight + 76
            },
            trackStyle: {
                opacity: 1,
                width: carouselWidth * count,
                transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
                transition: '',
                WebkitTransition: '',
                msTransform: 'translateX(' + spec.left + 'px)'
            },
            dotWrapperStyle: {
                width: imageWidth,
                right: (carouselWidth - imageWidth) / 2
            }
        })

        let that = this;
        let index = 1;

        if (count > 1) {
            clearInterval(this.state.timer);
            this.state.timer = setInterval(function () {
                let left =  -carouselWidth * index ;
                that.changeCarousel(index, left, that.state);
                index = (index + 1) % count;
            }, this.props.duration);
        }
    }

    render () {
        console.log('carousel render');
        let that = this;
        let data = this.props;

        let props = {
            count: this.props.pics.length,
            activeIndex: this.props.activeIndex,
            trackStyle: this.state.trackStyle,
            itemStyle: this.state.itemStyle,
            dotWrapperStyle: this.state.dotWrapperStyle
        }

        let items = data.pics.map(function (item, index) {
            return (
                <div key={index} className='carousel-item' ref="item" style={props.itemStyle}>
                    <div className="item-wrapper" style={that.state.itemWrapperStyle}>
                        <img src={item.pic} ref="image"></img>
                        <a href={item.scheme}>
                            <span className="desc">{item.desc}</span>
                        </a>
                    </div>
                </div>
            );
        });

        let dotItems = data.pics.map(function (item, index) {
            let classNames = classnames({
                dot: true,
                active: that.state.activeIndex === index
            });

            return (
                <span key={index} className={classNames}></span>
            )
        });

        let classNames = classnames({
            'carousel': true,
            'single-pic': props.count === 1,
            'desc-top': this.props.descOnPic === 2,
            'desc-inner': this.props.descOnPic === 1,
            'desc-bottom': this.props.descOnPic === 3
        });

        return (
            <div className="_namespace">
                <div className={classNames} ref="carousel" style={this.state.carouselStyle}>
                    <div className="carousel-list" ref="list">
                        <div className="carousel-track" ref="track" style={props.trackStyle}>
                            {items}
                        </div>
                    </div>
                    <div className="dot-wrapper" style={props.dotWrapperStyle}>
                        {dotItems}
                    </div>
                </div>
            </div>
        );
    }
}

// 文字在底部
// Carousel.defaultProps = {
//     "card_type": 1,
//     "card_name": 'carousel',
//     "item_id": "",
//     "flip_id": "",
//     "scheme": "",
//     "statistics": "lego_entertainment_click",
//     "statTab": 1,
//     "duration": 3000,
//     "ratio": 0.5,
//     "descOnPic": 3,
//     "pics": [
//         {
//             "picId": 110,
//             "pic": "http://tb1.bdstatic.com/tb/one.png",
//             "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
//             "desc": "lego scheme"
//         }
//     ]
// };


// // 文字在顶部
// Carousel.defaultProps = {
//     "card_type": 1,
//     "card_name": 'carousel',
//     "item_id": "",
//     "flip_id": "",
//     "scheme": "",
//     "statistics": "lego_entertainment_click",
//     "statTab": 1,
//     "duration": 3000,
//     "ratio": 0.5,
//     "descOnPic": 2,
//     "pics": [
//         {
//             "picId": 110,
//             "pic": "http://tb1.bdstatic.com/tb/one.png",
//             "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
//             "desc": "lego scheme"
//         }
//     ]
// };


// // 单图
// Carousel.defaultProps = {
//     "card_type": 1,
//     "card_name": 'carousel',
//     "item_id": "",
//     "flip_id": "",
//     "scheme": "",
//     "statistics": "lego_entertainment_click",
//     "statTab": 1,
//     "duration": 3000,
//     "ratio": 0.5,
//     "descOnPic": 1,
//     "pics": [
//         {
//             "picId": 110,
//             "pic": "http://tb1.bdstatic.com/tb/one.png",
//             "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
//             "desc": "lego scheme"
//         }
//     ]
// };


// 多图
Carousel.defaultProps = {
    "card_type": 1,
    "card_name": 'carousel',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_entertainment_click",
    "statTab": 1,
    "duration": 3000,
    "ratio": 0.5,
    "descOnPic": 3,
    "pics": [
        {
            "picId": 110,
            "pic": "http://tb1.bdstatic.com/tb/one.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/110?isHot=1",
            "desc": "lego scheme"
        },
        {
            "picId": 109,
            "pic": "http://tb1.bdstatic.com/tb/two.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/109?isHot=1",
            "desc": "lego scheme"
        },
        {
            "picId": 27,
            "pic": "http://tb1.bdstatic.com/tb/three.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/27?isHot=1",
            "desc": "这是一个焦点图"
        },
        {
            "picId": 5,
            "pic": "http://tb1.bdstatic.com/tb/four.png",
            "scheme": "http://tieba.baidu.com/n/beyond/thread/5?isHot=1",
            "desc": "【冰冰邦邦】董子健吧全体“咚咚锵”与您共庆元宵佳节"
        }
    ]
};
