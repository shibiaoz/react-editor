import React from 'react';
// import DeepForm from '../form-components/focus-form/index.jsx';
import BaseForm from '../form-components/focus-form/baseForm.jsx';
import FocusForm from '../form-components/focus-form/focusForm.jsx';
import GroupForm from '../form-components/group-form/group-form.jsx';
import OnepicinfoForm from '../form-components/one-pic-info-form/OnepicinfoForm.jsx';
import CarouselForm from '../form-components/carousel-form/carouselForm.jsx';
import HorrankcardForm from '../form-components/hor-rank-card-form/HorrankcardForm.jsx';
import RankdetailscoreForm from '../form-components/rank-detail-score-form/RankdetailscoreForm.jsx';
import RankdetailtrendForm from '../form-components/rank-detail-trend-form/RankdetailtrendFrom.jsx';
import SinglecardForm from '../form-components/single-card-form/SinglecardForm.jsx';
import PageForm from '../form-components/page-form/PageForm.jsx';
import './index.scss';
console.log('FormComponent',CarouselForm);
export default class EditorForm extends React.Component {
    constructor (props) {
        super(props)
    }
    selForm() {
        let props = this.props;
        let activeItem = props.activeItem;
        let _id = parseInt(activeItem._id, 10);
        if (_id === -1 ){
            return this.getPageForm();
        }
        else {
            return this.getForm();
        }
    }
    getPageForm() {
        let props = this.props;
        let activeItem = props.activeItem;
        let com = activeItem.com;
        let _id = activeItem._id;
        console.log('pageform',activeItem);
        return (<PageForm key={_id+'-'} initialValues={com} _id={_id}/>);
    }
    getForm() {
        let props = this.props;
        let activeItem = props.activeItem;
        let com = activeItem.com;
        let _id = activeItem._id;
        let _idChild = activeItem._idChild;
        /**
         * 这里必须伪造一个唯一的key ，不然有个bug ，点击item，修改之后，在切换
         * item之后form是前一个的值
         */
        let type = com &&  com.card_type;
        if (_id >=0 && com && type>=0) {
            switch(type) {
                case 1:
                    return (<CarouselForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 2:
                    return (<SinglecardForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 3:
                    return (<OnepicinfoForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 5:
                    return (<FocusForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 6:
                    return (<HorrankcardForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 7:
                    return (<RankdetailtrendForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 8:
                    return (<RankdetailscoreForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                case 11:
                    return (<GroupForm key={_id+'-'+_idChild} initialValues={com} _id={_id} _idChild={_idChild}/>);
                default:
                    break;
                return "";
            }
        }
    }
    render () {
        return (
            <div className="_namespace">
                <h4>填写form表单</h4>
                {this.selForm()}
            </div>
        )
    }
}
