/**
 * MarkdownText component
 * @module component/MarkdownText
 * @author Basile Pesin
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import marked from 'marked';

/**
 * MarkdownText class : uses marked lib to translate Markdown to HTML and displays it
 * @prop {string} content The markdown formatted text to be displayed (Required)
 * @extends React.Component
 */
class MarkdownText extends Component {
    /**
     * Rendering method
     */
    render() {
        return (<Segment>
            <div dangerouslySetInnerHTML={{ __html:marked(this.props.content) }}></div>
        </Segment>)
    }
}

MarkdownText.propTypes = {
    content: PropTypes.string.isRequired
}

export default connect()(MarkdownText);
