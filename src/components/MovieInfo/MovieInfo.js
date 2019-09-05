import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MovieInfo = (props) => {
    return (
        <View style={styles.movieInfo} >
            <Text style={styles.movieNameTxt} >{props.name}</Text>
            <Text style={styles.text} >{props.genre}</Text>
            <Text style={styles.text} >{props.year}</Text>
            <View style={styles.genre} >
                <Icon name="md-star" size={28} color="#28a745" />
                <Text style={styles.genreTxt} >{props.idmb}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    movieInfo: {
        width: "90%",
        marginTop: 10,
    },
    text: {
        color: "#ffffffad",
        fontSize: 18,
        paddingTop: 12,
        fontWeight: "bold"
    },
    genre: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 12,
    },
    genreTxt: {
        color: "#ffffffad",
        fontSize: 18,
        paddingLeft: 10,
        fontWeight: "bold"
    },
    movieNameTxt: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#f3f3f3",
        paddingTop: 12
    },
})

export default MovieInfo
