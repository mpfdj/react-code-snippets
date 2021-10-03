import React, {Component} from 'react';
import Car from './Car.js';
import FordMustang from './FordMustang.js';

class Garage extends Component {
    render() {
        const carinfoFerrari = {name: "Ferrari", model: "F40"};
        const carinfoPorsche = {name: "Porsche", model: "Carrera "};

        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carinfoFerrari}/>
                <Car brand={carinfoPorsche}/>
                <FordMustang/>
            </div>
        );
    }
}

export default Garage;