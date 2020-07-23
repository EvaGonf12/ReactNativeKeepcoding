
### README

La api-key va en la cabecera como x-api-key con valor '1d7c28d4-5752-458b-a1e8-b7b6eded03d7'
Notas: 
* Al cargar en la lista de 'My Cats' un gato con una imagen almacenada el elemento Image de react-native no consige renderizar la imagen y rompe la app. Para ello he colocado una imagen default en la lista y no se previsualizarán las imágenes cargadas.
* Como al entrar en un listado no me cargaba automáticamente el RefreshControl añadí una animación de lottie, ya que el webservice de listado de razas a veces tarda un buen rato en devolver los datos
* La vista de detalle carga una imagen de la raza en cuestión, por algún motivo también tarda bastante en obtener la imagen, a veces unos cuantos segundos

