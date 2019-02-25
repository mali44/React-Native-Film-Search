import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ChooseType from '../screens/ChooseType';
import ShowFilms from '../screens/ShowFilms'
import CustomHeader from '../src/components/header';

const AppNavigator = createStackNavigator({
  Home: {

    screen: ChooseType,
    navigationOptions: {
      title: "Search for your films",
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        color: '#FFFFFF'
      }

    }
  },
  FilmDetail: {
    screen: ShowFilms,
    navigationOptions: {
      title: 'Results ',

      headerStyle: {
        backgroundColor: '#64dd17',
      },
      headerTitleStyle: {
        fontFamily: 'Roboto',
        color: '#FFFFFF'
      }
    }
  },

  initialRouteName: 'Home'

});

export default createAppContainer(AppNavigator);