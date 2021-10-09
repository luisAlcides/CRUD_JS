const aplicacion = new function() {
    this.empleados = document.getElementById('empleados');
    this.leer = function(){
        const datos='<tr><td>1</td><td>Juan</td><td>jua@gmail.com</td><td>Editar | Borrar</td></tr>';

        return this.empleados.innerHTML=datos;
    }

}

aplicacion.leer();