import axios from "axios";
import { useState } from "react";
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = ({ navigation, setIsAuthenticated}) => {

    const Image = require('../assets/image/coba.jpg');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Error', 'Username and password cannot be empty');
            return;
        }
        axios.post('http://192.168.100.79:8080/api/login', {
            username: username,
            password: password
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.data.status === 200) {
                Alert.alert('Success', 'Login Successful');
                setIsAuthenticated(true);  
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', 'Invalid credentials');
            }
        })
        .catch(error => {
            if (error.response) {
                console.log('Response Error:', error.response.data);
                Alert.alert('Error', `Server Error: ${error.response.data.message || 'An error occurred'}`);
            } else if (error.request) {
                console.log('Request Error:', error.request);
                Alert.alert('Error', 'No response from server');
            } else {
                console.log('General Error:', error.message);
                Alert.alert('Error', `An unexpected error occurred: ${error.message}`);
            }
        });
    };

    return (
        <ImageBackground source={Image} style={styles.image}>
            <SafeAreaView style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin} 
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 40,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: to make inputs more readable
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        width: '50%',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});

export default LoginScreen;
