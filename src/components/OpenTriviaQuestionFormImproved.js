import React, {Component} from "react";
import Scorebox from "./Scorebox.js";

class OpenTriviaQuestionFormImproved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {}
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.fetchData(this.props.category)
    }

    fetchData(category) {
        fetch("http://localhost:10001/get-question?category=" + category)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
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


    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
        alert("Next question...");
        this.fetchData(this.props.category)
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Scorebox />

                    <form onSubmit={this.formSubmit}>
                        <h2>{this.state.data.category}</h2>
                        <p>{this.state.data.question}</p>

                        {this.state.data.choices.map((c, index) => {
                            return (
                                <div key={index} className="radio">
                                    <label key={index}>
                                        <input key={index}
                                               type="radio"
                                               value={c}
                                               checked={this.state.selectedOption === c}
                                               onChange={this.onValueChange}/>
                                        {c}
                                    </label>
                                </div>
                            );
                        })}

                        <div>
                            Selected option is : {this.state.selectedOption}
                        </div>

                        {/*<button className="btn btn-default" type="submit">*/}
                        {/*    Submit*/}
                        {/*</button>*/}
                    </form>

                </div>
            );
        }


    }
}

export default OpenTriviaQuestionFormImproved;