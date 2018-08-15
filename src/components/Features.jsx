import React from 'react';
import './form.css';
import './button.css'

class Features extends React.Component {
    featureRef = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        const description = {
            feature: this.featureRef.current.value,
        }
        this.props.addDescription(description);
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control">
                        <input className="form-control" name="feature" ref={this.featureRef} type="text" required placeholder="Add feature" />
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button className="ui-button" type="submit">+ Add Feature</button>
                </div>
            </form>
        );
    }
}

export default Features;
