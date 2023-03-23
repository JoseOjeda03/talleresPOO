const container = document.getElementById('container');
let nombreCompleto = localStorage.getItem('nombrecompleto');
let fecha = localStorage.getItem('fecha');
let img = localStorage.getItem('img');
let bool = localStorage.getItem('bool');
let  disFaltan = localStorage.getItem('disFaltan');
console.log(nombreCompleto)
 
if(bool == "true"){
    const html=`<div class=" grid justify-items-center  text-1xl  >
<label for="">su nombre es :</label>
<p class="">${nombreCompleto}  </p>
<label for="">su nombre es :</label>

<p class="">${fecha} </p>
<p class=""> es tu cumpleaños</p>
<img src="${img}" alt="">

</div>
</div>`

container.innerHTML=html  

}
else{
    const html=`<div class="  "  text-2xl">
<label for="">su nombre es :</label>
<p class="">${nombreCompleto}  </p>
<label for=""> su fecha de cumple años es :</label>

<p class="">${fecha} </p>
<p class="">no es tu cumpleaños</p>
<img src="${img}" alt="">
<label for=""> los dias que le hacen falta para su cumpleaños son:</label>
<p class="">${disFaltan} </p>
</div>
</div>`

container.innerHTML=html  
}
  