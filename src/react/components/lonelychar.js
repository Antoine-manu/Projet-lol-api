import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import {useParams } from 'react-router-dom';


function LonelyChar(){

    const [persons, setPersons] = React.useState([]);
    
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


    return( persons.map(persons => 
        <div>
            {persons.tags}
            <img src={"http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/"+ persons.image.full}  alt="" />
          </div>) );
}

export default LonelyChar;