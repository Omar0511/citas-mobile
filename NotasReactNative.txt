Componentes React Native
Todos los contenedores son VIEW

Text: Debe ser un texto, ejemplo: LABEL
Button
View: es como un DIV html
StyleSheet
Pressable: es como un BUTTON
Alert
ScroView
FlatList
Modal
Picker: es como un SELECT

JSX:
Extensión de lenguaje para REACT.
Es JS pero soporta etiquetas y componentes como HTML, basicamente es un 
lenguaje de Template que muestra el HTML pero tiene todas las funciones
de JS.
REGLAS:
A diferencia de HTML, no es estricto.
Si un elemento HTML tiene una etiqueta de apertura, deberás tener también la
de cierre, no se pondrá sola.
Cada componente debe tener un return que es lo que se mostrará en pantalla.
En este return debe haber máximo un solo elemento
en el nivel máximo.

HOOKS:
Están disponibles desde la versión 16.8,
antes de ello se ten´ían que crear clases
para crear y modificar el STATE, con los
HOOKS no es necesario.
Los HOOKS se dividen en básicos y adicionales.

CATEGORIAS:
useState
useEffect
useContext

Adicionales:
useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue

Ventas:
crear propios hooks, de esta forma podrás
separar tu código en funciones reutilizables
y sacar todo el beneficio de lo que REACT ofrece.

REGLAS:
Se colocan en la parte superior de tus 
componentet en REACT.
No se deben colocar dentro de condicionales.
Tampoco se coloan después de un RETURN.

STATE
Muestra el estado de la app.
Es una variable de información relevante en nuestra app,
algunas veces el STATE pertenece a un componente en 
específico o algunas veces deseas compartirlo a lo
largo de diferentes componentes.
El STATE es creado con la funcion: useState();
Ejemplo:
const [cliente, setCliente] = useState({});
const [cliente, setCliente] = useState(0);
const [cliente, setCliente] = useState([]);
const [cliente, setCliente] = useState(false);


React reacciona en base al STATE, cada que el STATE cambia, 
la APP se va renderizando y actualiza los cambios.
Para modificar el STATE, se utiliza la función que extraemos
cuando declaramos el STATE en nuestro componente.

Dentro del PROYECTO, instalremos DEVTOOLS, abrimos POWERSHELL:
npm i react-devtools

PROPS:
Son variables o funciones de otros componentes.

El STATE o FUNCIONES que crees en tus componenetes, solo estarán 
disponibles en ese componentet.
Una forma de evitar duplicar código y reutilizar esas variables, 
state o estado y funciones en otros componentes es por medio de
PROPS o PROPIEDADES.
Los PROPS se pasan del padre al hijo, nunca se pueden pasar
del hijo al padre.

Si tienes un STATE que se va a pasar por diferente4s componentes,
lo mejor es colocarlo en el archivo principal.
Cada nivel de componente deberá tomar y pasar el PROP hacia otros
componentes, tecnologías como REDUX o CONTEXT evitan tener que
hacerlo de esta forma.

INSTALAR DATE PICKER
npm i react-native-date-picker
SOLO SI INSTALARAS LA APP EN IOS
cd ios
pod install

USEEFFECT:
Es el más utilizado después de useState.
Siempre es un callback que se ejecuta cuando un STATE cambia o cuando
el componente esta listo.

Es el sustituto de lo que antes era: componentDidMount()
y: componentDidUpdate()

Al ejecutarse automaticamente cuando el componente esta listo, 
es un excelente lugar para colocar código para consultar una
API o LocalStorage.

Debido a que le podemos pasar una dependencia y estar escuchando
por los cambios que sucendan en una variable, puede actualizar
el componente cuando ese cambio suceda.

SOMBRAS:
ethercreative.github.io/react-native-shadow-generator/

