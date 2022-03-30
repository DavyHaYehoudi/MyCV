import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Languages = () => {

    const[languages, setLanguages]=useState([
        {id:1, value:"Javascript", xp:2},
        {id:2, value:"HTML/CSS", xp:2},
        {id:3, value:"Node.js", xp:1},
        {id:4, value:"SQL/NoSql", xp:0.4},
    ])

    const[frameworks, setFrameworks]=useState([
        {id:1, value: "React-Redux", xp:1.5},
        {id:2, value: "Sass", xp:1},
        {id:3, value: "Vue", xp:.3},
        {id:4, value: "Bootstrap", xp:0.5},
    ])

    return (
        <div className='languagesFrameworks'>
            <ProgressBar
             languages={languages}
             className="languagesDisplay"
             title="languages"
            />
            <ProgressBar
             languages={frameworks}
             className="frameworksDisplay"
             title="frameworks & bibliothèques"
            />
            
        </div>
    );
};

export default Languages;