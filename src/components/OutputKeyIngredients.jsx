import React from 'react';
import Bin from './Bin';

class OutputKeyIngredients extends React.Component {
    handleClick = () => {
        this.props.deleteI(this.props.index);
    }
    render() {
        return (
            <div className="key-list-item">
                <div className="left-side-key">
                    <div className="name">
                        {this.props.keyingredientsprop.name}
                    </div>
                    <div className="desc">
                        {this.props.keyingredientsprop.desc}
                    </div>
                </div>
                <div className="right-side">
                    <button className="icon" onClick={this.handleClick}>
                        <Bin />
                    </button>
                </div>
            </div>
        );
    }
}

export default OutputKeyIngredients;
