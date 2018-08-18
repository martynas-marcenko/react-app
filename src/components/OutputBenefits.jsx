import React from 'react';


class OutputBenefits extends React.Component {
    render() {
        return (
            <div className="col-6">
                {this.props.benefitprop.benefit}
            </div>
        );
    }
}

export default OutputBenefits;
