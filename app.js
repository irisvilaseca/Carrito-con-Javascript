const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
})

//La palabra “async” ante una función significa que la función siempre devolverá una promesa. 
const fetchData = async () =>{
    //Prueba una función y si no se puede realizar, imprime el error que se ha producido
    try {
        //Javascript espera con la palabra "await" a obtener la respuesta a la promesa
        const res = await fetch ('api.json')
        const data = await res.json()
        showCards(data)
        //El "catch" atrapa los errores en el bloque del "try"
    } catch (error) {
        console.log(error)
    }
}
const showCards = data => {
    //Por cada objeto de data separa los "producto"
    data.forEach(producto=>{
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        //Copia todos los elementos hijos del componente templateCard
        const clone = templateCard.cloneNode(true)
        //Añade un elemento hijo
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}