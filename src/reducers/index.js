/**
 * Main reducers file
 * @module reducers
 * @author Basile Pesin
 */

import { combineReducers } from 'redux';
import files from './files';

const markdownApp = combineReducers({
    files
});

export default markdownApp;
