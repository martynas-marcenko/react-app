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
    addDescription = addDescriptionMethod => {
        //1. Take copy of the exsiting state
        const featureFromForm = {
            ...this.state.features
        };
        //2. Set the new features object to state
        featureFromForm[`feature${Date.now()}`] = addDescriptionMethod;
        //3. Set the new state
        this.setState({
            features: featureFromForm,
        });
    };
    deleteFeature = (key) => {
        //1. Take a copy of state
        const features = { ...this.state.features };
        //2. Set what we want to delete
        features[key]
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Features addDescription={this.addDescription} />
                            <div className="features">
                                {Object.keys(this.state.features).map(key => <OutputFeatures key={key} featureprop={this.state.features[key]} />)}
                            </div>
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
