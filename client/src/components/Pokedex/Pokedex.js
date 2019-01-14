import React, { Component } from "react";
import { connect } from "react-redux";
import { showPokemon } from "../../redux/actions";
import mainImg from "../../../src/mainimg.jpg";
import InputField from "../InputField/InputField";
import SearchButton from "../SearchButton/SearchButton";
import "../../../src/index.css";

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.state = {
            disabled: true,
            pokemon: []
        };
    };

    handleChangeButton = () => {
        const searchField = this.searchRef.current;

        if ( searchField.hasError() || searchField.value === "" ) {
            this.setState({ disabled: true });
        } else {
            this.setState({ disabled: false });
        };
    };

    sendData = (e) => {
        e.preventDefault();

        const typedData = {
            pokemon: this.searchRef.current.getValue()
        };

        this.props.showPokemon(typedData);
    };

    render(){
        return (
            <section className="pokedex">
                <section className="pokedex--searchwrapper">
                    <form 
                        onSubmit={this.sendData}
                        className="pokedex--search">
                        <img src={mainImg}/>
                        <InputField
                            required
                            ref={this.searchRef}
                            onChange={this.handleChangeButton}
                        />
                        <SearchButton
                            disabled={this.state.disabled}
                            value="Buscar Pokémon"
                        />
                    </form>
                    <SearchButton
                        value="Mostrar todos"
                    />
                    <p>Essa Pokedéx contém os nomes da versão em inglês da franquia.</p>
                </section>
            </section>
        )
    }
}

export default connect(
    (state) => ({ pokemon: state.pokemon }),
    { showPokemon }
) (Pokedex);

