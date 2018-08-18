import React from 'react';


class Benefits extends React.Component {
    benefitRef = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        const benefits = {
            benefit: this.benefitRef.current.checked,
        }
        this.props.addBenefit(benefits);
    }

    render() {
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox" ref={this.benefitRef} onChange={this.handleSubmit} />
                    Check me out
                </label>
            </div>
        );
    }
}

export default Benefits;
