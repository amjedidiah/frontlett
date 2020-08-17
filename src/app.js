// Module imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

// Component imports
import Header from './components/header.js';
import Jumbo from './components/jumbo.js';
import Extra from './components/extra.js';
import Title from './components/title.js';
import Features from './components/features.js';
import Cards from './components/cards.js';
import Footer from './components/footer.js';

// Asset imports
import './assets/css/app.css';
import div from './assets/img/div.png';

// Start Component
const App = () => (
    <div className="app" id="app">
      <Header />
      <Jumbo />
      <Extra />
      <Title headerTitle="Features" title="Platform features" />
      <Features />
      <Title rowReversed headerTitle="Benefits" title="Benefits" />
      <Cards />
      <Title headerTitle="How it works" title="How it works" />
      <Image src={div} alt="How It Works" fluid />
      <Footer />
    </div>
);
// End Component

// Export Component
export default App;
