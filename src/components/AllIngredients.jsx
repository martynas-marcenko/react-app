import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './form.css';

class AllIngredients extends React.Component {

    allingredientsRef = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        const allIngredients = {
            allingredients: this.allingredientsRef.current.value,
        }
        this.props.addAllIngredients(allIngredients);
        event.currentTarget.reset();
    }
    render() {
        const { editorState } = this.state;
        return (
            <React.Fragment>
                <form className="form" onSubmit={this.handleSubmit}>

                    <div className="field">
                        <div className="control">
                            <textarea className="form-control" name="feature" ref={this.allingredientsRef} type="text" required placeholder="All ingredients" />
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <button className="ui-button" type="submit">+ Add Feature</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default AllIngredients;
