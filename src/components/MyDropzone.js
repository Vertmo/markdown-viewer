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

/**
 * MyDropzone class : encapsulates a Dropzone component
 * @extends React.Component
 */
class MyDropzone extends Component {

    onDrop(acceptedFiles, refusedFiles) {
        var reader = new FileReader();
        reader.onload = (e) => {this.props.onDrop(e.target.result)}
        reader.readAsText(acceptedFiles[0]);
    }

    /**
     * Rendering method
     */
    render() {
        return(<Segment className='fullHeight dropzone' size='massive' padded='very' textAlign='center' as={Dropzone} onDrop={(acceptedFiles, rejectedFiles) => this.onDrop(acceptedFiles, rejectedFiles)}>
            <p>Drop a .md file here (or click and select it from your files)</p>
        </Segment>)
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: (content) => {
      dispatch(openFile(content))
    }
  }
}

MyDropzone.propTypes = {
    onDrop: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDropzone);
