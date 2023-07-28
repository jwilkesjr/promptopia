import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="wrapper">
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                  <div><span className="dot"></span></div>
                </div>
                <main className="app">
                    <Nav/>
                    {children}
                </main>       
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
