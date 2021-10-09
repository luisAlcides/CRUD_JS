const aplicacion = new function() {
    this.nombre= document.getElementById('nombre');
    this.correo= document.getElementById('correo');
    this.empleados = document.getElementById('empleados');
    this.leer = function(){
        const datos='<tr><td>1</td><td>Juan</td><td>jua@gmail.com</td><td>Editar | Borrar</td></tr>';

        return this.empleados.innerHTML=datos;
    }
    this.agregar = function(){
        console.log(nombre.value);
        console.log(correo.value);

    }

}

aplicacion.leer();