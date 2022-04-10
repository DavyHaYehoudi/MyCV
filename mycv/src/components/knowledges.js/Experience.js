import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expérience</h3>
            <div className='exp-1'>
                <h4>National Police -France</h4>
                <h5>2002-2016</h5>
                <p>Police officer for 14 years in France. I experimented the ground on the public highway as much the night as the day, the legal investigations with recording of the fingerprints, the system of the correctional courts. I practiced in the suburbs of Paris as well as in inner Paris and Marseille. I learned self-control, adaptability, teamwork, discipline and rigor.</p>
            </div>
            <div className='exp-2'>
                <h4>Web Developer -Israel</h4>
                <h5>2002-2016</h5>
                <p>In February 2021, I started from zero in learning programming.  I followed two training courses recognized by the State, one with <a href='./media/diplomeOCR.pdf' rel='noopener noreferrer' className='button' target='_blank' style={{textDecoration:"underline", color:"#ddd"}}>Openclassrooms</a> (France) and the other with Developers Institute in Israel (Tel Aviv) from which I graduated. I entered the working world in January 2022 with a job at Alon Active Exploration as a full-stack web developer.</p>
            </div>
        </div>
    );
};

export default Experience;
