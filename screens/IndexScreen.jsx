import React from "react";
import { Text, View, Button, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
    const navigation = useNavigation();
    const Image = require('../assets/image/opening.png');

    // useEffect(() => {
    //     // Navigate to LoginScreen after 2 seconds
    //     const timer = setTimeout(() => {
    //         navigation.navigate("Login");
    //     }, 2000); // Adjust the duration as needed

    //     return () => clearTimeout(timer); // Cleanup the timer on component unmount
    // }, [navigation]);

    return (
        <ImageBackground source={Image} style={styles.image}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Go to Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#007BFF', // Custom background color
        paddingVertical: 12, // Vertical padding
        paddingHorizontal: 74, // Horizontal padding
        borderRadius: 5, // Rounded corners
        width: '80%', // Custom width (adjust as needed)
        alignItems: 'center',
        shadowColor: '#000', // Shadow color for Android
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for Android
        shadowOpacity: 0.2, // Shadow opacity for Android
        shadowRadius: 3, // Shadow radius for Android
        elevation: 3, // Shadow elevation for Android
        position: 'relative',
        top: 160,
        left: 5,
    },
    buttonText: {
        color: '#FFFFFF', // Text color
        fontSize: 16, // Font size
        fontWeight: 'bold', // Text weight
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});

export default IndexScreen;
