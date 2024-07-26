import '../components/styles/pages.css';
import urchin from '../components/assets/urchin.png';

export default function AboutPage() {
    return (
        <div className='card'>
            <div>
            <img src={urchin} alt='me' className='urchin'></img>
            </div>
         <h2>About Me</h2>
         <p>
            Paula 'Fel' Gonzalez is a student fresh out of the EdX Web Development Bootcamp. With no future educational endeavours in mind, there is nothing holding her back from working immediately. With the bootcamp's help, Fel is adept at working in a group/team setting, even with those she has not worked with before. If there's an overall goal in mind, 
         </p>
        </div>
    );
}