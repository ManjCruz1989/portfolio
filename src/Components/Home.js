import React from 'react'
import {Instagram} from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Slides from './Slides';

const Home = () => {

  return (
    <div className='home'> 
    <section className='home-top'>
    <div className='home-bg'></div>
    <Slides className='slides'/>
    <div className='home-title'>
    Cruz Web Development
    </div>
    <div className='home-btns'><Button variant="outlined" sx={{ width: 200, padding: 1, margin: 2 }} >Blog</Button><Button variant="outlined" sx={{ width: 200, padding: 1, margin: 2 }}>FAQ</Button></div>
    <div className='socials'><a href='//www.google.com' target="_blank" rel="noreferrer"><Instagram className='instagram' /></a><a href='//www.google.com' target="_blank" rel="noreferrer"><Facebook className='facebook'/></a><a href='//www.google.com' target="_blank" rel="noreferrer"><Twitter className='twitter'/></a></div>
    
    <span className='home-text'>I build websites for small businesses</span>
    </section>
    <section className='home-middle'>


    </section>
    </div>
   )
}

export default Home