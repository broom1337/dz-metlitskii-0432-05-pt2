import React from 'react';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Cards } from './components/Cards';
import { Post } from './components/Post';

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
  );
};

export default App;