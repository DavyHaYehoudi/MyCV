import React, { useState } from 'react';

const Project = ({item}) => {

const[showInfo, setShowInfo]=useState(false);

const handleInfo = () => {
    setShowInfo(!showInfo)
}

    return (
        <div className='project'>
            <div className='icons'>
                {(item.languagesIcons).map(icon => 
                        <i className={icon} key={icon} ></i>
                    )
                }
            </div>
            <h3>{item.name}</h3>
            <img src={item.picture} alt={item.picture} onClick={handleInfo}/>
            <span className='infos' onClick={handleInfo}>
                <i className='fas fa-plus-circle'></i>
            </span>

            {
                showInfo && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <div className='head'>
                                <h2>{item.name}</h2>
                                <div className='sourceCode'>
                                    <a href={item.source} rel='noopener noreferrer' className='button' target='_blank'>Source</a>
                                </div>
                            </div>
                            <p className='text'>{item.info}</p>

                            <div className='button return' onClick={handleInfo}>Back</div>

                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Project;