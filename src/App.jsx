import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <header>
                <h1>Paula 'Fel' Gonzalez</h1>
                <Nav />
            </header>
                <Outlet />
                <Footer />
        </>
    )
}

export default App;
