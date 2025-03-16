import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  FlatList,
  Alert,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {
  // Los HOOKS se coloan en la parte superior, cliente = variable, setCliente = Función
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const pacienteEditar = id => {
    console.log('Editando...', id);

    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    console.log(pacienteEditar);

    setPaciente(pacienteEditar[0]);
  };

  const pacienteEliminar = id => {
    console.log('Eliminar...', id);

    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar...',
      [
        {
          text: 'Cancelar'
        },

        {
          text: 'Si, Eliminar', onPress: () => {
            console.log('Paciente Eliminado!');

            const pacientesActualizados = pacientes.filter(
              pacienteState => pacienteState.id !== id
            );

            setPacientes(pacientesActualizados);
          }
        }
      ]
    );
  }
  
  return (
    // SafeAreaView es un componente que asegura que el contenido del área segura se mantenga en toda la pantalla
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        // onPress={ () => setModalVisible(true) }
        onPress={ () => setModalVisible(!modalVisible) }
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      {
        pacientes.length === 0
          ? <Text style={styles.noPacientes}>No hay citas registradas</Text>
          : <FlatList 
              style={styles.listado}
              data={pacientes}
              // va ligado con data, es decir; los valores que contiene el objeto en este ejemplo = pacientes
              keyExtractor={item => item.id}
              renderItem= {
                ( {item} )=> {
                  // console.log(item);

                  return(
                    <Paciente 
                      item={item}
                      setModalVisible={setModalVisible}
                      pacienteEditar={pacienteEditar}
                      pacienteEliminar={pacienteEliminar}
                    />
                  )
                }
              }
            />
      }

      <Formulario
        // nombre del prop / nombre función que se esta pasando
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
    </SafeAreaView>
  );
};

// CSS
const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#F3F4F6',
      // Toma todo el contenido, se estira de arriba hacia abajo
      flex: 1,
    },

    titulo: {
      textAlign: 'center',
      fontSize: 30,
      color: '#374151',
      fontWeight: 'bold',
    },

    tituloBold: {
      fontWeight: 'bold',
      color: '#6D28D9',
    },

    btnNuevaCita: {
      backgroundColor: '#6D28D9',
      padding: 15,
      marginTop: 30,
      // marginRight: 20,
      // marginLeft: 20,
      // Se susituty por:
      marginHorizontal: 20,
      borderRadius: 10,
    },

    btnTextoNuevaCita: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 18,
      fontWeight: '900',
      textTransform: 'uppercase',
    },

    noPacientes: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '60',
    },

    listado: {
      marginTop: 30,
      marginHorizontal: 30,
    },
  }
);

export default App;
