import React, {Component} from 'react';

class OpenTriviaTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            question: {}
        };
    }

    componentDidMount() {
        fetch("http://localhost:10001/get-question?category=animals")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        question: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, question} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div><pre>{JSON.stringify(question, null, 2) }</pre></div>
            );
        }
    }
}

export default OpenTriviaTest;