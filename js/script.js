
(() => {
  //Asiganción de elementos para uso posterior
  const textoIngresado = document.getElementById('entrada');
  const btnEncriptar = document.getElementById('btn-encriptar');
  const btnDesencriptar = document.getElementById('btn-desencriptar');
  const btnCopiar = document.getElementById('btn-copiar');
  const btnLimpiar = document.getElementById('btn-limpiar');
  
  
  //patron de encriptacion
  // e - enter
  // o - ober
  // i - imes
  // a - ai
  // u - ufat
    
  let reemplazar = [
    ['e','enter'],
    ['o','ober'],
    ['i','imes'],
    ['a','ai'],
    ['u','ufat'],
  ];

  //Funcionalidad botón encriptar
  btnEncriptar.addEventListener('click',() => {
    //El texto ingresado estará en minúsculas    
    const texto = textoIngresado.value.toLowerCase();
  
    //Función encriptar
    function encriptar(entrada) {
      for(let i = 0; i < reemplazar.length; i++) {
        //Si el parámentro incluye algún elemento de la posición 0 se reeemplaza por el elemento de la posición 1 en cada iteración
        if (entrada.includes(reemplazar[i][0])) {
          entrada = entrada.replaceAll(reemplazar[i][0],reemplazar[i][1])
        }
      }
      return entrada;
    }
    //Se muestra el texto encriptado en el area correspondiente
    document.querySelector('#salida').textContent = encriptar(texto);
    //Se ejecuta función visuales
    visuales();
  });
  
  //Funcionalidad botón desencriptar
  btnDesencriptar.addEventListener('click',() => {
    //El texto ingresado estará en minúsculas    
    const texto = textoIngresado.value.toLowerCase();
  
    //Función desencriptar
    function desencriptar(entrada) {
      for(let i = 0; i < reemplazar.length; i++) {
        //Si el parámentro incluye algún elemento de la posición 1 se reeemplaza por el elemento de la posición 0 en cada iteración
        if (entrada.includes(reemplazar[i][1])) {
          entrada = entrada.replaceAll(reemplazar[i][1],reemplazar[i][0])
        }
      }
      return entrada;
    }
    //Se muestra el texto desencriptado en el area correspondiente    
    document.querySelector('#salida').textContent = desencriptar(texto);
    visuales();
  });
  
  //Funcionalidad botón copiar
  btnCopiar.addEventListener('click',() => {
    //Asignamos contenido de texto
    const texto = document.querySelector('#salida').textContent;
    //Usamos el portapapeles para almacenar el valor de texto
    navigator.clipboard.writeText(texto);
    //Mostramos mensaje que el texto fue copiado con éxito
    alert('Texto copiado con éxico');
    //Limpiamos contenido de texto
    document.querySelector('#salida').textContent = "";
    //Colocamos el cursor en el campo de ingresar texto
    textoIngresado.focus();
  });
  
  //Funcionalidad botón copiar
  btnLimpiar.addEventListener('click',() => {
    //Limpiamos contenido de texto
    document.querySelector('#salida').textContent = "";
    //Quitamos clase 'ocultar-bg' para mostrar elemento
    document.querySelector('#salida').classList.remove('ocultar-bg');
    //Ocultamos botón
    document.querySelector('#btn-copiar').style.display = "none";
    //Ocultamos botón
    document.querySelector('#btn-limpiar').style.display = "none";
  });
  
  //Función visuales
  const visuales = () => {
    //Agregamos clase 'ocultar-bg' para ocultar elemento
    document.querySelector('#salida').classList.add('ocultar-bg');
    //Limpiamos contenido de texto
    document.querySelector('#entrada').value = "";
    //Mostramos botón
    document.querySelector('#btn-copiar').style.display = "block";
    //Mostramos botón
    document.querySelector('#btn-limpiar').style.display = "block";
  }
})();

