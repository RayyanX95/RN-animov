import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

const SearchResult = (props) => {
    return (
        <View style={styles.container} >
            {
                props.latestMovies.map(movie =>
                    <View
                        onTouchEnd={() => props.movieDetails(movie.key)}
                        style={styles.subContainer}
                        key={movie.key} >
                        <Image
                            style={styles.image}
                            source={{ uri: movie.imgURL }} />
                        <View style={{ flex: 1 }} >
                            <Text style={styles.text} >{movie.name}</Text>
                            <Text style={styles.year} >{movie.year}</Text>
                        </View>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#4e4c4c77",
        backgroundColor: "#a0aaa4",
        borderRadius: 10,
        marginTop: 68,
        position: "absolute",
        zIndex: 500,
        paddingTop: 8
    },
    subContainer: {
        flexDirection: "row",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#ffffffad",
        backgroundColor: "#a0aaa4",
        margin: 5,
        paddingBottom: 10
    },
    image: {
        width: 35,
        height: 45,
        marginLeft: 8
    },
    text: {
        fontSize: 17,
        color: "#fff",
        marginLeft: 15,
        fontWeight: "bold"
    },
    year: {
        fontSize: 15,
        color: "#ffffffad",
        marginLeft: 15,
        fontWeight: "bold"
    }
})

export default SearchResult
