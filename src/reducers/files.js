/**
 * Reducers related to files 
 * @module reducers/files
 * @author Basile Pesin
 */

import { 
    OPEN_FILE,
    CLOSE_FILE,
    SAVE_FILE
} from '../actions/files'

const initialState = {
    fileOpened: false,
    fileName: null
}

/**
 * Files reducer
 * @param state Current state of the files
 * @param action The action performed
 */
const files = (state=initialState, action) => {
    switch(action.type) {
        case OPEN_FILE:
            return {
                fileOpened: true,
                fileName: action.fileName
            }
        case CLOSE_FILE:
            return {
                fileOpened: false,
                fileName: null
            }
        case SAVE_FILE:
            return {
                fileOpened: true,
                fileName: action.fileName
            }
        default:
            return state
    }
}

export default files
