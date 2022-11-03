import Header from './components/Header';
import MainCard from './components/MainCard';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className='body'>
            <Header />
            <div className='lead'>
              <MainCard />
              <Sidebar />
            </div>
        </div>
    );
}

export default App;
