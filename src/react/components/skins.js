import React from 'react';


function Skins({name, id}){

console.log(id)

console.log(name[0]);

const namearray =  name;

console.log(namearray);


return(
   
    namearray.map(namechar =>
        <div class="carousel-item">
            <img class="d-block w-100" src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+id+'_'+namechar.num+'.jpg' }></img>
        </div>
        
    )
       );
}

export default Skins;