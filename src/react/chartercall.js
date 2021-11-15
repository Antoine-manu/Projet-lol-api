import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function PersonList() {
    const [persons, setPersons] = React.useState([]);
    React.useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json`)
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
    
    return (
        persons.map(persons => 
          <div className="cardchar">
          <div className="cardborder">
            </div>{persons.id}
                <img src={"http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/"+ persons.image.full}  alt="" />
                <Link to={`/charactere/${persons.id}?name=${persons.id}`} className="cardbutton">En savoir plus</Link>
            </div>)
    )
}

export default PersonList;
