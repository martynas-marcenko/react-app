import React from 'react';
import './App.css';
import Features from './components/Features';
import Result from './components/Result';
import OutputFeatures from './components/OutputFeatures';
import Benefits from './components/Benefits';
import OutputBenefits from './components/OutputBenefits';
import KeyIngredients from './components/KeyIngredients';
import AllIngredients from './components/AllIngredients';
import OutputAllIngredients from './components/OutputAllIngredients';

class App extends React.Component {
    state = {
        //Features will be an object full of diferent features:
        features: {},
        benefits: {},
        ingredients: {},
        allingredients: {},
    }
    //We need a method, that updates state. This method is written bellow:
    addDescription = FeatureThatHasBeenAddedInFeaturesFormInputFieldAndLabelIncluded => {
        //1. Take copy of the exsiting state
        const newFeature = {
            ...this.state.features
        };
        //2. Set the new features object to state
        newFeature[`feature${Date.now()}`] = FeatureThatHasBeenAddedInFeaturesFormInputFieldAndLabelIncluded;
        //3. Set the new state
        this.setState({
            features: newFeature, //New feature is fx.: feature2018275198275: {feature: name of the feature}
        });
    };
    deleteFeature = (key) => {
        //1. Take a copy of state
        const featureState = { ...this.state.features };
        //2. Update the state
        delete featureState[key];
        //3. Update state
        this.setState({
            features: featureState
        });
    };

    addBenefit = BenefitThatHasBeenAddedInBenefitsCheckboxInput => {
        const newBenefit = {
            ...this.state.benefits
        };
        newBenefit[`benefit${Date.now()}`] = BenefitThatHasBeenAddedInBenefitsCheckboxInput;
        this.setState({
            benefits: newBenefit,
        });
    };
    deleteBenefit = (key) => {
        //1. Take a copy of state
        const benefitState = { ...this.state.benefits };
        //2. Update the state
        delete benefitState[key];
        //3. Update state
        this.setState({
            benefits: benefitState
        });
    }
    //We need a method, that updates state. This method is written bellow:
    addKeyIngredient = IngredientThatHasBeenAddedInIngredientsFormInputFields => {
        //1. Take copy of the exsiting state
        const newIngredient = {
            ...this.state.ingredients
        };
        //2. Set the new features object to state
        newIngredient[`ingredient${Date.now()}`] = IngredientThatHasBeenAddedInIngredientsFormInputFields;
        //3. Set the new state
        this.setState({
            ingredients: newIngredient, //New feature is fx.: feature2018275198275: {feature: name of the feature}
        });
    };
    addAllIngredients = AllIngredientsThatHasBeenAddedInAllIngredientsFormInputField => {
        //1. Take copy of the exsiting state
        const newIngredient = {
            ...this.state.allingredients
        };
        //2. Set the new features object to state
        newIngredient[`allingredients1`] = AllIngredientsThatHasBeenAddedInAllIngredientsFormInputField;
        //3. Set the new state
        this.setState({
            allingredients: newIngredient, //New feature is fx.: feature2018275198275: {feature: name of the feature}
        });
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Features
                                addDescription={this.addDescription}
                            />
                            <Benefits
                                addBenefit={this.addBenefit}
                                benefit='Working feature'
                            />
                            <Benefits
                                addBenefit={this.addBenefit}
                                benefit='What??'
                            />
                            <KeyIngredients
                                addKeyIngredient={this.addKeyIngredient}
                            />
                            <AllIngredients
                                addAllIngredients={this.addAllIngredients}
                            />
                        </div>
                        <div className="col-6">
                            <div className="features">
                                {/* Whenever there is something in state, we are going to map over and for each render this: */}
                                {Object.keys(this.state.features).map(key =>
                                    <OutputFeatures key={key} index={key} featureprop={this.state.features[key]} deleteF={this.deleteFeature} />
                                )}
                            </div>
                            <div className="benefits">
                                {/* Whenever there is something in state, we are going to map over and for each render this: */}
                                {Object.keys(this.state.benefits).map(key =>
                                    <OutputBenefits key={key} index={key} benefitprop={this.state.benefits[key]} deleteB={this.deleteBenefit} />
                                )}
                            </div>
                            <div className="allingredients">
                                {/* Whenever there is something in state, we are going to map over and for each render this: */}
                                {Object.keys(this.state.allingredients).map(key =>
                                    <OutputAllIngredients key={key} index={key} allingredientsprop={this.state.allingredients.allingredients1} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
