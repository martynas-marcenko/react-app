import React from 'react';
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
        return (
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
        );
    }
}

export default AllIngredients;
