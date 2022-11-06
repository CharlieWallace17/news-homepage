import Header from './components/Header';
import MainCard from './components/MainCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
    return (
        <div className='body'>
            <Header />
            <div className='lead'>
              <MainCard />
              <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default App;
