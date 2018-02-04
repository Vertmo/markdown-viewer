/**
 * Reducers related to files
 * @module reducers/files.js
 * @author Basile Pesin
 */

import { OPEN_FILE,
    openFile } from '../actions/files';

const initialState = {
    fileLoaded: false,
    content: null
}

function files(state=initialState, action) {
    switch(action.type) {
        case OPEN_FILE:
            return {fileLoaded:true,
                content: action.content};
        default:
            return state;
    }
}

export default files;
