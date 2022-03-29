import React, { useState } from 'react';
import{ portfolioData} from '../../data/portfolioData';
import Project from './Project';

const ProjectList = () => {

const[projects, setProjects] = useState(portfolioData);
const[radio, setRadio] = useState([

    {id:'1', language:'javascript'},
    {id:'2', language:'react'},
    {id:'3', language:'node.js'},
    {id:'4', language:'css'},
    ]
)
const[selectedRadio, setSelectedRadio] = useState('javascript');

const handleRadio = (e) => {
    setSelectedRadio(e.target.value)
}

    return (
        <div className='portfolioContent'>
            <ul className='radioDisplay'>
                {
                    radio.map(radio =>
                        <li key={radio.id}>
                            <input
                                id={radio.id}
                                type='radio'
                                name='radio'
                                value={radio.language}
                                checked={radio.language === selectedRadio}
                                onChange = {handleRadio}
                             />
                            <label htmlFor={radio.language}>{radio.language}</label>
                        </li>
                )}
            </ul>
           <div className='projects'>
               {
                   projects
                   .filter(project => project.languages.includes(selectedRadio))
                   .map(item => {
                       return (
                           <Project item={item} key={item.id} />
                       )
                   })
               }
           </div>
        </div>
    );
};

export default ProjectList;