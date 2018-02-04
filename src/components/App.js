/** 
 * App component
 * @module components/App
 * @author Basile Pesin
 */
import React, { Component } from 'react';
import MarkdownText from './MarkdownText';

/**
 * App class : main component (called from index.js)
 * @extends React.Component
 */
class App extends Component {
    /**
     * Rendering method
     */
    render() {
        return (<MarkdownText content="Vive le **Markdown** !"/>);
    }
}

export default App;
