const contador = (precio,porcentaje) =>{
    let adicional = ((precio*porcentaje)/100)
    let pNuevo = precio+adicional
    console.log(pNuevo) 
}

contador(50,10)

