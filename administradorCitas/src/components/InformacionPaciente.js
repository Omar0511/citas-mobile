import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const InformacionPaciente = ({
    paciente
}) => {
    return (
        <SafeAreaView>
            <Text>Información Paciente</Text>

            <Text>{paciente.nombrePaciente}</Text>
            <Text>{paciente.nombrePropietario}</Text>
            <Text>{paciente.emailPropietario}</Text>
            <Text>{paciente.telefonoPropietario}</Text>
            <Text>{paciente.fecha}</Text>
            <Text>{paciente.sintomasPaciente}</Text>
        </SafeAreaView>
    )
}

export default InformacionPaciente;
