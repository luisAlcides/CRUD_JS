const url ="http://localhost/CRUD_JS/";
const modal = new bootstrap.Modal(document.getElementById("modelId"),{keyboard:false});

const aplicacion = new function() {
    this.idEditar= document.getElementById('idEditar');
    this.nombreEditar= document.getElementById('nombreEditar');
    this.correoEditar= document.getElementById('correoEditar');

    this.nombre= document.getElementById('nombre');
    this.correo= document.getElementById('correo');
    this.empleados = document.getElementById('empleados');

    this.leer = function(){
        //const datos='<tr><td>1</td><td>Juan</td><td>jua@gmail.com</td><td>Editar | Borrar</td></tr>';
        let datos;
        fetch(url)
        .then(r=>r.json())
        .then((respuesta) => {
            console.log(respuesta);
            respuesta.map(
                function(empleado, index, array) {
                    datos += "<tr>"
                    datos += "<td>"+empleado.id+"</td>"
                    datos += "<td>"+empleado.nombre+"</td>"
                    datos += "<td>"+empleado.correo+"</td>"
                    datos += '<td><div class="btn-group" role="group" aria-label=""><button type="button" class="btn btn-info" onclick="aplicacion.editar('+empleado.id+')">Editar</button><button type="button" class="btn btn-danger" onclick="aplicacion.borrar('+empleado.id+')">Eliminar</button></div></td>'
                    datos += "</tr>"
                }
            );
        return this.empleados.innerHTML=datos;

        })
        .catch(console.log);

    }
    this.agregar = function(){
        console.log(nombre.value);
        console.log(correo.value);

        let datosEnviar= {nombre:this.nombre.value, correo:this.correo.value}
        fetch(url+"?insertar=1",{method:"POST", body:JSON.stringify(datosEnviar)})
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            console.log("Datos insertados");
            this.leer();
        })
        .catch(console.log);

    };

    this.borrar = function(id){

        fetch(url+"?borrar="+id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            this.leer();
        })
        .catch(console.log);    
    };

    this.editar = function(id){
        console.log(id);
        
        fetch(url+"?consultar="+id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            this.idEditar.value=datosRespuesta[0]['id'];
            this.nombreEditar.value=datosRespuesta[0]['nombre'];
            this.correoEditar.value=datosRespuesta[0]['correo'];
        })
        .catch(console.log);
        
        modal.show();
    };

    this.actualizar = function(){
        let datosEnviar = {id:this.idEditar.value, nombre:this.nombreEditar.value, correo:this.correoEditar.value};

        fetch(url+"?actualizar=1", {method:"POST", body:JSON.stringify(datosEnviar)})
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            console.log("Datos Actualizados")
            this.leer();
            modal.hide();
        })
        .catch(console.log); 
    }
}

aplicacion.leer();