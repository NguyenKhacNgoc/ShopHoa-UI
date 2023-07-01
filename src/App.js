import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes';
import DefaultLayOut from './components/Layouts/DefaultLayout';
import { Fragment, useState } from 'react';
function App() {
  const isLogged = localStorage.getItem('loggedInUser')
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayOut
            if(route.layout){
              Layout = route.layout
            }
            else if (route.layout === null){
              Layout = Fragment
            }
            const Page = route.component
            return <Route key={index} path={route.path} element = {
              <Layout>
                <Page/>
              </Layout>
            }/>

          })}
        </Routes>
        

      </div>
    </BrowserRouter>
    
  );
}

export default App;
