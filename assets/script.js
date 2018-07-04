var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener("change", trocaEfeito);

function trocaEfeito(){
  var efeito = dropMenu.value;
  var pegaFoto = document.querySelectorAll(".thumbs-item");
  for (foto in pegaFoto){
	  if (efeito == "sepia"){
	  	pegaFoto[foto].classList.add("sepia");
	  	}
	  if (efeito == "grayscale"){
	  	pegaFoto[foto].classList.add("grayscale");
	  }
  	  if (efeito == "invert"){
	  	pegaFoto[foto].classList.add("invert");
	  } 
	  if (efeito == "") {
	  	pegaFoto[foto].classList.add("no-filter");	  	
	  }
  }
}
