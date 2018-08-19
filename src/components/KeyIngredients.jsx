import React from 'react';
import './form.css';

class KeyIngredients extends React.Component {
    nameRef = React.createRef();
    descRef = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        const keyIngredient = {
            nameRef: this.nameRef.current.value,
            descRef: this.nameRef.current.value,
        }
        this.props.addKeyIngredient(keyIngredient);
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.nameRef} type="text" required placeholder="Ingredient's name" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <textarea className="form-control" name="feature" ref={this.descRef} type="textarea" required placeholder="Ingredient's description" />
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button className="ui-button" type="submit">+ Add Feature</button>
                </div>
            </form>
        );
    }
}

export default KeyIngredients;
