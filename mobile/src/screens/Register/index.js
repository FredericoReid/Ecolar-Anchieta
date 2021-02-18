import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

function Register({ navigation }) {

    const login = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.caixa}>
            <View style={styles.fundo}>
                <View style={styles.container}>

                    <View>
                        <Text style={styles.titulo}>Cadastre-se</Text>
                    </View>

                    <View style={styles.inputs}>

                        <TextInput placeholder="Nome" style={styles.input} />
                        <TextInput placeholder="Email" style={styles.input} />
                        <TextInput placeholder="Senha" style={styles.input} />
                        <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry={true} />

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.texto}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.link}
                            onPress={login}>
                            Já possui uma conta? Clique aqui</Text>

                    </View>
                </View>
            </View>

        </View>
    )
}


export default Register;