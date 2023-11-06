import React, {useState} from 'react';

import {
  // Cada que usamos un componente, debemos importarlo aquí
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Modal,
} from 'react-native';

import Formulario from './src/components/Formulario';

// Función
// Un componente siempre tendrá un RETURN
const App = () => {
  // Los HOOKS se colocan en la parte superior
  const [modalVisible, setModalVisible] = useState(false)

  return (
    /*
      No podemos poner 2 ETIQUETAS
      iguales en un RETURN, debemos 
      o podemos usar un VIEW
      
      <Text>Administrado de Citas</Text>
      <Text>Citas</Text>

      Es diseñado para iOS solamente
      <SafeAreaView></SafeAreaView>

      // No crea un nuevo componente, es útil cuando no queremos crear varios Views
      <Fragment></Fragment>
    */

    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas
        {''} {/* es un espacio */}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable 
        style = { styles.btnNuevaCita }
        onPress = { () => setModalVisible(true) }
      >
        <Text 
          style = { styles.btnTextoNuevacita }
        >
          Nueva Cita
        </Text>
      </Pressable>

      {/* De esta forma importamos los componenetes */}
      <Formulario 
        modalVisible = {modalVisible}
      />
    </SafeAreaView>
  );
};

// Se recomienda nombrarlo de esta forma
const styles = StyleSheet.create( {
    container: {
      backgroundColor: '#F3F4F6',
      
      // Toma todo el contenido de la pantalla
      flex: 1,
    },

    titulo: {
      textAlign: 'center',
      fontSize: 30,
      color: '#374151',
      fontWeight: '600',
    },

    tituloBold: {
      fontWeight: '900',
      color: '#6D28D9',
    },

    btnNuevaCita: {
      backgroundColor: '#6D28D9',
      padding: 15,
      marginTop: 30,
      marginHorizontal: 20,
      borderRadius: 10
    },

    btnTextoNuevacita: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 18,
      fontWeight: '900',
      textTransform: 'uppercase'
    },
} );

export default App;
