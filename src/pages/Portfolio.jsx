import '../components/styles/pages.css';
import StartLine from '../components/assets/Start-Line.png'
import PennyPacker from '../components/assets/PennyPacker.png'

export default function PortfolioPage() {
    return (
        <div className='card'>
         <h2>Portfolio</h2>
         <div>
            <p className='darker'>
                The pieces in my portfolio will be seperated into two categories. The first is Group Work (created it with 4 people), and the second is individual work. 
            </p>
            <p>
                <a href='https://gonz951.github.io/Start-Line/' target='_blank'><img src={StartLine} className="web-img" alt='Start-Line website image'/></a>

                <a href='https://pennypacker.onrender.com/' target='_blank'><img src={PennyPacker} className='web-img' alt='PennyPacker website image'/></a>
                {/* NEED TO ADD MORE PROJECTS LATER!! */}
            </p>
         </div>
        </div>
    );
}