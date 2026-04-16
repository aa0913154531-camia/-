import { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onExplore={() => setCurrentPage('portfolio')} />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onExplore={() => setCurrentPage('portfolio')} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
