/** 
 * App component
 * @module components/App
 * @author Basile Pesin
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MarkdownText from './MarkdownText';
import MyDropzone from './MyDropzone';

/**
 * App class : main component (called from index.js)
 * @extends React.Component
 */
class App extends Component {
    /**
     * Rendering method
     */
    render() {
        console.log("Youhou");
        var inner;
        if(!this.props.fileLoaded) inner = <MyDropzone />;
        else inner = <MarkdownText content={this.props.content} />;
        return (<Container className='fullHeight'>
            {inner}
        </Container>)
    }
}

const mapStateToProps = (state, props) => {
    return {
        fileLoaded: state.files.fileLoaded,
        content: state.files.content
    }
}

App.propTypes = {
    fileLoaded: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(App);
