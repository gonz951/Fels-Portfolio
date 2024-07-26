import '../components/styles/pages.css';

export default function ResumePage() {
    return (
        <div className='card'>
         <h2>Resume</h2>
         <p>
            A resume is available to be <a href='https://drive.google.com/uc?export=download&id=15-nzN9JM-fUKOfS3lDthf8wrgKheAYm1'>downloaded</a> if needed. However, a brief list of skills might give you a good idea of what's in there.
        </p>
        <p>
            <h3>Front-End Skills:</h3>
            <ul className='skills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Mobile Responsive design</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
            <h3>Back-End Skills:</h3>
            <ul className='skills'>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>GraphQL</li>
            </ul>
        </p>
        </div>
    );
}