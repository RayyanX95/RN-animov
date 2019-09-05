import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import MovieList from '../../components/MovieList/MovieList';
import Search from '../../components/Search/Search';
import SearchResult from '../../components/Search/SearchResult';
import { getMovies } from '../../store/actions/index';
import LoadingPage from '../../components/LoadingPage/LoadingPage'

class MoviesScreen extends Component {
    state = {
        searchText: '',
        searchedMovies: null
    };

    movieDetailsHandler = (key) => {
        const selectedMovie = this.props.movies.find(movie => movie.key === key)
        this.props.navigation.navigate("DetailsScreen", {
            selectedMovie: selectedMovie,
        })
    }
    onChangeTxtHandler = text => {
        const newData = this.props.movies.filter(movie => {
            const movieName = movie.name.toUpperCase();
            const textData = text.toUpperCase();
            return movieName.indexOf(textData) > -1;
        });
        let fiveMovies = newData;
        if (newData.length > 5) {
            fiveMovies = newData.slice(0, 5)
        }
        this.setState({ searchText: text, searchedMovies: fiveMovies })
    }
    closeSearchHandler = () => {
        this.setState({ searchedMovies: null })
    }
    onTouchHandler = () => {
        this.props.onLoadedMovies();
    }
    componentDidMount = () => {
        this.props.onLoadedMovies();
    }

    render() {
        let content = null;
        if (this.state.searchText && this.state.searchedMovies) {
            content = <SearchResult
                movieDetails={this.movieDetailsHandler}
                latestMovies={this.state.searchedMovies} />
        }
        if (this.props.isLoading) {
            if (this.props.isNoInternet) {
                return (
                    <LoadingPage onTouch={this.onTouchHandler} >
                        <Text style={styles.text}>No internet connection</Text>
                        <Icon name="md-sad" size={50} style={{ marginTop: 10 }} color="#ffffffad" />
                        <Text style={styles.msgText}>Touch the screen to reload</Text>
                    </LoadingPage>
                );
            }
            return (
                <LoadingPage onTouch={this.onTouchHandler} >
                    <ActivityIndicator size={90} color="#28a745" />
                </LoadingPage>
            )
        }
        return (
            <ScrollView>
                <View
                    style={styles.container}
                    onTouchEnd={this.closeSearchHandler} >
                    <Search
                        value={this.state.searchText}
                        onChange={this.onChangeTxtHandler}
                        placeholder="Find your movie..." />
                    {content}
                    <Text style={styles.Text} >Browse all movies</Text>
                    <View style={styles.subContainer}>
                        <FlatList
                            numColumns={2}
                            style={styles.subContainer}
                            data={this.props.movies}
                            renderItem={(info) => (
                                <MovieList
                                    key={info.key}
                                    item={info.item}
                                    onMoviePress={this.movieDetailsHandler}
                                    dismissHandler={this.dismissHandler} />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        alignItems: "center",
        paddingBottom: 50
    },
    subContainer: {
        width: "100%",
        borderColor: "#fff",
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        color: "#ffffffad",
        fontSize: 19,
    },
    msgText: {
        color: "#28a745",
        fontSize: 22,
        marginTop: 60,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    Text: {
        color: "#ffffffad",
        fontSize: 22,
        fontWeight: "bold",
    },
})

const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        isLoading: state.ui.isLoading,
        isNoInternet: state.ui.isNoInternet,
    }
}
const mapDispatchToPops = dispatch => {
    return {
        onLoadedMovies: () => dispatch(getMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToPops)(MoviesScreen);
