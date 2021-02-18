import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Linking,
    Alert,
} from 'react-native';

import styles from './styles';

const userApi = {
    id: 1,
    email: 'Recode@recode.org',
    password: 'recodepro',
}

function Login({ navigation }) {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    const autentication = () => {
        if (userApi.email === user && userApi.password === password) {
            navigation.navigate('PainelUser')
        } else {
            Alert.alert("Algo errado!", "Tente novamente. . .")
        }

        setPassword('')
    }

    const register = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.caixa}>
            <View style={styles.fundo}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Bem Vindo(a) ao Eco Lar Anchieta</Text>
                    <View>
                        <Text style={styles.subtitulo}>Login</Text>
                    </View>

                    <View style={styles.inputs}>

                        <TextInput placeholder="Email" value={user} style={styles.input} onChangeText={(text) => setUser(text)} />
                        <TextInput placeholder="Senha" value={password} style={styles.input} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />

                        <TouchableOpacity style={styles.btn}>
                            <Text onPress={autentication} style={styles.texto}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.link}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Esqueceu a senha ? Clique aqui</Text>
                        <Text style={styles.link}
                            onPress={register}>
                            Ainda não tem uma conta?</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}


export default Login;