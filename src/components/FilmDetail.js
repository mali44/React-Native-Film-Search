import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import ReadMore from 'react-native-read-more-text';

const FilmDetail = ({ film }) => {
    const { title, original_title, poster_path, backdrop_path, overview, vote_average } = film;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>


            <CardSection>
                <View style={thumbnailContainerStyle}>

                    <Image
                        style={thumbnailStyle}
                        source={{ uri: 'https://image.tmdb.org/t/p/w200/' + backdrop_path }} />
                    <Text style={{ color: '#fff' }}>Rate:{vote_average}</Text>
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text style={{ fontFamily: 'sans-serif', color: '#FFFFFF' }}>{original_title}</Text>


                </View>

            </CardSection>

            <CardSection>

                <Image style={imageStyle}
                    source={{ uri: 'https://image.tmdb.org/t/p/w400/' + poster_path }}
                />
            </CardSection>
            <CardSection>
                <ReadMore style={{ color: ' #FFFFFF' }}
                    numberOfLines={2} >
                    <Text style={{ fontFamily: 'sans-serif-light', color: '#FFFFFF' }}>
                        {overview}</Text>
                </ReadMore>
            </CardSection>
        </Card>
    );

}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        textAlign: 'center'
    },
    headerTextStyle: {
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
        color: '#FFFFFF'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        flexDirection: 'column',

        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

}
export default FilmDetail;