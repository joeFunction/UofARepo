import React, { Component } from "react";
import SearchForm from "../searchform/SearchForm";
import ResultList from "../resultlist/ResultList";
import axios from "axios";

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "puppies",
            results: []
        };

        this.BASE_URL = "https://api.giphy.com/v1/gifs/search?q=";
        this.API_KEY = "&api_key=dc6zaTOxFJmzC&limit=20";
    };

    searchGiphy = async () => {
        try {
            const result = await axios.get(this.BASE_URL + this.state.search + this.API_KEY);

            this.setState({ results: result.data.data });

            // console.log(result.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        this.searchGiphy();
    };

    componentDidMount() {
        this.searchGiphy();
    };

    render() {
        return (
            <>
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit}/>
                <br></br>
                <ResultList results={this.state.results} />
            </>
        );
    };
};

export default SearchContainer;