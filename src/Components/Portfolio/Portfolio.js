import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css'

function Portfolio(){
    const [projects, setProjects] = useState({});
    useEffect(() => {
        // axios.get('http://localhost:8080/portfolio')
        axios.get('https://backend-porfolio-juan.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
    )}, [setProjects])
    return(
        <>
            <div className='mega-card-portfolio'>
                { projects.length > 0 && projects.map((project, index) => 
                   
                   <div className='individual-card' key={index}>
                       <h1>{project.nombre}</h1>
                       <img className='imagen-proyecto' alt='imagen-proyecto' src={project.imagen}></img> 
                       <p>{project.descripcion}</p>
                       <a className='boton-visitar' href={project.link}>visit project</a>
                   </div> 
                )}
            </div>
            
        </>
    )
}; 

export default Portfolio;