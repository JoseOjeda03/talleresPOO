var form = document.getElementById('form');
form.addEventListener("submit", submitHandler);

const mostrar=document.getElementById('modal');
const histotial=document.getElementById('histotial');
let html2 =""
const miStorage = window.localStorage;


class Persona {

    nombre
    apellido
    fecha
    cedula
    edad
 constructor(nombre,apellido,fecha,cedula,edad,imgcumple){
    this.nombre = nombre;
    this.apellido =apellido;
    this.cedula =cedula;
    this.fecha =fecha;
    this.edad = edad;
    this.imgcumple =imgcumple;
 }



 nombrecompleto() {
    let nomnreCompleto = ( this.nombre + " " + this.apellido  )
    return nomnreCompleto
 }
 cumpleanos(){
    const tiempoTranscurrido = Date.now();


 

//
const fechas = new Date();
const hoy = fechas.getDate();
const mesActual = fechas.getMonth() + 1; 
const anno=fechas.getFullYear();
const cumpledia =new Date(this.fecha)

alert()

alert(mesActual)
alert(hoy)
let result= false
   if (hoy == cumpledia.getDate()+1 && mesActual ==cumpledia.getMonth() + 1){
    result= true
   }
   else{
    result= false

    let fechahoy= cumpledia.getFullYear() +"-" +mesActual+"-" + hoy

if(cumpledia.getMonth() + 1>=9){
  const mesC = cumpledia.getMonth() + 1
}


    var fechaInicio = new Date(fechahoy).getTime();
  
    var fechaFin    = cumpledia.getTime();


    this.diasFaltan(fechaInicio,fechaFin)

   }
   
  return result
 }

 diasFaltan(fechahoy,fechaCumple){
   let resultado=0

   
   var diff =  fechaCumple-fechahoy;
   
 
        if(fechaCumple> fechahoy){
         resultado = diff/(1000*60*60*24) +1 ;

        }else{
         resultado = (diff/(1000*60*60*24))+365+1  ;
        }

        
        

  

  localStorage.setItem('disFaltan', parseInt(resultado ) );
}       
    



    


 }


function submitHandler(e) {
    const nombreI = document.getElementById('texto').value;
    const apellidoI = document.getElementById('apellido').value;
    const fechaI = document.getElementById('date').value;
    const cedulaI = document.getElementById('cedula').value;

    
    alert(nombreI);
    e.preventDefault();
    let personaF= new Persona( nombreI,apellidoI,fechaI,cedulaI);
    let nombreCompleto =personaF.nombrecompleto();
      let bool= personaF.cumpleanos()

    if(bool){
        personaF.imgcumple="img/feliz.gif"
        alert("es hoyy")
        const html =` 
        <div class="flex flex-col w-48 w-48">
    
        <label for="">su nombre es :</label>
        <p class="">${nombreCompleto}  </p>
        <label for="">su fecha de cumpleaños es:</label>
        <p class="">${personaF.fecha} </p>
        <p class=""> es tu cumpleaños</p>
        <img src="img/feliz.gif" alt="">
    
     </div>
        
        `


        html2 = ` <tr>

        <td>${nombreCompleto}</td>
    
        <td>SI</td>
    
     
    
      </tr>`
        mostrar.innerHTML=html   
        histotial.innerHTML+=html2
        localStorage.setItem('nombrecompleto', nombreCompleto );
        localStorage.setItem('fecha', personaF.fecha );
        localStorage.setItem('img', personaF.imgcumple );
        localStorage.setItem('bool', bool );
    }
    else{


        personaF.imgcumple="img/sad.gif"
        const html =` 
        <div class="flex flex-col w-64 w-64">
    
    
        <label for="">su nombre es :</label>
        <p class="">${nombreCompleto}  </p>
        <label for="">su fecha de cumpleaños es:</label>
        <p class="">${personaF.fecha} </p>
        <p class="">no es tu cumpleaños</p>
        <img src="img/sad.gif" alt="">
    
     </div>
        
        `

        html2 = ` <tr>

        <td>${nombreCompleto}</td>
    
        <td>NO</td>
    
     
    
      </tr>`
        histotial.innerHTML+=html2
        mostrar.innerHTML=html 
        localStorage.setItem('nombrecompleto', nombreCompleto );
        localStorage.setItem('fecha', personaF.fecha );
        localStorage.setItem('img', personaF.imgcumple );
        localStorage.setItem('bool', bool );
    }
   
    
  }






