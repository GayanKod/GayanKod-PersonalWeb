import React, { useState } from 'react'
import './Uniwerr.scss';

const Uniwerr = () => {
    const [progress, setProgress] = useState(25);

    const updateProgressBar = () => {
        switch (progress) {
            case 25:
                return 'Initiating';
            case 50:
                return 'In Progress';
            case 75:
                return 'Testing';
            case 100:
                return 'Completed';
            default:
                return 'Initiating';
        }
    };

    return (
        <div className='container-uniwerr'>
            <div className="container dark-mode">
                <h1 className="project-name">Uniwerr</h1>
                <div className="progress-bar">
                    <div
                        className="progress-bar-inner"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="progress-bar-text">{updateProgressBar()}</div>
                    </div>
                </div>
                <div className="updates">
                    <p>Update 6: Created a Discord Server as the project team's official communication channel</p>
                    <p>Update 5: Recruited around 10 technical personalities for the team</p>
                    <p>Update 4: Created a Clikcup Space and it is being maintaining by project managers</p>
                    <p>Update 3: Recruited 02 beginner level trainee project managers</p>
                    <p>
                        Update 2: Chose Click Up as the Project Management tool for the project.
                    </p>
                    <p>
                        Update 1: Recruiting Talents & Skills for the project is in progress...
                    </p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                    <p>ㅤ</p>
                </div>
            </div>
        </div>
    )


};

export default Uniwerr;
