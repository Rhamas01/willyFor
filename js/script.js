function generarReporte(){

  //Cliente
  let fecha = document.getElementById('fecha').value ;
  let showFecha = document.getElementById('fechaOut');
  showFecha.innerHTML = "Fecha: " + fecha;

  let codigo = document.getElementById('codigo').value ;
  let showCodigo = document.getElementById('codigoOut');
  showCodigo.innerHTML = "Código: " + codigo;

  let nombre = document.getElementById('nombre').value ;
  let showNombre = document.getElementById('nombreOut');
  showNombre.innerHTML = " 👤" + "Nombre: " + nombre;

  let telefono = document.getElementById('telefono').value ;
  let showTelefono = document.getElementById('telefonoOut');
  showTelefono.innerHTML = " 🕽" + "Teléfono: " + telefono;

  let ciudad = document.getElementById('ciudad').value ;
  let showCiudad = document.getElementById('ciudadOut');
  showCiudad.innerHTML = " 🏙" + "ciudad: " + ciudad;

  let direccion = document.getElementById('direccion').value ;
  let showDireccion = document.getElementById('direccionOut');
  showDireccion.innerHTML = " 🏘" + "direccion: " + direccion;
  
  // Contrato
  let contratoNombre = document.getElementById('contratoNombre').value ;
  let showcontratoNombre = document.getElementById('contratoNombreOut');
  showcontratoNombre.innerHTML = " " + "contrato Nombre: " + " " + contratoNombre;

  let obraMaterial = document.getElementById('obraMaterial').value ;
  let showObraMaterial = document.getElementById('obraMaterialOut');
  showObraMaterial.innerHTML = " " + "obra Material: " + " " + obraMaterial;

  let garantiaOtros = document.getElementById('garantiaOtros').value ;
  let showGarantiaOtros = document.getElementById('garantiaOtrosOut');
  showGarantiaOtros.innerHTML = " " + "garantia Otros: " + " " + garantiaOtros;

  let garantiaServicio = document.getElementById('garantiaServicio').value ;
  let showGarantiaServicio = document.getElementById('garantiaServicioOut');
  showGarantiaServicio.innerHTML = " " + "garantia Servicio: " + " " + garantiaServicio;
  
  //equipo
  let marcas = document.getElementById('marcas').value ;
  let showmarca = document.getElementById('marcasOut');
  showmarca.innerHTML = " " + "marca: " + " " + marcas;

  let modelos = document.getElementById('modelos').value ;
  let showmodelos = document.getElementById('modelosOut');
  showmodelos.innerHTML = " " + "modelos: " + " " + modelos;

  let seriales = document.getElementById('seriales').value ;
  let showSeriales = document.getElementById('serialesOut');
  showSeriales.innerHTML = " " + "seriales: " + " " + seriales;

  let operacion = document.getElementById('operacion').value ;
  let showOperacion = document.getElementById('operacionOut');
  showOperacion.innerHTML = " " + "operacion: " + " " + operacion;

  let operacion2 = document.getElementById('operacion2').value ;
  let showOperacion2 = document.getElementById('operacion2Out');
  showOperacion2.innerHTML = " " + "operacion2: " + " " + operacion2;

  let arranque = document.getElementById('arranque').value ;
  let showArranque = document.getElementById('arranqueOut');
  showArranque.innerHTML = " " + "arranque: " + " " + arranque;

  let arranque2 = document.getElementById('arranque2').value ;
  let showArranque2 = document.getElementById('arranque2Out');
  showArranque2.innerHTML = " " + "arranque2: " + " " + arranque2;

  let refrigerante = document.getElementById('refrigerante').value ;
  let showRefrigerante = document.getElementById('refrigeranteOut');
  showRefrigerante.innerHTML = " " + "refrigerante: " + " " + refrigerante;

  let arrancador = document.getElementById('arrancador').value ;
  let showArrancador = document.getElementById('arrancadorOut');
  showArrancador.innerHTML = " " + "arrancador: " + " " + arrancador;

  let aceite = document.getElementById('aceite').value ;
  let showAceite = document.getElementById('aceiteOut');
  showAceite.innerHTML = " " + "aceite: " + " " + aceite;

  let condicion = document.getElementById('condicion').value ;
  let showCondicion = document.getElementById('condicionOut');
  showCondicion.innerHTML = " " + "condicion: " + " " + condicion;

  let observacion = document.getElementById('observacion').value ;
  let showobservacion = document.getElementById('observacionOut');
  showobservacion.innerHTML = " " + "observacion: " + " " + observacion;

  let descripcionGeneral = document.getElementById('descripcionGeneral').value ;
  let showdescripcionGeneral = document.getElementById('descripcionGeneralOut');
  showdescripcionGeneral.innerHTML = " " + "descripcionGeneral: " + " " + descripcionGeneral;

  let tarea = document.getElementById('tarea').value ;
  let showTarea = document.getElementById('tareaOut');
  showTarea.innerHTML = " " + "tarea: " + " " + tarea;

  //repuestos
  let cantidad = document.getElementById('cantidad').value ;
  let showCantidad = document.getElementById('cantidadOut');
  showCantidad.innerHTML = " " + "cantidad: " + " " + cantidad;

  let cantidad2 = document.getElementById('cantidad2').value ;
  let showCantidad2 = document.getElementById('cantidad2Out');
  showCantidad2.innerHTML = " " + "cantidad: " + " " + cantidad2;

  let cantidad3 = document.getElementById('cantidad3').value ;
  let showCantidad3 = document.getElementById('cantidad3Out');
  showCantidad3.innerHTML = " " + "cantidad: " + " " + cantidad3;

  let numeroParte = document.getElementById('numeroParte').value ;
  let showNumeroParte = document.getElementById('numeroParteOut');
  showNumeroParte.innerHTML = " " + "numeroParte: " + " " + numeroParte;

  let numeroParte2 = document.getElementById('numeroParte2').value ;
  let showNumeroParte2 = document.getElementById('numeroParte2Out');
  showNumeroParte2.innerHTML = " " + "numeroParte: " + " " + numeroParte2;

  let numeroParte3 = document.getElementById('numeroParte3').value ;
  let showNumeroParte3 = document.getElementById('numeroParte3Out');
  showNumeroParte3.innerHTML = " " + "numeroParte: " + " " + numeroParte3;

  let detalle = document.getElementById('detalle').value ;
  let showdetalle = document.getElementById('detalleOut');
  showdetalle.innerHTML = " " + "Detalle: " + " " + detalle;

  let detalle2 = document.getElementById('detalle2').value ;
  let showdetalle2 = document.getElementById('detalle2Out');
  showdetalle2.innerHTML = " " + "Detalle: " + " " + detalle2;

  let detalle3 = document.getElementById('detalle3').value ;
  let showdetalle3 = document.getElementById('detalle3Out');
  showdetalle3.innerHTML = " " + "Detalle: " + " " + detalle3;

  //tecnicos

  let fechaObra = document.getElementById('fechaObra').value ;
  let showFechaObra = document.getElementById('fechaObraOut');
  showFechaObra.innerHTML = " " + "fecha: " + " " + fechaObra;

  let nombreTecnico1 = document.getElementById('nombreTecnico1').value ;
  let shownombreTecnico1 = document.getElementById('nombreTecnico1Out');
  shownombreTecnico1.innerHTML = " " + "Nombre técnico: " + " " + nombreTecnico1;

  let horaLlegada = document.getElementById('horaLlegada').value ;
  let showhoraLlegada = document.getElementById('horaLlegadaOut');
  showhoraLlegada.innerHTML = " " + "Hora de LLegada: " + " " + horaLlegada;

  let horaSalida = document.getElementById('horaSalida').value ;
  let showhoraSalida = document.getElementById('horaSalidaOut');
  showhoraSalida.innerHTML = " " + "Hora de Salida: " + " " + horaSalida;

  let horasTotales = document.getElementById('horasTotales').value ;
  let showHorasTotales = document.getElementById('horasTotalesOut');
  showHorasTotales.innerHTML = " " + "Horas Totales: " + " " + horasTotales;

  //tecnico

  let nombreTecnico = document.getElementById('nombreTecnico').value ;
  let shownombreTecnico = document.getElementById('nombreTecnicoOut');
  shownombreTecnico.innerHTML = " " + "Nombre: " + " " + nombreTecnico;

  let telefonoTecnico = document.getElementById('telefonoTecnico').value ;
  let showtelefonoTecnico = document.getElementById('telefonoTecnicoOut');
  showtelefonoTecnico.innerHTML = " " + "Teléfono: " + " " + telefonoTecnico;
}

document.getElementById('fileInput').addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    var imageUrl = event.target.result;
    var imageContainer = document.getElementById('imageContainer');
    var imgElement = document.createElement('img');

    imgElement.src = imageUrl;
    imgElement.id = 'uploadedImage';

    // Clear previous image if exists
    while (imageContainer.firstChild) {
      imageContainer.removeChild(imageContainer.firstChild);
    }

    imageContainer.appendChild(imgElement);
  };

  reader.readAsDataURL(file);
});


function cambiarEstilo() {
  // Obtener el elemento div por su id
  var div = document.getElementById('container2');
  var div2 = document.getElementById('container');
  
  // Cambiar estilos del div
  div.style.display = 'block';
  div2.style.display = 'none'; 
}







