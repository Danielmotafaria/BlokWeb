

 // dit is voor de uitklapmenu
var div = document.querySelector("#Profile")
 
 div.addEventListener("click", VeranderTerug);

function VeranderTerug(){
  
    let div = document.querySelector("#uitklapmenu");
  
   div.classList.toggle("anders");
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
colc.append( items )
colc.prepend( items )
colc.destroy()

