import React from 'react';
import logo from './logo.svg';
import './styles/css/style.css';
import {Intro } from './components/Intro'
import {Course} from './components/Course'
import {Inspired} from './components/Inspired'
import {Offers} from './components/Offers'
import {Duration} from './components/Duration'
import {Weeks} from './components/Weeks'
import {Apuff} from './components/Apuff'
import {Decor} from './components/Decor'
import {Quote} from './components/Quote'
import {Subscribe} from './components/Subscribe'

function App() {
  return (
    <div className="App">
    <Intro/>
    <Course/>
    <Inspired/>
    <Offers/>
    <Duration/>
    <Weeks/>
    <Apuff/>
    <Decor/>
    <Quote/>
    <Subscribe/>
    </div>
  );
}

export default App;
