/* Variables globales */ 
var VectorLanguageOne = [];
var VectorLanguageTwo = [];
var Entrada;
var Vacio = "#";

class Lenguaje{
    constructor (){

    }

    ExisteLenguaje(Vector,Dato){
        var Existe = false;
        for(var i = 0; i < Vector.length; i++){
            if(Vector[i] == Dato){
                Existe = true;
            }
        }
        return Existe;
    }

    agregarVectorLenguaje(Lenguaje, ID){
        if(ID == "ILU"){
            if(VectorLanguageOne.length == 0){
                VectorLanguageOne.push(Lenguaje);
                Swal.fire(
                    'Buen Trabajo!',
                    'Elemento agregado con exito!',
                    'success'
                )
            }else{
                if(this.ExisteLenguaje(VectorLanguageOne,Lenguaje)){
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El elemento ya ha sido añadido al vector'
                    })
                }else{
                    VectorLanguageOne.push(Lenguaje);
                    Swal.fire(
                        'Buen Trabajo!',
                        'Elemento agregado con exito!',
                        'success'
                    )        
                }
            }
            console.log(VectorLanguageOne);
        }else if(ID == 'ILT'){
            if(VectorLanguageTwo.length == 0){
                VectorLanguageTwo.push(Lenguaje);
                Swal.fire(
                    'Buen Trabajo!',
                    'Elemento agregado con exito!',
                    'success'
                )   
            }else{
                if(this.ExisteLenguaje(VectorLanguageTwo,Lenguaje)){
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El elemento ya ha sido añadido al vector'
                    })
                }else{
                    VectorLanguageTwo.push(Lenguaje);
                    Swal.fire(
                        'Buen Trabajo!',
                        'Elemento agregado con exito!',
                        'success'
                    )        
                }
            }
            console.log(VectorLanguageTwo);
        }
    }

    CapturarLenguaje(id){
        var Capturadora = document.getElementById(id).value;
        this.agregarVectorLenguaje(Capturadora, id);
    }
    
    Existe(Vector,ValorVector){
        var existe = false;
        for(var i=0; i < Vector.length;i++){
            if(Vector[i] == ValorVector){
                existe=true;
            }
        }
        return existe;
    }

    UnionLenguaje(){
        var Union = [];

        for(var i = 0; i < VectorLanguageOne.length; i++){
            if(VectorLanguageOne[i] != Vacio){
                Union.push(VectorLanguageOne[i]);
            }
        }

        for(var i = 0; i < VectorLanguageTwo.length; i++){
            if(!this.Existe(Union,VectorLanguageTwo[i])){
                if(VectorLanguageTwo[i] != Vacio){
                    Union.push(VectorLanguageTwo[i]);
                }
            }
        }
        document.getElementById("Mostrador").innerHTML = Union.toString();
        console.log(Union.toString());
    }
    
    InterseccionLenguaje(){
        var Interseccion = [];

        for(var i = 0; i < VectorLanguageOne.length; i++){
            for(var j = 0; j < VectorLanguageTwo.length; j++){
                if(VectorLanguageOne[i] == VectorLanguageTwo[j]){
                    if(VectorLanguageOne[i] != Vacio && VectorLanguageTwo[j] != Vacio){
                        Interseccion.push(VectorLanguageOne[i]);
                    }
                }
            }
        }

        if(Interseccion.length == 0){
            document.getElementById("Mostrador").innerHTML = "No hay interseccion";
            console.log("No hay interseccion");
        }else{
            console.log("Existe interseccion");
            document.getElementById("Mostrador").innerHTML = Interseccion.toString();
            console.log(Interseccion.toString());
        }
    }

    Diferencia(){
        var Diferencia = []
        for(var i=0; i < VectorLanguageOne.length;i++){
           if(this.Existe(VectorLanguageTwo,VectorLanguageOne[i])==false){
               if(VectorLanguageOne[i] != Vacio){
                    Diferencia.push(VectorLanguageOne[i]);
               }
           }
        }

        if(Diferencia.length == 0){
            document.getElementById("Mostrador").innerHTML = "No existe diferencia";
        }else{
            document.getElementById("Mostrador").innerHTML = Diferencia.toString();
        }
    }

    Concatenacion(){
        var Concatenacion = [];

        for(var i = 0; i < VectorLanguageOne.length; i++){
            for(var j = 0; j <VectorLanguageTwo.length; j++){
                if(VectorLanguageOne[i] != Vacio && VectorLanguageTwo[j] != Vacio){
                    Concatenacion.push(VectorLanguageOne[i] + "-" + VectorLanguageTwo[j]);
                }
            }
        }
        document.getElementById("Mostrador").innerHTML = Concatenacion.toString();
    }

    Potencia(exponente,Vector){
        var vectorBase = Vector;
        var vectorAux = Vector;
        var vectorConcatenacion = [];
        var vectorResul = [];

        if(exponente == 1){
            document.getElementById("Mostrador").innerHTML = vectorBase.toString();
        }
        else{
            for(var i = 0; i < exponente - 1; i++){
                for(var j = 0; j < vectorBase.length; j++){
                    for(var k = 0; k < vectorAux.length; k++){
                        if(vectorBase[j] != Vacio && vectorAux[k] != Vacio){
                            vectorConcatenacion.push(vectorBase[j] + vectorAux[k]);
                        }
                    }
                }

                vectorAux = this.llenarVectorAux(vectorConcatenacion);
                this.llenarVectorResult(vectorResul, vectorConcatenacion)
                vectorConcatenacion.length = 0;
            }
            document.getElementById("Mostrador").innerHTML = vectorResul.toString();
        }
    }

    llenarVectorResult(vectorResult, conca) {
        for (var i = 0; i < conca.length; i++) {
            vectorResult.push(conca[i]);
        }
    }

    llenarVectorAux(vectorConca){
        var vectorAux = [];
        for(var i = 0; i < vectorConca.length; i++){
            vectorAux.push(vectorConca[i]);
        }
        return vectorAux;
    }

    InversaLenguaje(Vector){
        var VectorInvertido = [];
        for(var i = 0 ; i < Vector.length; i++){
            var ValorIndice = Vector[i].length;
            var Caracter = " ";
            for(var j = ValorIndice; j >= 0; j--){
                if(Vector[i] != Vacio){
                    Caracter = Caracter + Vector[i].charAt(j);
                }
            }
            VectorInvertido.push(Caracter);
        }
        document.getElementById("Mostrador").innerHTML = VectorInvertido.toString();
        console.log(VectorInvertido.toString());
    }

    Cardinalidad(){
        document.getElementById("Mostrador").innerHTML = "Lenguaje Uno: " + VectorLanguageOne.length + " / " + "Lenguaje Dos: " + VectorLanguageTwo.length;
    }

    ObtenerDatoPotencia(Lenguaje){
        Swal.fire({
            title: 'Exponente para potencia de lenguaje',
            input: 'number',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            showLoaderOnConfirm: false,
        }).then((result) => {

            if(Lenguaje == "PLO"){
                this.Potencia(result.value,VectorLanguageOne);
            }else if(Lenguaje == "PLT"){
                this.Potencia(result.value,VectorLanguageTwo);
            }
        })
    }

    /* Palabra */

    capturarpalabra(){
        Entrada = document.getElementById("Palabra").value;

        Swal.fire(
            'Buen Trabajo!',
            'Palabra capturada con exito!',
            'success'
        )

        console.log(Entrada);
    }

    inversaPalabra(){
        var Tamanio = Entrada.length;
        var cadenaInvertida=" ";
        while (Tamanio >= 0) {
            cadenaInvertida = cadenaInvertida + Entrada.charAt(Tamanio);
            Tamanio--;
        }
        console.log(cadenaInvertida);
        document.getElementById("Mostrador").innerHTML= cadenaInvertida;
    }

    cardinalidadPalabra() {
        console.log(Entrada.length);
        document.getElementById("Mostrador").innerHTML= Entrada.length;
    }
}

