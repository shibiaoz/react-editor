import React,{Component} from 'react'
import EditorCommonHeader from '../editor-common-header/EditorCommonHeader.jsx'
import EditorFooter from '../editor-footer/index.jsx'
import Table from 'fit-table'
import Button from 'fit-button'
import {Link} from 'react-router'
import request from 'superagent'
const marginL = {
    marginLeft:20
}
const statusMapStr = {
    '0': '编辑中',
    '1': '发布',
    '2': '关闭',
    '3': '删除'
}
const info = {
    fields: [{
        key: 'page_id',
        value: 'ID'
    }, {
        key: 'page_status',
        value: '页面状态'
    },{
        key: 'page_desc',
        value: '页面描述'
    },{
        value: '操作',
        render: (colInfo, table)=> {
            const handleClick = (pageId, colInfo)=> {
                request.get('/blitz/publish')
                    .query({
                        pageId: pageId
                    })
                    .end(function (err,res) {
                        if (err) {
                            alert('发布 failed');
                            return;
                        }
                        else if (res.body && res.body.no === 0) {
                            alert('发布成功');
                           window.location.reload();
                        }
                    });

            }
            let toUrl = '/editor?pageId=' + colInfo['page_id'];
            let prefixUrl = 'http://tieba.baidu.com/mo/q/blitz/index#/page/';
            let pageType = (colInfo['page_type'] != undefined) ? colInfo['page_type'] : '';
            let itemId = parseInt(colInfo['page_id'],10);
            //let jumpUrl = prefixUrl + (parseInt(colInfo['page_id'],10) + 90000000);
            /**
             * 2016 03-31
             * url确定了
             * page_id固定90001，item_id就是咱们之前用的page_id
             * page_type直接透传
             */
            let jumpUrl = prefixUrl + '90001' + '?page_id=90001' + '&page_type=' + pageType + '&item_id=' + itemId;

            return (
                <div>
                    <Link to={toUrl}><Button type="success sm btn-sm">编辑</Button></Link>
                    <a style={{marginLeft:20}} href={jumpUrl} target="_blank">
                        <button className="btn-sm btn btn-success" >
                            <div style={{display:'flex',justifyContent:'center'}} >
                                <span>查看</span>
                            </div>
                        </button>
                    </a>

                    <Button type="warning sm btn-sm" style={marginL} onClick={handleClick.bind(this,colInfo['page_id'], colInfo)}>发布</Button>
                </div>

            )
        }
    }],
    get: {
        url: '/blitz/list',
        method: 'get',
        beforeSend: (info, currentPage, response)=> {
            info.page = currentPage
            return info;
        },
        success: (res, pagination)=> {
            let resData = res.data;
            pagination.allPage = resData['total_page']
            resData['page_list'].map((item)=> {
                item['page_status'] = statusMapStr[item['page_status']];
                return item;
            });
            return resData['page_list']
        }
    },
    del: {
        url: '/blitz/delete',
        method: 'get',
        alert: (colInfo)=> {
            return (
                <div>想删除{colInfo['page_title']}吗?</div>
            )
        },
        beforeSend: (colInfo)=> {
            return {
                pageId: colInfo['page_id']
            }
        },
        success: (res)=> {
            return {
                ok: res.no === 0,
                message: 'oh!! delete success!!!'
            }
        }
    }
}

class EditorListHeader extends Component {
    render() {
        return (
            <span style={{fontSize: '22'}}>
                Blitz 在线编辑系统
            </span>
        );
    }
}
export default class EditorList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('EditorList','componentDidMount')
    }
    render() {
        console.log('route','list');
        const newBtnStyle = {
            marginRight: 20,
            float: 'right',
            marginTop: 7
        };
        return (
            <div>
                <EditorCommonHeader>
                    <EditorListHeader />
                    <Link style={newBtnStyle}
                          className="btn btn-success"
                          to="/editor">
                        新建
                    </Link>
                </EditorCommonHeader>

                <div style={{minHeight:580}}>
                    <Table {...info}/>
                </div>
                <EditorFooter/>
            </div>
        );
    }
}