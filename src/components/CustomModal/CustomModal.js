import React from "react";
import {
    Button,
    Text,
    View,
    StyleSheet,
    Linking,
    Image,
    TouchableNativeFeedback
} from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';

import image from '../../../assets/uTorrent.jpg'

export default customModal = (props) => {
    return (
        <Modal isVisible={props.visible}>
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.mainTxt} >Download in</Text>
                    <Icon name="md-close" size={30} color="white" onPress={props.toggleModal} />
                </View>
                <View style={styles.txtContainer}>
                    <View style={styles.txtBackgroundColor} >
                        <Text
                            style={styles.txt}
                            onPress={() => Linking.openURL(props.torrent720)} >
                            720.BlueRay</Text>
                    </View>
                    <View style={styles.txtBackgroundColor} >
                        <Text
                            style={styles.txt}
                            onPress={() => Linking.openURL(props.torrent1080)} >
                            1080.BlueRay</Text>
                    </View>

                </View>
                <View style={styles.msgContainer} >
                    <Text style={styles.msgText} >To download the movie you should have torrent app
                        on your device, click below icon to get it</Text>
                    <TouchableNativeFeedback onPress={() => Linking.openURL("https://play.google.com/store/apps/details?id=com.utorrent.client")} >
                        <Image source={image} style={styles.msgImage} to />
                    </TouchableNativeFeedback>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#4e4c4c77",
        backgroundColor: "#a0aaa4",
        borderRadius: 10,
        padding: 15
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    txtContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 8
    },
    mainTxt: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    txt: {
        color: "#ffffffad",
        fontSize: 18,
        fontStyle: "italic"
    },
    txtBackgroundColor: {
        borderWidth: 1,
        borderColor: "#4e4c4c77",
        backgroundColor: "#1d1d1d",
        padding: 5,
        borderRadius: 8
    },
    msgContainer: {
        marginTop: 5,
        alignItems: "center"
    },
    msgText: {
        color: "#fff",
        fontStyle: "italic",
        padding: 5,
        fontSize: 15
    },
    msgImage: {
        width: 80,
        height: 50,
        borderRadius: 10
    }
})