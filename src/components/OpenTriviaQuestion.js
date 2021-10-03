import React, {Component} from 'react';
import OpenTriviaQuestionForm from './OpenTriviaQuestionForm';

class OpenTriviaQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            question: {}
        };
    }

    componentDidMount() {
        fetch("http://localhost:10001/get-question?category=" + this.props.category)
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
                <div>
                    <OpenTriviaQuestionForm data={question}/>
                </div>
            );
        }
    }

}

export default OpenTriviaQuestion;