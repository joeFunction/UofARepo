import React, { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props);

        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            phoneNum: ""
        };
    };

    handleInputChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;

        const { name, value } = event.target;

        // name = firstName
        // name = lastName

        this.setState({
            [name]: value
        });

        // if (inputName === "firstName") {
        //     this.setState({ firstName: event.target.value });
        // } else {
        //     this.setState({ lastName: event.target.value });
        // }
    };

    // handleInputLastNameChange = (event) => {
    //     this.setState({ lastName: event.target.value });
    // };

    handleSubmit = (event) => {
        event.preventDefault();

        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);

        this.setState({
            firstName: "",
            lastName: "",
            phoneNum: ""
        });
    };

    // handleSubmit(event) {
    //     event.preventDefault();

    //     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);


    // };

    render() {
        return (
            <>
                <form>
                    <label>
                        First Name:
                        <input
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            placeholder="Tony">
                        </input>
                    </label>
                    <br></br>
                    <label>
                        Last Name:
                        <input
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            placeholder="Stark"
                        ></input>
                    </label>
                    <label>
                        Phone Number:
                        <input
                            name="phoneNum"
                            type="text"
                            value={this.state.phoneNum}
                            onChange={this.handleInputChange}
                            placeholder="1112223334">
                        </input>
                    </label>
                    <br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        );
    };
};

export default NameForm;