import React from 'react';


class OutputAllIngredients extends React.Component {
    render() {
        const allingredients = this.props.allingredientsprop.allingredients;
        return (
            <div className="output-features">
                <div className="col-6">
                    {allingredients}
                </div>
            </div>

        );
    }
}

export default OutputAllIngredients;
