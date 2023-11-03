import React from 'react';

import {
  // Cada que usamos un componente, debemos importarlo aquí
  View,
  Text,
  SafeAreaView,
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

    <SafeAreaView>
      <Text>Administrado de Citas</Text>
      <Text>Veterinaria</Text>
    </SafeAreaView>
  );
};
export default App;
