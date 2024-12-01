let plus = document.querySelectorAll(".plus")
let formulaire = document.querySelector("#formulaire")
let format = document.getElementById('format')
let formation = document.querySelector('.formation')
let close = document.getElementById('close')

const CBGauche = document.getElementById("CB-gouch");
const CBDroite = document.getElementById("CB-droit");

plus.forEach(item => {
   item.addEventListener('click', () => {
       formulaire.style.display = 'block';
   });
});


format.addEventListener('click',()=>{
  if( formation.style.display === 'none'){
    formation.style.display = 'block'
  }
  else {
    formation.style.display = 'none'
  }
    
})

close.addEventListener('click',()=>{
   formulaire.style.display='none';
})

//  ==========Formulaire
let taskName = document.getElementById('taskName')
let taskNastionality = document.getElementById('taskNastionality') 
let taskClub = document.getElementById('taskClub')
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
let selectedPlayerCard = null;


formulaire.addEventListener('submit',(e)=>{

    e.preventDefault();
    if(taskName .value != '' && taskNastionality.value != '' && taskRating.value != '' && taskPosition.value != '' && taskPace.value != '' && taskShooting.value != '' && taskPassing.value != '' && taskDrib.value != '' && taskDefen.value != '' && taskPhysical.value != '' && taskUrl.value != '' && taskClub.value != ''){
      gridOne[0].innerHTML =`
       
         <div class="fut-player-card" id="ST-gouch">
  
           <i class="fa-regular fa-square-plus plus" id="plus_icon" ></i>
            <div class="player-card-top">
              <div class="player-master-info">
              <div class="player-rating">
                 <span>${taskRating.value}</span>
              </div> 
              
              <div class="player-position">
                 <span>${taskPosition.value}</span>
              </div>
              <div class="player-nation">
                   <img src="${taskNastionality.value}" alt="Nationalité" draggable="false"/>
              </div>
              <div class="player-club">
                 <img src="${taskClub.value}" alt="club" draggable="false"/>
              </div>
           </div>
           <div class="player-picture">
               <img src="${taskUrl.value}" alt="Image du joueur" draggable="false"/>
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
                       <div class="player-feature-value">${taskPace.value}</div>
                       <div class="player-feature-title">PAC</div>
                    </span>
                    <span>
                       <div class="player-feature-value">${taskShooting.value}</div>
                       <div class="player-feature-title">SHO</div>
                    </span>
                    <span>
                       <div class="player-feature-value">${taskPassing.value}</div>
                       <div class="player-feature-title">PAS</div>
                    </span>
                 </div>
                 <div class="player-features-col">
                    <span>
                       <div class="player-feature-value">${taskDrib.value}</div>
                       <div class="player-feature-title">DRI</div>
                    </span>
                    <span>
                       <div class="player-feature-value">${taskDefen.value}</div>
                       <div class="player-feature-title">DEF</div>
                    </span>
                    <span>
                       <div class="player-feature-value">${taskPhysical.value}</div>
                       <div class="player-feature-title">PHY</div>
                    </span>
                 </div>
              </div>
           </div>
        </div>
      </div>

`
let plus = document.querySelector('.plus');

plus.style.display = 'none';

formulaire.style.display = 'none'

   taskRating.value = '';
   taskPosition.value = '';
   taskNastionality.value = '';
   taskUrl.value = '';
   taskName.value = '';
   taskPace.value = '';
   taskShooting.value = '';
   taskDrib.value = '';
   taskDefen.value = '';
   taskPhysical.value = '';
   taskPassing.value = '';
   taskClub.value = '';
   

}
else {
   alert("input error")
 }

  

}
);


  

let formationThree = document.getElementById('formation-three')
let formationTwo = document.getElementById('formation-two')
let cardCard = document.querySelector('.card-card')
let sectionCard = document.querySelector('.section-cards')


formationThree.addEventListener('click',()=>{
   sectionCard .style.visibility='hidden';
   cardCard.style.display='block'
})
formationTwo.addEventListener('click',()=>{
    cardCard .style.display='none';
    sectionCard.style.visibility='visible'
})



// ==============Edit
function editPlayer(button) {

  selectedPlayerCard = button.closest('.fut-player-card');

  taskName.value = selectedPlayerCard.querySelector('.player-name span').textContent;
  taskNastionality.value = selectedPlayerCard.querySelector('.player-nation img').src;
  taskClub.value = selectedPlayerCard.querySelector('.player-club img').src;
  taskRating.value = selectedPlayerCard.querySelector('.player-rating span').textContent;
  taskPosition.value = selectedPlayerCard.querySelector('.player-position span').textContent;
  taskPace.value = selectedPlayerCard.querySelector('.player-feature-value:nth-child(1)').textContent;
  taskShooting.value = selectedPlayerCard.querySelector('.player-feature-value:nth-child(2)').textContent;
  taskPassing.value = selectedPlayerCard.querySelector('.player-feature-value:nth-child(3)').textContent;
  taskDrib.value = selectedPlayerCard.querySelector('.player-feature-value:nth-child(4)').textContent;
  taskDefen.value = selectedPlayerCard.querySelector('.player-feature-value:nth-child(5)').textContent;
  taskPhysical.value = selectedPlayerCard.querySelector('.player-feature-value:nth-child(6)').textContent;
  taskUrl.value = selectedPlayerCard.querySelector('.player-picture img').src;
}



// =======Delete

function deletePlayer(button) {
  let cardToDelete = button.closest('.fut-player-card');
  cardToDelete.remove();
}  
