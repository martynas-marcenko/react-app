import React from 'react';
import './form.css';
import './button.css'

class FormComponent extends React.Component {
    featureRef = React.createRef();
    benefitsRef = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        const description = {
            feature: this.featureRef.current.value,
            benefits: this.benefitsRef.current.checked,
        }
        this.props.addDescription(description);
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <p className="label">
                        Features:
                    </p>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" placeholder="Feature" />
                    </div>
                </div>
                <div className="field">
                    <p className="label">
                        Benefits:
                    </p>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Nourishing
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Oxygenating
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Protecting
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Rejuvenating
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Repairing
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Smoothing
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Hydrating
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Moisturizing
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Balancing
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Anti-aging
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Brightening
                    </div>
                    <div className="control">
                        <input name="feature" ref={this.benefitsRef} type="checkbox" />Softening
                    </div>
                </div>
                <div className="field">
                    <p className="label">
                        Key Ingredients:
                    </p>
                    <div className="control">
                        <div className="col-6">
                            <input className="form-control" name="ingredient-name" type="text" placeholder="Ingredient name" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" name="ingredient-description" type="text" placeholder="Ingredient description" />
                        </div>
                    </div>
                    <div className="control">
                        <div className="col-6">
                            <input className="form-control" name="ingredient-name" type="text" placeholder="Ingredient name" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" name="ingredient-description" type="text" placeholder="Ingredient description" />
                        </div>
                    </div>
                    <div className="control">
                        <div className="col-6">
                            <input className="form-control" name="ingredient-name" type="text" placeholder="Ingredient name" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" name="ingredient-description" type="text" placeholder="Ingredient description" />
                        </div>
                    </div>
                    <div className="control">
                        <div className="col-6">
                            <input className="form-control" name="ingredient-name" type="text" placeholder="Ingredient name" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" name="ingredient-description" type="text" placeholder="Ingredient description" />
                        </div>
                    </div>
                    <div className="control">
                        <div className="col-6">
                            <input className="form-control" name="ingredient-name" type="text" placeholder="Ingredient name" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" name="ingredient-description" type="text" placeholder="Ingredient description" />
                        </div>
                    </div>
                    <div className="control">
                        <div className="col-6">
                            <input className="form-control" name="ingredient-name" type="text" placeholder="Ingredient name" />
                        </div>
                        <div className="col-6">
                            <input className="form-control" name="ingredient-description" type="text" placeholder="Ingredient description" />
                        </div>
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button className="ui-button" type="submit">+ Add Description</button>
                </div>
            </form>
        );
    }
}

export default FormComponent;
