import '../components/styles/pages.css';
import StartLine from '../components/assets/Start-Line.png'
import PennyPacker from '../components/assets/PennyPacker.png'
// Make rig builder pro image
import RigBuilderPro from '../components/assets/Rig-BuilderPro.png'

export default function PortfolioPage() {
    return (
        <div className='card'>
         <h2>Portfolio</h2>
         <div>
            <p className='darker'>
                My portfolio consists of many roles I've taken on in group projects. From dealing with simple javascript and APIs, coding routes and logins, to creating a professional README. All these websites were created through group projects, their end products a testament to easy teamwork and understanding.
            </p>
            <p>
                <a href='https://gonz951.github.io/Start-Line/' target='_blank'><img src={StartLine} className="web-img" alt='Start-Line website image'/></a>
                {/* Add repo links later */}
                <a href='https://pennypacker.onrender.com/' target='_blank'><img src={PennyPacker} className='web-img' alt='PennyPacker website image'/></a>
                {/* NEED TO ADD MORE PROJECTS */}
                <a href='https://rig-builderpro-a6ui.onrender.com/' target='_blank'><img src={RigBuilderPro} className='web-img' alt='Rig-Builder Pro website image'/></a>
            </p>
         </div>
        </div>
    );
}