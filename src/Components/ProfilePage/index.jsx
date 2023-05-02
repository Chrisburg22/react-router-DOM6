import React from 'react'
import pikis from '../../assets/pikis.jpeg'

export const ProfilePage = () => {
  return (
    <main>
        <h1>Pikis Dulidul</h1>
        <img src={pikis} alt="Pikis" height={"400px"}/>
    </main>
  );
}