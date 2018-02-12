/**
 * Reducers related to content 
 * @module reducers/content
 * @author Basile Pesin
 */

import { 
    CHANGE_CONTENT
} from '../actions/content';

const initialState = {
    text: '' 
}

/**
 * Content reducer
 * @param state Current state of the content 
 * @param action The action performed
 */
const content = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_CONTENT:
            return {
                text: action.content
            };
        default:
            return state;
    }
}

export default content;
