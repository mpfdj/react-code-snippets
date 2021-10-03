import React, {Component} from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    };

    render() {
        return <h2>I am a {this.props.brand.name} {this.props.brand.model}!</h2>;
    }
}

export default Car;