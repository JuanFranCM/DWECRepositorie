# DWECRepositorie

<h1>E01 Entrega inicial plantilla03</h1>

<img src="./img/imgReadme/E01I01.png" alt="Ejemplo inicio">

<p>-   Estilo mediante combinación de css y bootstrap</p>

<h2>-   Funciones usadas de js en las actividades 01-02:</h2>

<img src="./img/imgReadme/E01I02.png" alt="Ejemplo ejercicio01">

<h3>-   Archivo scripts.js:</h3>

<img src="./img/imgReadme/E01I03.png" alt="código scripts">

<p>-   Usamos getElementById para localizar el elemento botón y resultado, y de esta forma poder realizar una escucha al botón y cuando esto ocurra mostrar el resultado el la posición del elemento resultado mediante la función de functions.js</p>

<h3>-   Archivo functions.js</h3>

<img src="./img/imgReadme/E01I04.png" alt="Código functions">

<p>-   Usamos un console.log para saber por consola que se ha ejecutado la función correcta y modificamos el valor del html del elemento resultado por una frase predeterminada en la que extrae el número del ejercicio mediante getAttribute sobre el valor del nombre, que varía en función del ejercicio.</p>

<h1>E02 Entrega Login ventanas</h1>

<img src="./img/imgReadme/E02I01.png" alt="Solicitud de usuario">

<h2>-   Funciones usadas de js en la validación del login</h2>

<img src="./img/imgReadme/E02I02.png" alt="Login ventana emergente">

<p>- La función login que es llamada desde scripts.js produce dos prompts solicitando usuario y contraseña al usuario, para luego validarlos con los valores almacenados en las constantes. En caso de coincidir, se saldrá del bucle de comprobación y se accederá al contenido.</p>

<img src="./img/imgReadme/E02I03.png" alt="error en credenciales">

<p>- En caso de introducir las credenciales incorrectamente, se emitirá una señal de alerta avisándonos de ello</p>

<img src="./img/imgReadme/E02I04.png" alt="retry">

<p>- Posteriormente, si decidimos pulsar volver a intentarlo continuaremos dentro del bucle de comprobación un intento más cada vez que lo pulsemos, o en caso de denegar el reintento saldremos del login pero no se cargará el contenido principal de la página</p>


<h1>E03 Entrega Login con formulario</h1>

<img src="./img/imgReadme/E03I01.png" alt="login">

<h2>-   Funciones usadas de js en la validación del login</h2>

<img src="./img/imgReadme/E03I02.png" alt="login">

<h2>-  Estructura form html</h2>

<img src="./img/imgReadme/E03I03.png" alt="login">

<p>- Partiendo del apartado anterior, recogemos mediante el uso de document.getElementById las entradas del formulario, el contenedor del form, y el contenedor del contenido completo de la página.</p>

<p>-   Mediante un query selector creamos una constante referente al botón del formulario, a la cual le ponemos un Listener para detectar cuando el usuario haga click en enviar la información y así comenzar el proceso de autenticación.</p>

<p>-   Dentro de la función comprobamos que el contenido obtenido en cada uno de los campos es el correcto, si es así lanzamos un mensaje de bienvenida y mostramos el contenido de la página cambiando el display de este.</p>

<img src="./img/imgReadme/E03I04.png" alt="login bienvenida">

<p>-   En caso de no acertar las credenciales se emitirá un mensaje de error</p>


<h1>E04 Entrega cookies + number</h1>

<p>En esta entrega he modificado el login para que funcione junto con las cookies, he añadido y manejado cookies, añadido la función de logeout, e implementado dos actividades de Number llamadas minicalculadora y conversor de bases</p>

<h2>Cookies</h2>
<h3>cookie.js</h3>
<img src="./img/imgReadme/E04I01.png">
<p>En primer lugar el cookie.js comprueba cada vez que se accede a una nueva página si la cookie de inicio de sesión existe, y si no es así nos dirige automáticamente al index.html del login, independientemente de la localización en la que nos encontremos.</p>
<p>Para realizar la dirección correcta al login, con la función window.location.pathname cogemos la localización actual en la que nos encontremos, independientemente del sistema en el que nos encontremos.</p>

<p>Posteriormente, cortamos esta ruta por los caracteres que separan los directorios (/) con .split resultando en un array, para luego encontrar el index del repositorio que contiene el login (alojado en el contenido principar) y quedarnos hasta este(en slice usamos una posición más para quedarnos con la deseada), y posteriormente usamos join('/') para volver a unir los fragmentos y añadimos la dirección final al login.</p>
<p>Una vez obtenida la dirección absoluta independientemente del sistema en el que nos encontremos, podremos dirigirnos al login sin importar en que ubicación nos encontremos en el directorio</p>

<h3>setCookie.js</h3>
<img src="./img/imgReadme/E04I02.png">
<p>Teniendo el valor de provisional de caducidad preestablecido, esta función genera una cookie con un nombre y valor determinados, esetableciendo el tiempo de expiración (1 min) respeto a la hora actual. Todo esto siempre que el navegador permita el manejo de cookies<p>

<h3>getCookie.js</h3>
<img src="./img/imgReadme/E04I03.png">
<p>Esta función busca en las cookies actuales la cookie que especifiquemos en name al llamar la función, recorriendo el conjunto de cookies como un array después de dividir el conjunto con la función split<p>

<h3>deleteCookie.js</h3>
<img src="./img/imgReadme/E04I04.png">
<p>Al llamar a la función deleteCookie, recorremos el string de cookie en forma de array tras el split como en getCookie, hasta llegar al especificado y modificar su tiempo de expiración<p>

