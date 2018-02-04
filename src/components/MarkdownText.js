/**
 * MarkdownText component
 * @module component/MarkdownText
 * @author Basile Pesin
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

/**
 * MarkdownText class : uses marked lib to translate Markdown to HTML and displays it
 * @prop {string} content
 * @extends React.Component
 */
class MarkdownText extends Component {
    /**
     * Rendering method
     */
    render() {
        return (<div dangerouslySetInnerHTML={{ __html:marked(this.props.content) }}></div>)
    }
}

MarkdownText.propTypes = {
    content: PropTypes.string.isRequired
}

export default MarkdownText;
