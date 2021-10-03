import React, {Component} from "react";

class OpenTriviaQuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        console.log(this.props);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });

        console.log(event.target.value)



        





    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <h2>{this.props.data.category}</h2>
                <p>{this.props.data.question}</p>

                {this.props.data.choices.map((c, index) => {
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
        );
    }
}

export default OpenTriviaQuestionForm;