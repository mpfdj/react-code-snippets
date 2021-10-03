import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {

    constructor() {
        super();
        this.state = {categories: ["animals", "brain-teasers", "celebrities", "entertainment", "for-kids", "general", "geography", "history", "hobbies", "humanities"]};
    };

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/garage">Garage</Link>
                <Link to="/open-trivia-test">open-trivia-test</Link>
                <Link to="/shopping-cart">shopping-cart</Link>
                <Link to="/shopping-cart">shopping-cart</Link>
                <Link to="/form-demo">form-demo</Link>
                <Link to="/radio-buttons">radio-buttons</Link>
                <Link to="/list-group-buttons">list-group-buttons</Link>
                {this.state.categories.map((c, index) => {
                    return (
                        // <Link key={index} to={c}>{c}&nbsp;</Link>
                        <a key={index} href={c}>{c}&nbsp;</a>
                );
                })}
            </div>
        );
    }

}

export default Navigation;