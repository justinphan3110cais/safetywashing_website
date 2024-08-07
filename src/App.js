import React from 'react';
import './assets/style/index.scss';
import BodyPage from './components/body';
import HeaderPage from './components/header';
import { Helmet } from 'react-helmet';

function App() {
    return (
        <div className="App">
            {/* <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-EKV79767GJ"></script>
                <script>
                    {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EKV79767GJ');
            `}
                </script>
            </Helmet> */}
            <div className="page-container">
                <HeaderPage />
                <BodyPage />
            </div>
        </div>
    );
}

export default App;