var Instancia = new Lenguaje;

function Menu(idBotton){
    switch(idBotton){
        case idBotton = 'Union':{
            Instancia.UnionLenguaje();
            break;
        }
        case idBotton = 'Interseccion':{
            Instancia.InterseccionLenguaje();
            break;
        }
        case idBotton = 'Diferencia':{
            Instancia.Diferencia();
            break;
        }
        case idBotton = 'Concatenacion':{
            Instancia.Concatenacion();
            break;
        }
        case idBotton = 'PotenciaLenguajeUno':{
            Instancia.ObtenerDatoPotencia('PLO');
            break;
        }
        case idBotton = 'PotenciaLenguajeDos':{
            Instancia.ObtenerDatoPotencia('PLT');
            break;
        }
        case idBotton = 'InversaLenguajeUno':{
            Instancia.InversaLenguaje(VectorLanguageOne);
            break;
        }
        case idBotton = 'InversaLenguajeDos':{
            Instancia.InversaLenguaje(VectorLanguageTwo);
            break;
        }
        case idBotton = 'Cardinalidad':{
            Instancia.Cardinalidad();
            break;
        }
        case idBotton = 'PalabraAgg':{
            Instancia.capturarpalabra();
            break;
        }
        case idBotton = 'InversaPalabra':{
            Instancia.inversaPalabra();
            break;
        }
        case idBotton = 'CardinalidadPalabra':{
            Instancia.cardinalidadPalabra();
            break;
        }
    }
}

function AgregarLenguaje(id){
    Instancia.CapturarLenguaje(id);
}


