import React from 'react';
import './App.css'
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import SideBar from "./Components/SideBar";



const App = () => {
    return (
        <div className={'wrapper'}>
            <Header className={'header'}/>
            <SideBar className={'sidebar'}/>
            <Profile className={'content'}/>
        </div>
    );
};

export default App;


