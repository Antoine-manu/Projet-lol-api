import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import {useParams } from 'react-router-dom';
import Skins from './components/skins';
import Caroussel from './components/carousel';

function LonelyChar(){

    const [character, setPersons] = React.useState([]);
    
    const {name} = useParams();
    console.log(name);
    React.useEffect(() => {
        axios.get("http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion/"+name+".json")
        .then(res => {
          const character = res.data;
          
          // variable locale à ne pas confondre avec le state persons
          let personsArray = [];
          for(const item in character.data) {
            personsArray.push(character.data[item]);
          }

          console.log(personsArray);
          
          // tu mets ton nouveau tableau dans ton state
          setPersons(personsArray);
        })
    }, []);
    
    return( character.map(persons => 
        
        <div>
            {console.log(persons.skins[1].num)}
            {persons.tags}
            <img src={"http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/"+ persons.image.full}  alt="" />

              <div className="skins">
                <Caroussel>
                  <Skins name={persons.skins} id={name}/>
                </Caroussel>
              </div>
          </div>) );
}

export default LonelyChar;