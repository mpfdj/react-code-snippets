import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Garage from './components/Garage.js';
import OpenTriviaTest from './components/OpenTriviaTest.js';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import FormDemo from "./components/FormDemo";
import OpenTriviaQuestionForm2 from "./components/OpenTriviaQuestionForm2";
import RadioButtons from "./components/RadioButtons";
import ListGroupButtons from "./components/ListGroupButtons";


// https://stackoverflow.com/questions/46820682/how-do-i-reload-a-page-with-react-router
// https://reactrouter.com/web/api/BrowserRouter
// https://stackoverflow.com/questions/47602091/how-to-use-react-router-4-0-to-refresh-current-route-not-reload-the-whole-page
// https://www.google.com/search?q=react-router+reload+same+route


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {categories: ["animals", "brain-teasers", "celebrities", "entertainment", "for-kids", "general", "geography", "history", "hobbies", "humanities"]};
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>


                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        {/*<Route path="/car" component={Car}/>*/}
                        <Route path="/garage" component={Garage}/>
                        <Route path="/open-trivia-test" component={OpenTriviaTest}/>
                        <Route path="/shopping-cart" component={ShoppingCart}/>
                        <Route path="/form-demo" component={FormDemo}/>
                        <Route path="/radio-buttons" component={RadioButtons}/>
                        <Route path="/list-group-buttons" component={ListGroupButtons}/>
                        {this.state.categories.map((c, index) => {
                            return (
                                // https://learnwithparam.com/blog/how-to-pass-props-in-react-router/
                                // <Route key={index} path={"/" + c} render={(props) => <OpenTriviaQuestion {...props} category={c} />} />
                                // <Route key={index} path={"/" + c} render={(props) => <OpenTriviaQuestionFormImproved {...props} category={c} />} />
                                <Route key={index} path={"/" + c} render={(props) => <OpenTriviaQuestionForm2 {...props} category={c} />} />
                            );
                        })};


                        <Route component={Error}/>
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;