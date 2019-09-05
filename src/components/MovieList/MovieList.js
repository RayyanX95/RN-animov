import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get("window")

const MovieList = (props) => {
    let movieName = props.item.name.substring(0, 16);
    if (props.item.name.length > 16) {
        movieName = movieName + "..."
    }
    return (
        <View style={[styles.movieContainer, props.style]}>
            <TouchableHighlight
                onPress={props.onMoviePress ? () => props.onMoviePress(props.item.key) : null}>
                <View style={[styles.movie, props.styleMovie]} >
                    <Image
                        source={{ uri: props.item.imgURL }}
                        style={[styles.image, props.styleMovie]} />

                    {/* <View style={props.detail ? styles.movieInfo_none : styles.movieInfo} >
                        <Text style={styles.text} >{movieName}</Text>
                        <View style={styles.genreContainer} >
                            <Icon name="md-star" size={25} style={{ marginRight: 7 }} color="#28a745" />
                            <Text style={styles.text} >{props.item.idmb}</Text>
                        </View>
                    </View> */}

                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    movieContainer: {
        width: "50%",
        height: 280,
        borderWidth: 1,
        borderColor: "#e0d53952",
    },
    movie: {
        width: "100%",
        height: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    movieInfo: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 10,
    },
    movieInfo_none: {
        display: "none"
    },
    genreContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        color: "#f3f3f3",
        fontWeight: "bold",
    },
    test: {
        width: "50%",
        height: 250,
    }
})

export default MovieList