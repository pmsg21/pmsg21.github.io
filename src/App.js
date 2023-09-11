import './animate.min.css';
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Portfolio,
  Resume,
  Skills,
} from './pages';
import { LanguageContextProvider } from './context/LanguageContext';
import ReactTooltip from 'react-tooltip';
import { AnimateLettersContextProvider } from './context/AnimateLettersContext';

const App = () => {
  return (
    <LanguageContextProvider>
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>

      <Header />

      <AnimateLettersContextProvider>
        <Home />
        <main id="main">
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </AnimateLettersContextProvider>

      <a href="#home" className="back-to-top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
      <div id="preloader"></div>

      <ReactTooltip />
    </LanguageContextProvider>
  );
};

export default App;
