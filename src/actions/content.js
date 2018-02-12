/**
 * Actions related to content
 * @module actions/content
 * @author Basile Pesin
 */

export const CHANGE_CONTENT = 'CHANGE_CONTENT';

/**
 * Changing content
 * @param content content to display
 */
export const changeContent = (content) => {
    return {
        type: CHANGE_CONTENT,
        content: content
    }
}
