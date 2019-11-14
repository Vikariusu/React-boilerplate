import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    font-family: Helvetica, Arial;
    color: #444;
  }
`;

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <GlobalStyle />
                    <Header />
                    <Route path="/" exact component={MainPage} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
