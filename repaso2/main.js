const nombre=document.getElementById('nombre')
const apellido=document.getElementById('apellido')
const edad =document.getElementById('edad')
const tbodys =document.getElementById('tbodys')

var botton = document.getElementById('botton');
botton.addEventListener('click',creear)




function creear(){
    let html=""
    console.log("holas")
     html+= ` 
<tr>
<td> ${nombre.value}</td>
<td> ${apellido.value}</td>
<td> ${edad.value}</td>
</tr>

` 


tbodys.innerHTML =html

}



