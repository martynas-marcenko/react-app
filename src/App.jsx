import React from 'react';
import './App.css';
import Features from './components/Features';
import Result from './components/Result';
import OutputFeatures from './components/OutputFeatures';


class App extends React.Component {
    state = {
        //Features will be an object full of diferent features:
        features: [
            {}
        ],
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
        featureState[key] = null;
        //3. Update state
        this.setState({
            features: featureState
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
                            <div className="features">
                                {Object.keys(this.state.features).map(key => {/* Whenever there is something in state, we are going to map over and for each render this: */ },
                                    <OutputFeatures key={key} featureprop={this.state.features[key]} />
                                )}
                            </div>
                            <div className="features">Hello<OutputFeatures featureprop={this.state.features} /></div>
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Result />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
