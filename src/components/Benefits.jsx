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
            icon: 'https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Nuorishing-1493915879070.svg?3614303732377407379',
        };
        this.props.addBenefit(benefits);
    }

    render() {
        return (
            <div>
                <div className="benefit">
                    {this.props.benefit}
                </div>
                {this.state.isToggleOn ? (
                    <button onClick={this.handleClick}>
                        +
                    </button>
                )
                    : (
                        <button onClick={this.handleClick}>
                            +
                        </button>
                    )
                }
            </div>
        );
    }
}

export default Benefits;
