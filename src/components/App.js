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
        return (<Container>
            <Menu>
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
    content: PropTypes.string.isRequired,
    onCloseFile: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
