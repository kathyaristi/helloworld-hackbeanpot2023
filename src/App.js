import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile/profile';
import Swipes from './pages/swipes/swipes';
import Matches from './pages/matches/matches';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/profile' element={<Profile/>} />
		<Route path='/swipes' element={<Swipes/>} />
		<Route path='/matches' element={<Matches/>} />
		<Route path='/login' element={<Home/>} />
	</Routes>
	</Router>
);
}

export default App;
