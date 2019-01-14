import React, { Component } from "react";
import "./InputField.css";

class InputField extends Component {
    constructor(props){
        super(props);
        this.value = "";
        this.state = {
            modified: "false",
            error: ""
        };
    };

    getValue = () => {
        return this.value;
    };

    hasError = () => {
        return !this.state.modified || this.state.erro ? true : false;
    };

    validate = (event) => {
        const input = event.target;
        let message = "";

        const { value } = input;
        const { required } = this.props;

        if ( required && value.trim() === "" ) {
            message = "Preencher o campo de pesquisa é obrigatório!";
        };

        this.setState({ modified: "true", error: message }, this.props.onChange);

        this.value = value;
    };

    render() {
        return (
            <div className="inputArea">
                <div class="errorArea">
                    <p className="error">{this.state.error}</p>
                </div>
                <input
                    type="text"
                    id="searchInput"
                    name="pokedexInput"
                    className="pokedexInput"
                    placeholder="Digite um número de 1 à 151 ou o nome de um Pokémon"
                    onChange={this.validate}
                    onBlur={this.validate}
                />
            </div>
        );
    };
};

export default InputField;