import React from 'react';


class OutputBenefits extends React.Component {
    handleClick = () => {
        this.props.deleteB(this.props.index);
    }
    render() {
        return (
            <div>
                <div className="col-6">
                    {this.props.benefitprop.benefit}
                </div>
                <div className="col-6">
                    <button className="ui-button" onClick={this.handleClick}>
                        Remove Benefit
                </button>
                </div>
            </div>
        );
    }
}

export default OutputBenefits;
