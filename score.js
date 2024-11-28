let plus = document.querySelectorAll(".plus")
let formulaire = document.querySelector(".formulaire")
let format = document.getElementById('format')
let formation = document.querySelector('formation')

plus.forEach((item,index)=>{
    item.addEventListener('click',function(){
        if(index == 0){
            formulaire.style.display = 'block'
        
        }
        else if (index == 1){
            formulaire.style.display = 'block'
        }
        else if (index == 2){
            formulaire.style.display = 'block'
        }
        else if (index == 3){
            formulaire.style.display = 'block'
        }
        else if (index == 4){
            formulaire.style.display = 'block'
        }
        else if (index == 5){
            formulaire.style.display = 'block'
        }
        else if (index == 6){
            formulaire.style.display = 'block'
        }
        else if (index == 7){
            formulaire.style.display = 'block'
        }
        else if (index == 8){
            formulaire.style.display = 'block'
        }
        else if (index == 9){
            formulaire.style.display = 'block'
        }
        else if (index == 10){
            formulaire.style.display = 'block'
        }
        else if (index == 11){
            formulaire.style.display = 'block'
        }
    })
})

format.addEventListener('click',()=>{
 formation.style.display = 'block'

    
})

