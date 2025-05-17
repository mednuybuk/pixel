let CURRENT_COLOR = 'red'
let DEFAULT_COLOR = 'rgb(255, 255, 255)'
let FILL_MODE = false

let field = document.querySelector ('.field')
 for (let i = 0; i< 450; i += 1) {
    let cell = document.createElement('div')
   
   
    cell.classList.add('cell')
    cell.setAttribute('id',`${i}` )
    field.appendChild(cell)
 }
let IS_CLICKED = false 
document.addEventListener('mousedown',function(){ 
   IS_CLICKED=true }) 
document.addEventListener('mouseup',function(){ 
   IS_CLICKED=false })

let cells = document.querySelectorAll('.cell') 
cells.forEach(cell =>{
  cell.addEventListener('mouseover', function(){ 
   if (IS_CLICKED) {
   cell.style.backgroundColor= CURRENT_COLOR
   }
  })
   
   cell.addEventListener('mousedown', function(){
      if (FILL_MODE) {
         cells.forEach(cell =>{
            cell.style.backgroundColor = CURRENT_COLOR
         })
      } else{

      
      cell.style.backgroundColor= CURRENT_COLOR}
   })

  
}) 


let pink = document.querySelector(".pink")
pink.addEventListener('click', function(){
   CURRENT_COLOR = 'palevioletred'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   pink.classList.add('selected')


})
let blue = document.querySelector(".blue")
blue.addEventListener('click', function(){
   CURRENT_COLOR = 'blue'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   blue.classList.add('selected')

})
let yeloww = document.querySelector(".yeloww")
yeloww.addEventListener('click', function(){
   CURRENT_COLOR = 'yellow'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   yeloww.classList.add('selected')


})
let purple = document.querySelector(".purple")
purple.addEventListener('click', function(){
   CURRENT_COLOR = 'blueviolet'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   purple.classList.add('selected')


})
   let red = document.querySelector(".red")
red.addEventListener('click', function(){
   CURRENT_COLOR = 'red'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   red.classList.add('selected')



})
document.querySelector('.fill').addEventListener("click", function(){
   FILL_MODE = !FILL_MODE
})
 let start_btn = document.querySelector(".start")
 let cover = document.querySelector(".cover")
 let field_cont = document.querySelector(".field-container")
 start_btn.addEventListener("click", function(){
    cover.style.display= "none"
    field_cont.style.display = 'flex'

 })
