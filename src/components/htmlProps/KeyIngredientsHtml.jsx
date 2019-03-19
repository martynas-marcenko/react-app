import React, { Fragment } from "react";

const one = '<div class="ingredients-item"><div class="type-epsilon text-600">';
const two = '</div><div class="type-epsilon">';
const three = "</div></div>";

class KeyIngredientsHtml extends React.Component {
  handleClick = () => {
    this.props.deleteI(this.props.index);
  };
  render() {
    return (
      <React.Fragment>
        {one}
        {this.props.keyingredientsprop.name}
        {two}
        {this.props.keyingredientsprop.desc}
        {three}
      </React.Fragment>
    );
  }
}

export default KeyIngredientsHtml;
