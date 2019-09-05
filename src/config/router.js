import React from 'react'
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
} from "react-navigation";
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { HomeScreen, MoviesScreen, DetailsScreen, Test } from '../screens/index';


const Tabs = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                header: null,
                tabBarIcon: <Icon name="md-home" size={30} color="white" />,
            }),
        },
        Movies: {
            screen: MoviesScreen,
            navigationOptions: () => ({
                header: null,
                tabBarIcon: <Icon name="md-film" size={30} color="white" />,
                // title: "Mov"
            }),
        },
        Test: {
            screen: Test,
            navigationOptions: () => ({
                header: null,
                tabBarIcon: <Icon name="md-add-circle" size={30} color="white" />,
            }),
        },
    },
    {
        navigationOptions: () => ({
            header: null,

        }),
        tabBarOptions: {
            labelStyle: {
                fontSize: 16,
                color: "white"
            },
            // tabStyle: {
            //     width: 100,
            // },
            style: {
                backgroundColor: '#28a745',
            },
            activeTintColor: "white",
            showIcon: true,
            showLabel: false
        }
    });

const App = createStackNavigator(
    {
        Tabs: Tabs,
        DetailsScreen: {
            screen: DetailsScreen,
            navigationOptions: () => ({
                headerStyle: {
                    backgroundColor: "#28a745",
                    color: "white"
                },
                // headerTitle: <Text style={{color: "#900", fontSize: 22}}>Movie Details</Text>,
                // title: "DetailsScreen",
                headerBackImage: <Icon name="md-arrow-round-back" size={30} color="#fff" />
            }),
        },
    },
    {
        // headerLayoutPreset: "center",
        // headerMode: "float",
        // initialRouteName: "DetailsScreen"
    }
);

export default AppContainer = createAppContainer(App);