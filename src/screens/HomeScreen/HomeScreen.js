import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'

import MovieList from '../../components/MovieList/MovieList';
import SearchBox from '../../components/Search/Search';
import Search from '../../components/Search/SearchResult'
import { getMovies } from '../../store/actions/index';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import Video from "../../components/Video/Video";

class Home extends Component {
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
        let popularMovies = this.props.movies.filter(movie => movie.idmb > 7.0);
        popularMovies.sort(function (a, b) {
            return a.idmb - b.idmb;
        });
        const reverseTopFour = popularMovies.reverse();
        let topFour = reverseTopFour.slice(0, 4);
        topFour = this.props.movies.slice(10, 14)
        const latestMovies = this.props.movies.slice(0, 4);

        let content = null;
        if (this.state.searchText && this.state.searchedMovies) {
            content = <Search
                movieDetails={this.movieDetailsHandler}
                latestMovies={this.state.searchedMovies} />
        }
        if (this.props.isLoading) {
            if (this.props.isNoInternet) {
                return (
                    <LoadingPage onTouch={this.onTouchHandler} >
                        <Text style={styles.secondaryText}>No internet connection</Text>
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
                    <SearchBox
                        value={this.state.searchText}
                        onChange={this.onChangeTxtHandler}
                        placeholder="Find your movie..." />

                    {/* <Video trailerLink="https://openload.co/embed/w61bMBZ2GgU" /> */}

                    {content}
                    <Text style={styles.Text} >Popular Movies</Text>
                    <View style={styles.subContainer}>
                        {
                            topFour.map(movie => {
                                return (
                                    < MovieList
                                        key={movie.key}
                                        item={movie}
                                        onMoviePress={this.movieDetailsHandler}
                                        dismissHandler={this.dismissHandler} />
                                    // <Button title="Go On" />
                                );
                            })
                        }
                    </View>
                    <Text style={styles.Text} >Latest Movies</Text>
                    <View style={styles.subContainer}>
                        {
                            latestMovies.map(movie => {
                                return (
                                    < MovieList
                                        key={movie.key}
                                        item={movie}
                                        onMoviePress={this.movieDetailsHandler}
                                        dismissHandler={this.dismissHandler} />
                                );
                            })
                        }
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717",
        alignItems: "center",
        paddingBottom: 60,
    },
    subContainer: {
        marginTop: 20,
        marginBottom: 20,
        paddingBottom: 20,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    Text: {
        color: "#ffffffad",
        fontSize: 22,
        fontWeight: "bold",
    },
    secondaryText: {
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

export default connect(mapStateToProps, mapDispatchToPops)(Home);