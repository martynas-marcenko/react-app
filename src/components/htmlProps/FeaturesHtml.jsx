import React, { Fragment } from 'react';


const one = '<div class="features-item"><div class="type-epsilon">';
const two = '</div></div>';

class FeaturesHtml extends React.Component {
    handleClick = () => {
        this.props.deleteI(this.props.index);
    }
    render() {
        return (
            <React.Fragment>
                {one}
                {this.props.featureprop.feature}
                {two}
            </React.Fragment>
        );
    }
}


export default FeaturesHtml;
