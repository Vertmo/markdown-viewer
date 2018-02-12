/**
 * Reducers related to files
 * @module reducers/files
 * @author Basile Pesin
 */

import { 
    CHANGE_CONTENT
} from '../actions/content';

const initialState = {
    text: '' 
}

/**
 * Files reducer
 * @param state Current state of the files
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
