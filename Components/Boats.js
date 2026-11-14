
import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'fit',
    },

    header: {
        backgroundColor: 'skyblue',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        paddingVertical: 2,
        paddingHorizontal: 5,
        justifyContent: "center",
        marginBottom: 10,
    },

    description: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 14,
        padding: 10,
        marginBottom: 10,
    },

    picture: {
        width: '100%',
        height: 230,
        borderRadius: 5,
    }
});


// Ex1: User-defined component Boat with properties con_name, icon_color,name, description , picture
const Boat = ({name, description , picture}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                <FontAwesome6 name={"sailboat"} size={20} color={"blue"} />
                {name}
            </Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <Image source={picture}
                   style={styles.picture} />

        </View>
    );
};

export default Boat;
