/**
 * Actions related to files
 * @module actions/files
 * @author Basile Pesin
 */

export const OPEN_FILE = 'OPEN_FILE';
export const CLOSE_FILE = 'CLOSE_FILE';

/**
 * Opening and reading a new file
 */
export const openFile = (content) => {
    return {
        type: OPEN_FILE,
        content: content
    }
}

export const closeFile = () => {
    return {
        type: CLOSE_FILE
    }
}
