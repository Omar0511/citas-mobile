import React from 'react';

import {
  // Cada que usamos un componente, debemos importarlo aquí
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// Función
// Un componente siempre tendrá un RETURN
const App = () => {
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
    </SafeAreaView>
  );
};

// Se recomienda nombrarlo de esta forma
const styles = StyleSheet.create(
  {
    container:
    {
      backgroundColor: '#F3F4F6',
      
      // Toma todo el contenido de la pantalla
      flex: 1,
    },

    titulo: 
    {
      textAlign: 'center',
      fontSize: 30,
      color: '#374151',
      fontWeight: '600',
    },

    tituloBold: {
      fontWeight: '900',
      color: '#6D28D9',
    }
  }
)

export default App;
