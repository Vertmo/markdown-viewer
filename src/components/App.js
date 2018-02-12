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
    Button,
    Grid,
    TextArea,
    Form
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MarkdownText from './MarkdownText';
import MyDropzone from './MyDropzone';
import { closeFile } from '../actions/files';
import { changeContent } from '../actions/content';

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
        if(!this.props.content) inner = <MyDropzone text="Drop a .md file here (or click and select it from your files). You can also start writing Markdown on the left !"/>;
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
            <Grid>
                <Grid.Row>
                <Grid.Column width={8}>
                    <Form>
                        <TextArea id='textarea' autoHeight placeholder='Write here' value={this.props.content} onChange={this.props.onChange}/>
                    </Form>
                </Grid.Column>
                <Grid.Column width={8}>
                    {inner}
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>);
    }
}

const mapStateToProps = (state, props) => {
    return {
        fileOpened: state.files.fileOpened,
        fileName: state.files.fileName,
        content: state.content.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseFile: () => {
            dispatch(closeFile());
            dispatch(changeContent(''));
        },
        onChange: (event, data) => {
            dispatch(changeContent(data.value));
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
