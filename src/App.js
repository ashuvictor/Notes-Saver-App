import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello</h1>
  },
  {
    path: "/pastes",
    element: <h1>hello2</h1>

  },
  {
    path: "/pastes/:id",
    element: <h1>hello3</h1>
  }
])
function App() {
  return (
    <div>
      <h1>hello</h1>
    </div>


  );
}

export default App;
