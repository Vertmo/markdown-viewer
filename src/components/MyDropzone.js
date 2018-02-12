/**
 * Personalized Dropzone component
 * @module components/MyDropzone
 * @author Basile Pesin
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import Dropzone from 'react-dropzone'
import { openFile } from '../actions/files';
import { changeContent } from '../actions/content';

/**
 * MyDropzone class : encapsulates a Dropzone component
 * @extends React.Component
 */
class MyDropzone extends Component {

    /**
     * Reads the dropped files (only the first one)
     * @param acceptedFiles
     * @param refusedFiles
     */
    onDrop(acceptedFiles, refusedFiles) {
        var file = acceptedFiles[0];
        var parts = file.name.split('.');
        if(!(parts[parts.length-1]==='md')) {
            window.alert('Please upload a Markdown file !');
            return;
        }
        var reader = new FileReader();
        reader.onload = (e) => {this.props.onDrop(file.name, e.target.result)}
        reader.readAsText(file);
    }

    /**
     * Rendering method
     */
    render() {
        return(<Segment className='dropzone' size='massive' padded='very' textAlign='center' as={Dropzone} onDrop={(acceptedFiles, rejectedFiles) => this.onDrop(acceptedFiles, rejectedFiles)}>
            <p>{this.props.text}</p>
         </Segment>)
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: (fileName, content) => {
      dispatch(changeContent(content))
      dispatch(openFile(fileName))
    }
  }
}

MyDropzone.propTypes = {
    text: PropTypes.string.isRequired,
    onDrop: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDropzone);
