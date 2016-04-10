//SET_ITEM_ACTIVE
//let activeId = 0;
export const setActiveCard = (id, com,_idChild) => {
    return {
        _id: id,
        _idChild:_idChild,
        com: com,
        type: 'SET_ITEM_ACTIVE'
    }
}

export const submitForm = (_id, data,_idChild) => {
    return {
        _id: _id,
        _idChild: _idChild,
        type: 'SUBMIT_FORM',
        data: data
    }
}

export const addCardToGroup = (_id, defaultData) => {
    return {
        _id: _id,
        type:'ADD_CARD_TO_GROUP',
        data: defaultData
    }
}

export const delCard = (_id, _idChild) => {
    return {
        _id: _id,
        _idChild: _idChild,
        type: 'DEL_CARD'
    }
}

export const setPageFormActive = (_id, com) => {
    return {
        _id: _id,
        com: com,
        type: 'SET_PAGE_FORM_ACTIVE'
    }
}
/**
 * state active
 * @returns {{type: string}}
 */
export const setPageFormActiveDefault = () => {
    return {
        type: 'SET_DEFAULT'
    }
}
/**
 * 设置页面的基本信息
 * @param data
 * @returns {{type: string, data: *}}
 */
export const setPageInfo = (data) => {
    return {
        type: 'SET_PAGE_INFO',
        data: data
    };
}

export const setPageInfoDefault = () => {
    return {
        type: 'SET_DEFAULT'
    }
}


/**
 * state cards
 * @param data
 * @returns {{type: string, data: *}}
 */
export const setEditPageCards = (data) => {
    return {
        type: 'SET_EDIT_PAGE_CARDS',
        data: data
    }
}

/**
 * state cards
 * @returns {{type: string}}
 */

export const setPageCardsDefault = () => {
    return {
        type: 'SET_DEFAULT'
    }
}
/**
 * 通用的Default reducer
 * 只返回type ，'SET_DEFAULT'
 */
export const setDefault = () => {
    return {
        type: 'SET_DEFAULT'
    }
}
