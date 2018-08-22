import React from 'react';


class Benefits extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        /*  this.deleteHandleClick = this.deleteHandleClick.bind(this); */
    }

    handleClick() {
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
        const benefits = {
            benefit: this.props.benefit,
            icon: this.props.url,
        };
        this.props.addBenefit(benefits);
    }

    render() {
        return (
            <div className="benefit-select-item">
                <div className="benefit">
                    {this.props.benefit}
                </div>
                <div className="benefit-button">
                    {this.state.isToggleOn ? (
                        <button type="button" onClick={this.handleClick}>
                            +
                        </button>
                    ) : (
                            <button type="button" onClick={this.handleClick}>
                                +
                            </button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Benefits;
