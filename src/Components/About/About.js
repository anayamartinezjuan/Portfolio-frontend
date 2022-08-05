import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './About.css'

function About(){
    const [information, setInformation] = useState({});
    useEffect(() => {
        // axios.get('http://localhost:8080/about')
        axios.get('https://backend-porfolio-juan.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
        )}, [setInformation])
    
    return(
        <div className='About'>
            <div className='div-foto'>
                <img className='foto-perfil' alt='FotoPerfil' src={information.foto}></img>
            </div>
            <div className='Descripcion'>
                <h1>{information.nombre}</h1>
                <h2>{information.profesión}</h2>
                <p>{information.about_me}</p>
                <ul className='skills'>
                    {information.habilidades && information.habilidades.map((habilidad, index) => 
                        <p className='habilidad' key={index}>{habilidad}</p> 
                        
                    )}
                </ul>
            </div>
        </div>
    )
}; 

export default About;