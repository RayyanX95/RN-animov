import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';

import MovieList from '../../components/MovieList/MovieList';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Video from '../../components/Video/Video';
import CustomModal from '../../components/CustomModal/CustomModal';

export default class MovieDetails extends Component {

    static navigationOptions = ({ navigation }) => {
        const selectedMovie = navigation.getParam('selectedMovie', 'none');
        let movieName = selectedMovie.name.substring(0, 22);
        if (selectedMovie.name.length > 22) {
            movieName = movieName + "..."
        }
        return {
            headerTitle: <Text style={{color: "#FFF", fontSize: 18}} >{movieName}</Text>,
        };
    };
    state = {
        isModalVisible: false
    };

    toggleModalHandler = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isModalVisible: !prevState.isModalVisible
            }
        })
    };

    render() {
        const { navigation } = this.props;
        const selectedMovie = navigation.getParam('selectedMovie', 'NO-PLACE');

        return (
            <ScrollView>
                <View style={styles.container} >
                    <View style={styles.subContainer} >

                        <MovieInfo
                            name={selectedMovie.name}
                            year={selectedMovie.year}
                            idmb={selectedMovie.idmb}
                            genre={selectedMovie.genre} />

                        <MovieList
                            style={styles.movieList}
                            styleMovie={styles.movie}
                            detail={true}
                            item={selectedMovie}
                            onMoviePress={null}
                            dismissHandler={this.dismissHandler} />

                        <Button
                            color="#28a745"
                            touchSoundDisabled={false}
                            title="Download"
                            onPress={this.toggleModalHandler} />
                        <Text style={styles.trailer} > Trailer</Text>
                        <Video
                            trailerLink={selectedMovie.trailerLink} />
                    </View>
                    <Text style={styles.text} >Uploaded at {selectedMovie.movieID}</Text>
                </View>
                <CustomModal
                    toggleModal={this.toggleModalHandler}
                    visible={this.state.isModalVisible}
                    torrent720={selectedMovie.torrentLink_720}
                    torrent1080={selectedMovie.torrentLink_1080} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        alignItems: "center"
    },
    subContainer: {
        width: "90%",
        borderWidth: 1,
        borderColor: "#4e4c4c77",
        backgroundColor: "#1d1d1d",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center"
    },
    text: {
        color: "#ffffffad",
        fontSize: 15,
        paddingTop: 8,
        marginBottom: 160,
        fontStyle: "italic"
    },
    trailer: {
        color: "#ffffffad",
        fontSize: 22,
        paddingTop: 8,
        fontWeight: "bold",
        marginTop: 20,
    },
    movieList: {
        marginBottom: 15,
        marginTop:15,
        width: "90%",
        height: 400,
        borderRadius: 10
    },
    movie: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    }
})
