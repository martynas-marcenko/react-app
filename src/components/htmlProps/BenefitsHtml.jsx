import React, { Fragment } from 'react';


const one = '<div class="benefits-item"><img src="';
const two = '" alt="';
const three = '"/><div class="type-epsilon">';
const four = '</div></div>';

class BenefitsHtml extends React.Component {
    handleClick = () => {
        this.props.deleteI(this.props.index);
    }
    render() {
        return (
            <React.Fragment>
                {one}{this.props.benefitprop.icon}{two}{this.props.benefitprop.benefit}
                {three}
                {this.props.benefitprop.benefit}
                {four}
            </React.Fragment>
        );
    }
}


export default BenefitsHtml;
