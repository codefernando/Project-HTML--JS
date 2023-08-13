


function loading() {
  document.querySelector("body").setAttribute("class", "CorFundo")
}
////////////////////////////////////////////////////
const p = document.querySelector("#text")

function Title(elemento) {
  const textoArray = elemento.innerHTML.split("")
  elemento.innerHTML = ""
    textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i);
  })
}

Title(p)

////////////////////////////////////////////////////

const CardAnimacao = document.querySelector(".container")


CardAnimacao.addEventListener("mousemove", cardEfeito);
CardAnimacao.addEventListener("mouseleave", cardBack );
CardAnimacao.addEventListener("mouseenter", cardEnter);


function cardEfeito(evt){
    const cardWidth = CardAnimacao.offsetWidth;
    const cardHeight = CardAnimacao.offsetHeight;
    const centerX = CardAnimacao.offsetLeft + cardWidth / 2; 
    const centerY = CardAnimacao.offsetTop + cardHeight / 2;
    const positionX = evt.clientX - centerX;
    const positionY = evt.clientY - centerY;

    const rotateX = ((+1)* 25 * positionY / (cardHeight / 2)).toFixed(2);
    const rotateY = ((-1)* 25 * positionX / (cardWidth / 2)).toFixed(2);
     

    CardAnimacao.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function cardBack(evt){
  CardAnimacao.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
   cardTransition(); 

}
function cardTransition(){
  clearInterval(CardAnimacao.transitionid);
  CardAnimacao.style.transition = 'transform 800ms';
  CardAnimacao.transitionid = setTimeout(()=>{
    CardAnimacao.style.transition='';
  }, 400)
}

function cardEnter (evt){
  cardTransition()
}
