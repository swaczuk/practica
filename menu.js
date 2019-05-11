// inicializar una variable para guardar el contenedor del menu
var papaGarron

// creamos una lista de objetos donde cada uno representa un elemento de nuestro menu
var menuData = [
  // cada elemento tiene las propiedades que un item del menu deberia tener
  {label:'home', href:'/home.html', style:'' },
  {label:'songs', href:'/songs.html', style:'' },
  {label:'fans', href:'/songs.html', style:'' },
  {label:'press', href:'/songs.html', style:'' },
  {label:'albums', href:'/albums.html', style:'' }
]

var createItem = function(item){
  // creo un elemento <a> al que le voy a sumar las propiedades
  var menuItem = document.createElement('a')
  menuItem.innerText = item.label;
  menuItem.href = item.href;
  menuItem.classList.add('menu-item')

  var li = document.createElement('li')
  li.appendChild(menuItem)

  papaGarron.appendChild(li);
  console.log(li)
}

var populateMenu = function(){
  // encontramos el elmento en el DOM que va a contener nuestros items del menu
  // getElementsByClassName devuelve una lista asi que extraemos el elemento que nos intresa por su indice"[0]"
  papaGarron = document.getElementsByClassName('sarasa')[0]
  // .map() recorre el Array y recibe como parametro una función (createItem()) y se va a ejecutar por cada elemento del array
  menuData.map(function(item){createItem(item)})
}