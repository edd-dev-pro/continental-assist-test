# continental-assist-test
This is a work test for continental assist



## Request

Crear una pantalla donde se visualiza un listado de cupones existentes.

    1.1. Esta pantalla debe contar los siguientes campos:

    - Id del cupón
    - Código del cupón
    - Porcentaje de descuento
    - Fecha Desde
    - Fecha Hasta
    - Nombre del status

    1.2 Debe mostrar el total de cupones

    1.3 Incluya un buscador de acuerdo al código del cupón y que el parámetro de busqueda sea enviado de la siguiente manera: {"codigo": "CODIGO_DEL_CUPON_A_BUSCAR"}, (El servicio se encargará de responder con el cupón correspondiente, en caso de ir vacío, el servicio responderá con todos los cupones)