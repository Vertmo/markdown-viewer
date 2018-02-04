/**
 * Actions related to files
 * @module actions/files
 * @author Basile Pesin
 */

export const OPEN_FILE = 'OPEN_FILE';

/**
 * Opening and reading a new file
 */
export function openFile(content) {
    console.log(content);
    return {
        type: OPEN_FILE,
        content: content
    }
}
