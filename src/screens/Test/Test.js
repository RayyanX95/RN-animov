import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

export default class MovieDetails extends Component {

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.subContainer} >
                    <Text style={styles.Text} >Will Release soon...</Text>
                    <ActivityIndicator size={30} color="#28a745" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        alignItems: "center",
        justifyContent: "center"
    },
    subContainer: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#4e4c4c77",
        backgroundColor: "#1d1d1d",
        borderRadius: 10,
        alignItems: "center",
        padding: 20
    },
    Text: {
        color: "#ffffffad",
        fontSize: 22,
        paddingBottom: 20
    },
})
