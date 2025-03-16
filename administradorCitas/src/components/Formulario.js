// Atajo: rafce
import React, {useState, useEffect} from 'react';

import {
    Modal,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    ScrollView,
    Pressable,
    Alert
} from 'react-native';

import DatePicker from 'react-native-date-picker';

const Formulario = ({modalVisible, setModalVisible, pacientes, setPacientes, paciente: pacienteObj, setPaciente: setPacienteApp}) => {
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [id, setId] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');
    const [telefonoPropietario, setTelefonoPropietario] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [sintomasPaciente, setSintomasPaciente] = useState('');

    
    /**
     * [] = se ejecuta 1 sola vez
    */
    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            console.log(('Hay algo'));

            setId(pacienteObj.id);
            setNombrePaciente(pacienteObj.nombrePaciente);
            setNombrePropietario(pacienteObj.nombrePropietario);
            setEmailPropietario(pacienteObj.emailPropietario);
            setTelefonoPropietario(pacienteObj.telefonoPropietario);
            setFecha(pacienteObj.fecha);
            setSintomasPaciente(pacienteObj.sintomasPaciente);
        }

        console.log('Formulario Listo...');
        console.log(pacienteObj);
    }, [pacienteObj]);

    const handleCita = () => {
        // console.log('Agregar cita');
        if ( [nombrePaciente, nombrePropietario, emailPropietario, fecha, sintomasPaciente].includes('') ) {
            // console.log('Error');
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                // 3er campo....
                // [
                //     {
                //         text: 'Recordarme después'
                //     },
                //     {
                //         text: 'Cancelar',
                //         style: 'cancel' //default - destructive
                //     },
                //     {
                //         text: 'OK'
                //     }
                // ]
            );

            return;
        }

        const nuevoPaciente = {
            // id: Date.now(),
            nombrePaciente,
            nombrePropietario,
            emailPropietario,
            telefonoPropietario,
            fecha,
            sintomasPaciente
        };

        // console.log(nuevoPaciente);

        // Revisar si es un registro o es una edición
        console.log(id);
        if (id) {
            nuevoPaciente.id = id;
            // console.log('Edicion:', nuevoPaciente);

            const pacientesActualizados = pacientes.map(
                pacienteState => pacienteState.id === nuevoPaciente.id
                                    ? nuevoPaciente
                                    : pacienteState
            );

            // console.log(pacientesActualizados);

            setPacientes(pacientesActualizados);
            setPacienteApp({});
        } else {
            nuevoPaciente.id = Date.now();
            setPacientes( [...pacientes, nuevoPaciente] );
        }

        setModalVisible(!modalVisible);
        setId('');
        setNombrePaciente('');
        setNombrePropietario('');
        setEmailPropietario('');
        setTelefonoPropietario('');
        setFecha(new Date());
        setSintomasPaciente('');
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>
                        {
                            pacienteObj.id
                                ? 'Editar'
                                : 'Nueva'
                        } {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable 
                        style={styles.btnCancelar}
                        onLongPress={ () => {
                            setModalVisible(!modalVisible)
                            setPacienteApp({})
                            setId('');
                            setNombrePaciente('');
                            setNombrePropietario('');
                            setEmailPropietario('');
                            setTelefonoPropietario('');
                            setFecha(new Date());
                            setSintomasPaciente('');
                        }}
                    >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={nombrePaciente}
                            onChangeText={setNombrePaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={nombrePropietario}
                            onChangeText={setNombrePropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email Propietario'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={emailPropietario}
                            onChangeText={setEmailPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono Propietario</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Teléfono Propietario'
                            placeholderTextColor={'#666'}
                            keyboardType='phone-pad'
                            value={telefonoPropietario}
                            onChangeText={setTelefonoPropietario}
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        
                        <View style={styles.fechaContenedor}>
                            <DatePicker 
                                date={fecha}
                                locale='es'
                                onDateChange={ (date) => setFecha(date) }
                            />
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput 
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Síntomas Paciente'
                            placeholderTextColor={'#666'}
                            value={sintomasPaciente}
                            onChangeText={setSintomasPaciente}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <Pressable 
                        style={styles.btnNuevaCita}
                        onPress={handleCita}
                    >
                        <Text style={styles.btnNuevaCitaTexto}>{ pacienteObj.id ? 'Editar' : 'Agregar'} Paciente</Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
};

const styles = StyleSheet.create(
    {
        contenido: {
            backgroundColor: '#6D28D9',
            flex: 1,
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

        btnCancelar: {
            marginVertical: 30,
            backgroundColor: '#5827A4',
            marginHorizontal: 30,
            padding: 15,
            borderRadius: 10
        },

        btnCancelarTexto: {
            color: '#FFF',
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 16,
            textTransform: 'uppercase',
        },

        campo: {
            marginTop: 10,
            marginHorizontal: 30,
        },

        label: {
            color: '#FFF',
            marginBottom: 10,
            marginTop: 15,
            fontSize: 20,
            fontWeight: '600',
        },

        input: {
            backgroundColor: '#FFF',
            padding: 15,
            borderRadius: 10,
        },

        sintomasInput: {
            height: 100
        },

        fechaContenedor: {
            backgroundColor: '#FFF',
            borderRadius: 10,
        },

        btnNuevaCita: {
            marginVertical: 50,
            backgroundColor: '#F59E0B',
            paddingVertical: 15,
            marginHorizontal: 30,
            borderRadius: 10
        },  

        btnNuevaCitaTexto: {
            textAlign: 'center',
            color: '#5827A4',
            textTransform: 'uppercase',
            fontWeight: '900',
            fontSize: 16
        }
    }
);

export default Formulario;
