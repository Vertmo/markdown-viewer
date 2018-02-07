/**
 * Actions related to files
 * @module actions/files
 * @author Basile Pesin
 */

export const OPEN_FILE = 'OPEN_FILE';
export const CLOSE_FILE = 'CLOSE_FILE';

/**
 * Opening and reading a new file
 * @param fileName Name of the file
 * @param content Content of the file (text)
 */
export const openFile = (fileName, content) => {
    return {
        type: OPEN_FILE,
        fileName: fileName,
        content: content
    }
}

export const closeFile = () => {
    return {
        type: CLOSE_FILE
    }
}
