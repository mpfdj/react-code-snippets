import React, {Component} from 'react';

class FordMustang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({color: "blue"});
    }

    render() {
        return (
            <div>
                <h2>
                    I am a {this.state.color} {this.state.brand} {this.state.model} from {this.state.year}.
                    <button type="button" onClick={this.changeColor}>Change color</button>
                </h2>
            </div>
        );
    }
}

export default FordMustang;