import React from 'react'
import profile_pic from '../assets/images/user.png'

function Profile() {
  return (
    <div class="grid grid-cols-2 py-24 bg-slate-800 shadow-lg shadow-slate-700 m-4 rounded-lg">
        <div class='flex justify-end mr-32'>
        <img src={profile_pic} alt="Profile" class='w-32 h-32  bg-cyan-600 rounded-full p-3'/>
        </div>
        <div class='ml-2'>
            <h1>Hi</h1>
            <h5>My Name is -Name-</h5>
        </div>
    </div>
  )
}

export default Profile
