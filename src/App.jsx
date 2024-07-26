import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <header>
                <h1>Paula 'Fel' Gonzalez</h1>
                <Nav />
            </header>
            <Outlet />
        </>
    )
}

export default App;
