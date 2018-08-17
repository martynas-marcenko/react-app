import React from 'react';
import './outputfeatures.css';

class OutputFeatures extends React.Component {
    handleClick = () => {
        this.props.deleteF(this.props.index);
    }
    render() {
        return (
            <div className="output-features">
                <div className="col-6">
                    {this.props.featureprop.feature}
                </div>
                <div className="col-6">
                    <button className="ui-button" onClick={this.handleClick}>
                        Remove Feature
                    </button>
                </div>
            </div>

        );
    }
}

export default OutputFeatures;
