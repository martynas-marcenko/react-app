import React from 'react';
import Bin from './Bin';
import './outputbenefits.css';

class OutputBenefits extends React.Component {
    handleClick = () => {
        this.props.deleteB(this.props.index);
    }
    render() {
        return (
            <div className="benefit-list-item">
                <div className="left-side">
                    <img src={this.props.benefitprop.icon} />
                    <span>{this.props.benefitprop.benefit}</span>
                </div>
                <button className="icon" onClick={this.handleClick}>
                    <Bin />
                </button>
            </div>
        );
    }
}

export default OutputBenefits;
