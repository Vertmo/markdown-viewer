/**
 * Reducers related to files
 * @module reducers/files.js
 * @author Basile Pesin
 */

import { 
    OPEN_FILE,
    CLOSE_FILE
} from '../actions/files';

const initialState = {
    fileOpened: false,
    content: ''
}

function files(state=initialState, action) {
    switch(action.type) {
        case OPEN_FILE:
            return {
                fileOpened:true,
                content: action.content
            };
        case CLOSE_FILE:
            return {
                fileOpened:false,
                content: ''
            }
        default:
            return state;
    }
}

export default files;
