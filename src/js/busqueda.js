(function () {
    const busquedaTrabajador = document.getElementById('termino')
    const botonBusqueda = document.getElementById('buscar')
    const botonEliminar = document.querySelectorAll('.btn-eliminar')
    const formulario = document.querySelector('.formulario')
    const btnActivarModal = document.querySelector('.modal-click')
    
    botonBusqueda?.addEventListener('click', e => {
        const a = document.createElement('a')

        let ficha = busquedaTrabajador?.value

       if(ficha == ''){
        return alert('Debe ingresar una ficha para la busqueda')
       }

       if(ficha.length  < 6){
        return alert('La ficha debe contener 6 digitos')
       }

       a.href=`/admin/lista-empleados?mostrar=${ficha}`
       a.click()
    })


    botonEliminar?.forEach(boton => {
        boton.addEventListener('click', e => {
            const { empleadoFicha } = e.target.dataset
            console.log(empleadoFicha)
            formulario.action = `/admin/eliminar-trabajador/${empleadoFicha}`
            btnActivarModal.click()
        })
    })

})()