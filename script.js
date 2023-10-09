let api_key = "7317d26b220ac1bfd27600374ee2f8f7";
let difKelvin = 273.15;
let urlBase = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    DatosClima(ciudad);
  }
});

function DatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = " ";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temparaturainfo = document.createElement("p");
  temparaturainfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}ºC`;
  
  const humedadinfo = document.createElement("p");
  humedadinfo.textContent = `La humedad es: ${humedad}%`;

  const iconoInfo =document.createElement('img')
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temparaturainfo);
  divDatosClima.appendChild(humedadinfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
