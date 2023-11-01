App de Comercio Electronico

App demo de sitio web para dueños de mascotas de tipo 'rata'. Para la compra de alimentos, accesorios y juegutes necesarios para su ciudado. La app tiene las siguientes funcionalidades.

App creada con stack MERN, usando mongoDB Atlas para el almacenamiento de la data correspondiente al catalogo de productos y a los usuarios del sitio. Express y node para la creación de la API que conecta database con el frontend, y que ejecuta todos los métodos HTTP necesarios para los usos de la app.

Frontend creado con React haciendo uso de funcionalidades clave como useContext, usado especificamente para crear contexto de carro de compras, contexto de autenticación para hacer login y logout, para así acceder a rutas y funcionalidades privadas, y un contexto de SignIn/Register para renderizar el front end sin navbar ni footer cuando se este dentro de estas rutas.

La app tiene las siguientes funcionalidades

1. Landing page con header img, info general y acceso directo a colecciones de productos.

2. Colecciones con productos clasificados y renderizados a partir de info obtenida de API.

3. Pagina individual de cada producto segun ID, con info obtenida de API. 

4. Posibilidad de añadir producto a carro en pagina de colecciones o pagina individual, y modificación
   de cantidad de productos en ruta de producto individual o en ruta de carro.

5. ruta de carro de compras, con todos los productos añadidos al carro, valor total y botón de compra.

6. Acceso a crear una cuenta personal privada, usando JWT para la autenticación. 
