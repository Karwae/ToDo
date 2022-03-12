import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Header.css';

function Header({handleOpenDialog}) {


  return (
    <div className='header'>
        <div className='header-title'>
          <div >What's the plan for today?</div>
          <div className='add-todo' onClick={handleOpenDialog}><AddCircleOutlineIcon sx={{ fontSize: 55 }} /></div>
        </div>
    </div>
  )
}

export default Header