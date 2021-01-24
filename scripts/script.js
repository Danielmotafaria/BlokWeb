

 // dit is voor de uitklapmenu
var div = document.querySelector("#Profile")
 
 div.addEventListener("click", VeranderTerug);

function VeranderTerug(){
  
    let div = document.querySelector("#uitklapmenu");
  
   div.classList.toggle("anders");
}


//zodat de like werkt op elke button, niet alleen de eerste
var buttonArray = document.querySelectorAll("#Like")
buttonArray.forEach(button => {
  button.addEventListener("click", Changeback);
})//en dan de functie Changeback definiëren
function Changeback(event) {
  event.target.classList.toggle("skrt");
}


 // dit is voor het masonry grid
var grid = document.querySelector('.grid');
var colc = new Colcade( grid, {
  columns: '.grid-col',
  items: '.grid-item'
});

 // selector string as first argument
var colc = new Colcade( '.grid', {
  columns: '.grid-col',
  items: '.grid-item'
});

colc.append( items );
colc.prepend( items );
colc.destroy();

