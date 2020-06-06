import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

export function DrawerContent(props) {
    const [isDarkMode, setDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setDarkMode(isDarkMode);
    };
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            {/* <Avatar.Image
                                source={{
                                    uri:  <Image source={ require('../assets/images/robot-dev.png')} />
                                }}
                                size={50}
                            /> */}
                            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                <Title style={styles.title}>Vijay Sahu</Title>
                                <Caption style={styles.caption} >@vijay.sahu12</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.Paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.Paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                            label="Home"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            label="Posts"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            label="Bookmarks"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            label="Support"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            label="Feedback"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            label="Profile Setting"
                            onPress={() => { }}
                        />
                    </Drawer.Section>

                    <Drawer.Section >
                                <TouchableRipple onPress={() => {toggleTheme()}}>
                                    <View styles={styles.preference}>
                                        <Text> Dark Mode</Text>
                                        <View pointerEvents = "none" >
                                            <Switch value={isDarkMode} />
                                        </View>
                                      
                                    </View>
                                </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    onPress={() => { }}
                />

            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});