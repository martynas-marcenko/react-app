import React from 'react';
import './App.css';
import Features from './components/Features';
import Result from './components/Result';
import OutputFeatures from './components/OutputFeatures';
import Benefits from './components/Benefits';
import OutputBenefits from './components/OutputBenefits';

class App extends React.Component {
    state = {
        //Features will be an object full of diferent features:
        features: {},
        benefits: {},
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
            benefit: newBenefit,
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Features
                                addDescription={this.addDescription}
                            />
                            <div className="features">
                                {/* Whenever there is something in state, we are going to map over and for each render this: */}
                                {Object.keys(this.state.features).map(key =>
                                    <OutputFeatures key={key} index={key} featureprop={this.state.features[key]} deleteF={this.deleteFeature} />
                                )}
                            </div>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row">
                        <Benefits addBenefit={this.addBenefit} />
                        <div className="benefits">
                            {Object.keys(this.state.benefits).map(key =>
                                <OutputBenefits key={key} index={key} benefitprop={this.state.benefits[key]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
