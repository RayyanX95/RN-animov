import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

const LoadingPage = (props) => {
    return (
        <View style={styles.container}
            onTouchEnd={() => props.onTouch()} >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1d1d",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default LoadingPage
