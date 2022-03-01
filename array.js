nombres=["Jorge", "Mateo", "Sofia", "Mariana", "Gabriela","Nicolas", "Jacobo", "Juana","Tomas","Jd","Daniela","Dani C","Sergio","Anita","Jose",",Francisco","Samuel"]
edades= []
let suma= 0
for(let i= 0; i<17;i++){
    do{
        edad=Number(prompt("Ingrese la edad de:  " + nombres[i]))
    }while(isNaN(edad) || edad<10|| edad>17 || edad%1 !=0)
    edades.push(edad)
}
for(let i=0; i<17; i++){
    suma=suma +edades[i];
}
promedio= suma/17
let contenedor =  document.querySelector("#contenedor")
    contenedor.innerHTML = "El promedio de las edades es: " + promedio;