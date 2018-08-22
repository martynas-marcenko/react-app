import React from 'react';
import './App.css';
import Features from './components/Features';
import Result from './components/Result';
import OutputFeatures from './components/OutputFeatures';
import Benefits from './components/Benefits';
import OutputBenefits from './components/OutputBenefits';
import KeyIngredients from './components/KeyIngredients';
import OutputKeyIngredients from './components/OutputKeyIngredients.jsx';
import AllIngredients from './components/AllIngredients';
import OutputAllIngredients from './components/OutputAllIngredients';

class App extends React.Component {
    state = {
        //Features will be an object full of diferent features:
        features: {},
        benefits: {},
        keyingredients: {},
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
            ...this.state.keyingredients
        };
        //2. Set the new features object to state
        newIngredient[`ingredient${Date.now()}`] = IngredientThatHasBeenAddedInIngredientsFormInputFields;
        //3. Set the new state
        this.setState({
            keyingredients: newIngredient, //New feature is fx.: feature2018275198275: {feature: name of the feature}
        });
    };
    deleteKeyIngredient = (key) => {
        //1. Take a copy of state
        const ingredientState = { ...this.state.keyingredients };
        //2. Update the state
        delete ingredientState[key];
        //3. Update state
        this.setState({
            keyingredients: ingredientState
        });
    }
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
                        <div className="col-12">
                            <div className="title">
                                Features
                            </div>
                        </div>
                    </div>
                    <div className="row section">
                        <div className="col-6">
                            <div className="features">
                                <Features
                                    addDescription={this.addDescription}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="output-features">
                                {/* Whenever there is something in state, we are going to map over and for each render this: */}
                                {Object.keys(this.state.features).map(key =>
                                    <OutputFeatures key={key} index={key} featureprop={this.state.features[key]} deleteF={this.deleteFeature} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                Benefits
                            </div>
                        </div>
                    </div>
                    <div className="row section">
                        <div className="col-6">
                            <div className="benefits">
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Nourishing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Nuorishing-1493915879070.svg?3614303732377407379'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Oxygenating'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/oxygenating-1493915885886.svg?7323090859226146494'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Protecting'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Protecting-1493915903922.svg?10364255144177186245'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Rejuvenating'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Rejuvenating-1493915911886.svg?14963443270035319653'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Repairing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/repairing-1493915917157.svg?9597331579178511889'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Smoothing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Smoothing-1493915950652.svg?12959888648046236118'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Hydrating'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Hydrating-1493915830036.svg?12564176129778218163'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Moisturizing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Moisturizing-1493915841808.svg?17829383255372045632'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Balancing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Balancing-1493915809606.svg?16274732071984212080'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Calming'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Calming-1493915796833.svg?3308510685998345308'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Anti-aging'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Anti-aging-1493917092303.svg?16226979868536018865'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Brightening'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Brightening-1493917298085.svg?1375487978328920540'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Softening'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Softening-1493917442730.svg?7886088305291859288'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Soothing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Soothing-1493918306955.svg?4123437481627338675'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Aromatherapeutic'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Aromatherapeutic-1495401001329.svg?4011056043780574833'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Refreshing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Refreshing-1495441773807.svg?11094283993528287631'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Restorative'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/Restorative-1495450886083.svg?17310348331855549588'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Firming'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/3/assets/firming-1495450927993.svg?15107092279394313866'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Purifying'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/4/assets/purifying.svg?5389254095967405525'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Exfoliating'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/4/assets/exfoliating.svg?15891604636095319032'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Energizing'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/4/assets/energizing.svg?1908623252447614233'
                                />
                                <Benefits
                                    addBenefit={this.addBenefit}
                                    benefit='Strengthening'
                                    url='https://cdn.shopify.com/s/files/1/1749/1581/t/4/assets/Strengthening.svg?12066192953291040831'
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="output-benefits">
                                {/* Whenever there is something in state, we are going to map over and for each render this: */}
                                {Object.keys(this.state.benefits).map(key =>
                                    <OutputBenefits key={key} index={key} benefitprop={this.state.benefits[key]} deleteB={this.deleteBenefit} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                Key Ingredients
                            </div>
                        </div>
                    </div>
                    <div className="row section">
                        <div className="col-6">
                            <div className="key-ingredients">
                                <KeyIngredients
                                    addKeyIngredient={this.addKeyIngredient}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            {/* Whenever there is something in state, we are going to map over and for each render this: */}
                            {Object.keys(this.state.keyingredients).map(key =>
                                <OutputKeyIngredients key={key} index={key} keyingredientsprop={this.state.keyingredients[key]} deleteI={this.deleteKeyIngredient} />
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                All Ingredients
                            </div>
                        </div>
                    </div>
                    <div className="row section">
                        <div className="col-6">
                            <div className="all-ingredients section">
                                <AllIngredients
                                    addAllIngredients={this.addAllIngredients}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="output-all-ingredients">
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
