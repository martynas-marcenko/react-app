import React from 'react';


class OutputFeatures extends React.Component {
    render() {
        return (
            <div>
                {this.props.featureprop.feature}
            </div>
        );
    }
}

export default OutputFeatures;
