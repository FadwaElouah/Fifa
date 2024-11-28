let plus = document.querySelectorAll(".plus")
let formulaire = document.querySelector(".formulaire")
let format = document.getElementById('format')
let formation = document.querySelector('.formation')
let icon_pluss=document.getElementById('icon_pluss');
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
  if( formation.style.display === 'none'){
    formation.style.display = 'block'
  }
  else {
    formation.style.display = 'none'
  }
    
})


//  ==========Formulaire
let taskName = document.getElementById('taskName')
let taskNastionality = document.getElementById('taskNastionality')
let taskRating = document.getElementById('taskRating')
let taskPosition = document.getElementById('taskPosition')
let taskPace = document.getElementById('taskPace')
let taskShooting = document.getElementById('taskShooting')
let taskPassing = document.getElementById('taskPassing')
let taskDrib = document.getElementById('taskDrib')
let taskDefen = document.getElementById('taskDefen')
let taskPhysical = document.getElementById('taskPhysical')
let taskUrl = document.getElementById('taskUrl')
let taskUp = document.getElementById('taskUp')
let taskAjouter = document.getElementById('taskAjouter')
let taskModifier = document.getElementById('taskModifier')
let taskSupprimer = document.getElementById('taskSupprimer')
let gridOne = document.querySelectorAll('.grid-one')





taskAjouter.addEventListener('click',(e)=>{

    icon_pluss.addEventListener('click',function(){
            icon_pluss.classList.remove('fa-regular', 'fa-square-plus', 'plus');

           })
  
    e.preventDefault()
//  if(taskName.value != '' && taskNastionality .value != '' && taskRating.value != '' && taskFormation.value != '' && taskDrib.value != '' && taskShooting.value != '' && taskPassing.value != '' && taskDefen.value != '' && taskPhysical.value != '' && taskUrl.value != '' ){
    gridOne[0].innerHTML=`
    <div class="fut-player-card">

    <i class="fa-regular fa-square-plus plus"></i>
         <div class="player-card-top">
            <div class="player-master-info">
               <div class="player-rating">
                  <span>${taskRating.value}</span>
               </div>
               
               <div class="player-position">
                  <span>${taskPosition.value}</span>
               </div>
               <div class="player-nation">
                   <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/> 
               </div>
               <div class="player-club">
                  <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/>
               </div>
            </div>
            <div class="player-picture">
               <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
               <div class="player-extra">
                  <span></span>
                  <span></span>
               </div>
            </div>
         </div>
         <div class="player-card-bottom">
            <div class="player-info">
               <!-- Player Name-->
               <div class="player-name">
                  <span>${taskName.value}</span>
               </div>
               <!-- Player Features-->
               <div class="player-features">
                  <div class="player-features-col">
                     <span>
                        <div class="player-feature-value"></div>
                        <div class="player-feature-title"></div>
                     </span>
                     <span>
                        <div class="player-feature-value"></div>
                        <div class="player-feature-title"></div>
                     </span>
                     <span>
                        <div class="player-feature-value"></div>
                        <div class="player-feature-title"></div>
                     </span>
                  </div>
                  <div class="player-features-col">
                     <span>
                        <div class="player-feature-value"></div>
                        <div class="player-feature-title"></div>
                     </span>
                     <span>
                        <div class="player-feature-value"></div>
                        <div class="player-feature-title"></div>
                     </span>
                     <span>
                        <div class="player-feature-value"></div>
                        <div class="player-feature-title"></div>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
`
//  }


})

