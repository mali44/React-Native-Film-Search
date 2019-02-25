import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Image } from 'react-native';
import Button from '../src/components/Button';


class ChooseType extends Component {


    state = { filmType: "12" }
    updateSelectedType = (filmType) => {
        this.setState({ filmType: filmType })

    }


    category = {

        "28": "Action	",
        "12": "Adventure",
        "16": "Animation",
        "35": "Comedy",
        "80": "Crime",
        "99": "Documentary",
        "18": "Drama",
        "10751": "	Family",
        "14": "Fantasy",
        "36": "History",
        "27": "Horror",
        "10402": "	Music",
        "9648": "Mystery",
        "10749": "	Romance",
        "878": "ScienceFiction",
        "10770": "	TVMovie",
        "53": "Thriller",
        "10752": "	War",
        "37": "Western",



    };

    getFilm = () => {
        this.props.navigation.navigate('FilmDetail', {
            title: this.state.filmType

        });

    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        <Button onPress={this.getFilm}>
            Film Ara
        </Button>
    }
    render() {

        return (

            <View style={styles.container}>

                <View>
                    <Text>
                        {this.state.filmType}
                    </Text>
                </View>

                <Picker style={{ width: '100%' }}
                    mode="dropdown"
                    selectedValue={this.state.filmType}
                    onValueChange={this.updateSelectedType}
                >

                    {Object.keys(this.category).map((key) => {
                        return (<Picker.Item label={this.category[key]} value={key} key={key} />)
                    })}
                </Picker>


                <Button onPress={this.getFilm}>
                    Film Ara
                </Button>



            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',

        justifyContent: 'flex-start',
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});

export default ChooseType;