import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const InformacionPaciente = ({paciente}) => {
    return (
        <SafeAreaView>
            <Text>Información Pacientes</Text>
            <Text>{paciente.paciente}</Text>
        </SafeAreaView>
    )
}

export default InformacionPaciente
