/** 
 * App component
 * @module components/App
 * @author Basile Pesin
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Menu,
    Segment,
    Button
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MarkdownText from './MarkdownText';
import MyDropzone from './MyDropzone';
import { closeFile } from '../actions/files';

/**
 * App class : main component (called from index.js)
 * @extends React.Component
 */
class App extends Component {
    /**
     * Rendering method
     */
    render() {
        var inner;
        if(!this.props.fileOpened) inner = <MyDropzone />;
        else inner = <Segment><MarkdownText content={this.props.content} /></Segment>;

        var fileNameDisplay;
        if(!this.props.fileOpened) fileNameDisplay = "No file";
        else fileNameDisplay = this.props.fileName;
        return (<Container>
            <Menu>
                <Menu.Menu position='left'>
                    <Menu.Item>{fileNameDisplay}</Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item><Button disabled={!this.props.fileOpened} onClick={this.props.onCloseFile}>Close</Button></Menu.Item>
                </Menu.Menu>
            </Menu>
            {inner}
        </Container>);
    }
}

const mapStateToProps = (state, props) => {
    return {
        fileOpened: state.files.fileOpened,
        fileName: state.files.fileName,
        content: state.files.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseFile: () => {
            dispatch(closeFile());
        }
    }
}

App.propTypes = {
    fileOpened: PropTypes.bool.isRequired,
    fileName: PropTypes.string,
    content: PropTypes.string,
    onCloseFile: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
