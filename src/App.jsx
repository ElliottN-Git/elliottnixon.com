import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Layout from './Containers/Layout/Layout';
import Home from './Containers/Routes/Home';
// import ResumePage from './Containers/Routes/ResumePage/ResumePage';
// import MindMapePage from './Containers/Routes/MindMapePage/MindMape';
import MindMapeLink from './Containers/Routes/MindMapeProper/MindMapeProper';
import BurgerBuilder from './Containers/Routes/BurgerBuilderPage/BurgerBuilder';
import NextJSandAPIs from './Containers/Routes/NextJSandAPIsPage/NextJSandAPIs';
import PageNotFound from './Containers/Routes/PageNotFound/PageNotFound';


function App() {

  //The state manager (setMainScrollEnabled) here is passed down via Home.jsx to AboutMe.jsx where the video and transcript sections are toggled.
  //When either of these sections is open, we want to set scrolling (overflow) on the <main> element within Layout.jsx to be disabled/hidden.
  //mainScrollEnabled state is therefore passed to layout via mainScrollEnabled prop, and the <main> element's css classes handled accordingly.
  const [mainScrollEnabled, setMainScrollEnabled] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Layout mainScrollEnabled={mainScrollEnabled}>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home setMainScroll={setMainScrollEnabled} />}
              key="home"
            />

            <Route
              path='/mindmape'
              element={<MindMapeLink />}
            />


            <Route
              path='/burgerbuilder'
              element={<BurgerBuilder />}
            />

            <Route
              path='/nextjsandapis'
              element={<NextJSandAPIs />}
            />

            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
