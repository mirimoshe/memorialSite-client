
import HomePage from './home_page/homePage';
import AboutPage from './about_page/aboutPage';
import Decead_card from './home_page/decead_card';
import Steps from './home_page/steps';
import DeceadPage from './decead_page/deceadPage';
import DeceadImg from './decead_page/deceadImg';
import DeceadInfo from './home_page/deceadInfo';
import UserList from './Useres/users';
import DeceadList from './Decead/decead';
import StoryList from './Story/story';
import ResponseList from './Response/response';
import All_decead_card from './home_page/all_decead_card';
import DeathDaycard from './home_page/deathDaycard';
import Navigate from './decead_page/navigate';
import Addition from './home_page/additionPage';
import DeceadDetailes from './decead_page/deceadDetailes';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from './home_page/navBar';
import { Switch } from '@mui/material';
import AllDeceadinfo from './home_page/allDeceadinfo.js'
import OneStory from './decead_page/oneStory.js';
import { Login } from '@mui/icons-material';
import AuthGuard from './AuthGuard.js';


function App() {
  return (
    <>
      <div style={{ background: '#161623' }}>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/all-information-card' element={<AllDeceadinfo />}> </Route>
          <Route path='/information-card' element={<DeceadInfo />} ></Route>
          <Route path='decead-page/:kod' element={<DeceadPage />} />
          {/* <Route path='/add' element={<Addition />} /> */}
          <Route path='/add' element={<AuthGuard element={<Addition />} />} />
        </Routes>
      </div>

    </>
  );
}


export default App;
