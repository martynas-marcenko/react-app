import React from 'react';
import './App.css';
import FormComponent from './components/Form';
import Result from './components/Result';



class App extends React.Component {
    state = {
        //Features will be an object full of diferent features:
        features: [
            {}
        ],
    }
    //We need a method, that updates state. This method is written bellow:
    addDescription = description => {
        //1. Take copy of the exsiting state
        const featureFromForm = {
            ...this.state.features
        };
        //2. Set the new features object to state
        featureFromForm[`feature${Date.now()}`] = description;
        //3. Set the new state
        this.setState({
            features: featureFromForm,
        });
    };
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <FormComponent addDescription={this.addDescription} />
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
