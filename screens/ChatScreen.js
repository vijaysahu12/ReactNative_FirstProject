import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#888', fontSize: 18, fontWeight: 600, textAlign: "center",  borderColor: "#e443er", height: 50, justifyContent: "center", alignItems: "center" }}>Chat message
            </Text>
            
            <View style={styles.MessageContainer}></View>
            <View style={ { flex: 1, flexDirection: 'row' }}>
            <TextInput style={styles.TextInput} />
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}
                    style={styles.SendButton}>
                    <Text style={{ fontSize: 20, }}>Send</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: "1%",
        height: '100%',
        backgroundColor: "white"
    },
    MessageContainer: {
        height: "88%",
        borderColor: 'black',
        borderWidth: 2
    },
    TextInput: {
        height: "100%",
        marginTop: 10,
        width: "80%",
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        backgroundColor: 'gray'
    },
    SendButton: {
        height: "100%",
        justifyContent:'center',
        alignItems: 'center',
        width: "20%",
        marginTop: 10,
        borderRadius: 0,
        color: "black",
        backgroundColor: 'pink'
    }
})