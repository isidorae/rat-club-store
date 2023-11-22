Proyecto: App de Comercio Electronico

App demo de sitio web para dueños de mascotas de tipo 'rata'. Para la compra de alimentos, accesorios y juegutes necesarios para su ciudado.

Creada con stack MERN, usando mongoDB Atlas para el almacenamiento de la data correspondiente al catalogo de productos, a los usuarios del sitio, y las ordenes/pedidos realizados. Para levantar el REST API se esta usando el dominio público gratuito de wwww.onrender.com. Uso de Express y node para la creación de la API que conecta database con el frontend, y que ejecuta todos los métodos HTTP necesarios para los usos de la app.

Frontend creado con React haciendo uso de funcionalidades clave como useContext, usado especificamente para crear contexto de carro de compras, contexto de autenticación para hacer signup, login y logout, para así acceder a rutas y funcionalidades privadas, y un contexto de SignIn/Register para renderizar el front end sin navbar ni footer cuando se este dentro de estas rutas.

La app tiene las siguientes funcionalidades.

1. Landing page con header img, info general y acceso directo a colecciones de productos.

2. Colecciones con productos clasificados y renderizados a partir de info obtenida de API.

3. Pagina individual de cada producto segun ID, con info obtenida de API. 

4. Opción de añadir producto a carro en pagina de colecciones o pagina individual, y modificación de cantidad de productos en ruta de producto individual o en ruta de carro.

5. Ruta privada /carrito, con todos los productos añadidos al carro, valor total y botón de compra.

6. Ruta de /checkout, para simular envio de datos de delivery del usuario, y simular pago con un simple botón.

7. Acceso a crear una cuenta personal privada, necesario para ingresar a carrito de compras y simular compra. 

8. Ruta privada de 'myprofile' para ver datos del usuario, editar datos y acceder a pedidos realizados en la app. 


NOTAS:

*Debido a que API REST esta levantada en servidor gratuito de www.onrender.com, la primera petición puede tardar varios minutos en ejecutarse. Recomiendo primero abrir alguna sección de la API REST (https://ratclub.onrender.com/rat-club-api/v1/products/), esperar que cargue y luego probar la app. 

*JWT inicialmente se almacenaba en una cookie en el frontend, pero al cambiar ruta de API de local a www.onrender.com, esto fue cambiado ya que el uso del dominio publico de 'onrender.com' no permite almacenar cookies en browser por temas de seguridad. 