<h2>Nuevo Login</h2>
<img src="./img/imgReadme/E04I05.png">
<h3>Ubicación y funciones añadidas</h3>
<p>Este nuevo login está en un archivo html independiente del resto de archivos, algunas funciones mejoradas son el mensaje de bienvenida dentro del mismo login y autorellenado de los inputs al perder el foco</p>

<h3>Inicio y creación cookie</h3>
<img src="./img/imgReadme/E04I06.png">
<p>Al realizar un login correcto, generamos una cookie con el nombre de "loggedIn" valor "true" que luego nos servirá en cookie.js para saber si hemos iniciado sesión o no en el resto de páginas.</p>
<p> Posteriormente desactiva los campos del login y carga la página de inicio con un timeout</p>

<h3>Impedir volver atrás desde login</h3>
<img src="./img/imgReadme/E04I07.png">
<p>Un problema presente en este ejercicio era que una vez caducaba la cookie, o hacíamos logout, una vez ya redireccionados al login podíamos desde el navegador volver a ir a las direcciones accedidas anteriormente a la elimicación de la cookie, las cuales al haber sido validadas al entrar en su momento no requieren que vuelvan a ser validadas ya que solo ejecutan la comprobación al entrar<p>

<p>Para evitar esto y no consumir muchos recursos como hubiese requerido mirar de forma constante si está la cookie o no, una vez en el login con push state eliminamos el historial anterior de acceso, y además impedimos volver a la ventana anterior con un Listener a la ventana en si a la acción popstate, redireccionándonos en este caso a la misma página de login<p>

<h2>Nuevo menú principal</h2>
<img src="./img/imgReadme/E04I08.png">
<h3>Botón de logout</h3>
<img src="./img/imgReadme/E04I09.png">
<p>En toda la web contamos con un botón de cerrar sesión en la esquina superior derecha, el cual eecuta el código de logout.js. Este elimina la cookie creada en login y nos redirecciona a la página de login de la misma forma que lo hace cookie.js al no detectar la cookie de login</p>

<h3>Load Exercise</h3>
<img src="./img/imgReadme/E04I10.png">
<p>Al menú principal está asociado por una parte el script.js de su directorio que tendrá Listener en las opciones del nav desplegable dando a elegir entre las dos tareas de esta entrega, minicalculadora y conversor de bases. Al detectar click ejecutará el código de loadExercise.js</p>
<img src="./img/imgReadme/E04I11.png">
<p>Al recibir la señal este archivo js cargará según la opción elegida desde el navbar el contenido de la introducción a la tarea en cuestión, todo sin salirse del mismo archivo html del menú principal usando innerHTML</p>

<img src="./img/imgReadme/E04I12.png">
<p>Desplegable</p>
<img src="./img/imgReadme/E04I13.png">
<p>Tarjeta de minicalculadora</p>

<h2>Minicalculadora</h2>
<img src="./img/imgReadme/E04I14.png">

<h3>Funcionamiento gráfico</h3>
<img src="./img/imgReadme/E04I15.png">
<p>Esta calculadora nos permite escribir dos números en la parte superior, para luego realizar alguna de las operaciones al pulsar el botón correspondiente y luego mostrar en resultado el resultado de dicha operación. Incluye suma, resta, multiplicación, división, resto y factorial. Por otra parte cuenta con el selector de la parte entera que será colocada en el valor izquierdo superior, y de la parte decimal en el derecho.</p>

<h3>Script.js de minicalculadora</h3>
<img src="./img/imgReadme/E04I16.png">
<p>Todos los operadores de la calculadora están dentro de la clase operadores. Mediante un getElementsByClassName cogemos el conjunto de botones operadores y luego hacemos un forEach para un evento Listener y captar el click en los botones. Al hacerlo desencadena la función selectorOperador a la cual se le envía el operador que ha recibido el click</p>

<h3>Functions.js de minicalculadora</h3>
<img src="./img/imgReadme/E04I17.png">
<p>Siguiendo el siguiente paso al script.js, esta función toma el id de dicho operador (suma, resta, resto...), y según el id que sea (operador, parte entera, o decimal) modifica una parte u otra del html obteniendo el resultado de la función operar explicada en la siguiente imagen</p>
<p>Si es una operación, cambiará el contenido en el html con el resultado obtenido de la operación. Si es quedarse ccon la parte entera, tomará el valor entero del resultado y lo pondrá en el primer valor...</p>

<img src="./img/imgReadme/E04I18.png">
<p>La función operar recibe dos valores, los cuales no tienen por que ser los valores introducidos por el usuario (Ej coger parte entera o decimal), junto con un indicador de la operación a realizar que coincide con el id que cada botón tiene, de esta forma al pulsar sumar, llega a operar con el id sumar y en el switch ejecuta el contenido del case "sumar", devolviendo el valor de la suma</p>


<h2>Conversor de bases</h2>
<img src="./img/imgReadme/E04I19.png">
<p>El conversor de bases nos devuelve el valor introducido en base 2(binario), 8(octal), o 16(hexadecimal) según el botón correspondiente que pulsemos</p>

<h3>Script de conversor de bases</h3>
<img src="./img/imgReadme/E04I20.png">
<p>El código del conversor en muy simple. Creamos listeners a cada botón, y al pulsar cada uno con la función toString(base) nos devuelve automáticamente el resultado de ese número en la base que indiquemos.</p>
