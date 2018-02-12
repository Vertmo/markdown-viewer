/**
 * Main reducers file
 * @module reducers
 * @author Basile Pesin
 */

import { combineReducers } from 'redux';
import files from './files';
import content from './content';

const markdownApp = combineReducers({
    files,
    content
});

export default markdownApp;
