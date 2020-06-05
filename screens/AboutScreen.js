import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {
    return (
        <ScrollView>
            <View style={styles.profileContainer}>
                <Image source={ require('../assets/images/VijayProfile.PNG')} style={styles.profileLogo} Text="Vijay Sahu" />
                <Text style={styles.profileInstructions} >
                    Angular | .NET | CORE API | Full Stack Developer
                </Text>
            </View>

            <View style={styles.containerDiv}>
                <Text style={styles.textInput , {fontSize:20 , marginLeft: 15 , marginRight: 15, marginBottom: 20}}>
                    Having extensive experience on Angular 8 and .NET as a Full Stack Developer (Rally, Jira )
                </Text>
                <Text style={styles.textLeftAlign}>
                    Major Skills are as follows :
                </Text>
                <Text style={styles.textInput}>
                    Angular, PWA , .NET Core 2 MVC , ASP.NET MVC 4+ with Razor View Engine, ADO.NET ,Entity Framework, LINQ, Web Services, RESTful, SignalR, Web API, NService Bus, Nunit, N-tier architectural approach , MSSQL (stored procedures, triggers, cursors), Relational Database Design ,AJAX, JSON, JQuery, Javascript, HTML5, CSS, IIS configuration, TFS and GIT
                </Text>
                <Text style={styles.textLeftAlign}>
                    Experience of Azure and Octopus deployment.
                </Text>

                <Text style={styles.textInput}>
                    Work involves Development, communication with Client/BA/BO, Analysis and Requirement Gathering, Handling Hosting Panel and Online Database, Deployment including Dedicated Server and Azure Cloud.
                </Text>
                <Text style={styles.textLeftAlign}>
                    Work Experience and Specialization:
                </Text>
                <Text style={styles.textInput}>

                    Web Technology : ASP.Net MVC, .Net Core MVC, WCF, Web API, HTML, Angular (2,7,8), SignalR, WebSocket.
                    Scripting Language: CSS, Javascript, jQuery, AJAX and TypeScript.
                    BackEnd : MSSQL Server (Stored Procedures, Functions, Triggers, Cursors) and Code First Approach using Entity Framework (ORM) and LINQ Queries .
                </Text>

                <Text style={styles.textInput}>
                    Development/Deployment/Repositories : Visual Studio 2013/2015/2017, TFS, GitHub, Bit Bucket, JIRA, RALLY, TeamCity , Octupus Deployment for CI and CD.
                    Expertise: Dot Net Development, Programming, R&D, Analyzing Requirement, Communication with Client/BA/BO, Design.
                </Text>
            </View>
        </ScrollView>
    );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
    return (
        <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    containerDiv: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: { 
        color: '#888', 
        fontSize: 14 , 
        fontWeight: 'normal',
        paddingVertical: 5 ,
        letterSpacing: 1.8,
        marginLeft: 15,
        marginRight: 15
    },
    textLeftAlign: {
        justifyContent: 'flex-start',
        textAlign: "left",
        alignSelf: "flex-start",
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    profileContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        height: 100,
        
      },
      profileLogo: {
        width: 159,
        height: 159,
        marginBottom: 10,
        borderRadius: 100
      },
      profileInstructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: "justify",
        paddingBottom: 10
      }, 
});
