import React from 'react';
import { Text, SafeAreaView, View, Pressable, StyleSheet } from 'react-native';
import { formatearFEcha } from '../helpers';

const InformacionPaciente = ({
    paciente,
    setPaciente,
    setModalPaciente
}) => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.titulo}>
                Información {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>

            <View>
                <Pressable
                    onLongPress={ () => {
                        setModalPaciente(false)
                        setPaciente({})
                    } }
                    style={styles.btnCerrar}
                >
                    <Text style={styles.btnCerrarTexto}>x Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Paciente:</Text>
                    <Text style={styles.valor}>{paciente.nombrePaciente}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Propietario:</Text>
                    <Text style={styles.valor}>{paciente.nombrePropietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>E-mail Propietario:</Text>
                    <Text style={styles.valor}>{paciente.emailPropietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono Propietario:</Text>
                    <Text style={styles.valor}>{paciente.telefonoPropietario}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha:</Text>
                    <Text style={styles.valor}>{formatearFEcha(paciente.fecha)}</Text>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Síntomas:</Text>
                    <Text style={styles.valor}>{paciente.sintomasPaciente}</Text>
                </View>
            </View>
        </SafeAreaView>
    )   
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F59E0B',
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF',
    },

    tituloBold: {
        fontWeight: '900',
    },

    btnCerrar: {
        marginVertical: 30,
        backgroundColor: '#E06900',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },

    btnCerrarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },

    // Sombras: https://ethercreative.github.io/react-native-shadow-generator/
    contenido: {
        backgroundColor: '#FFF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    campo: {
        marginBottom: 10
    },

    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        fontSize: 12
    },

    valor: {
        fontWeight: '700',
        fontSize: 20,
        color: '#374151'
    }
});

export default InformacionPaciente;
