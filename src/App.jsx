import React from 'react';
import SideBar from './components/SideBar';
import Publicacion from './components/Publicacion'; // Cambié 'publicacion' a 'Publicacion'
import NewPost from './components/NewPost';
const App = () => {
  return (
    <div>
      <SideBar />
      <NewPost />
      <Publicacion /> 
      <Publicacion /> 

    </div>
  );
}

export default App;
