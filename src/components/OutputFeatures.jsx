import React from 'react';
import Bin from './Bin';
import './outputfeatures.css';

class OutputFeatures extends React.Component {
    handleClick = () => {
        this.props.deleteF(this.props.index);
    }
    render() {
        return (
            <div className="list-item">
                <div className="left">
                    {this.props.featureprop.feature}
                </div>
                <div className="right">
                    <button className="icon" onClick={this.handleClick}>
                        <Bin />
                    </button>
                </div>
            </div>

        );
    }
}

export default OutputFeatures;
