import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

const SearchBox = (props) => {
    return (
        <View style={styles.inputContainer} >
            <TextInput
                style={styles.textInput}
                placeholderTextColor="#ffffffad"
                onChangeText={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
        marginTop: 30,
        marginBottom: 30
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#4e4c4c77",
        backgroundColor: "#a0aaa4",
        borderRadius: 20,
        color: "#fff",
        fontSize: 17,
        padding: 5,
        paddingLeft: 16,
        fontWeight: "bold"
    },
})

export default SearchBox
