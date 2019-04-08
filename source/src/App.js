import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Nav/Navbar';
import Routes from './routes';
import GlobalStyle from './GlobalStyle';

class App extends Component {
  componentDidMount() {
    document.title = 'Caboré Hackerspace';
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
