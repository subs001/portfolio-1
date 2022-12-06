import React from 'react';
import user_img from '../assets/images/user_img.png';

function UserImg() {
  return (
    <div className='flex justify-center'>
        <img src={user_img} alt="Profile" className='w-[75%] h-[auto] drop-shadow-homepage' />
    </div>
  )
}

export default UserImg
