import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Pessoa extends Component {
    state = {isDev: true}

    render() {
        // const getNomeCompleto = (nome, sobrenome) => {
        //     return nome + ' ' + sobrenome;
        // };

        return (
            // <Text>{"\n\n\n"} Olá, eu me chamo {getNomeCompleto('Priscila', 'Cunha')}!</Text>

            <View>
                <Text>{"\n\n\n"} Olá, eu me chamo {this.props.nome} e eu sou {this.state.isDev ? "desenvolvedor" : "professor"}!</Text>

                <Button 
                    onPress={() =>{
                        this.setState({ isDev: false })
                    }}
                    disabled={!this.state.isDev}
                    title={
                        this.state.isDev ? "Clique!" : "Olá professor"
                    }
                />
            </View>
        )
    }
}
export default Pessoa;