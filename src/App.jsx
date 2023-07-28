import StartPost from "./components/StartPost";
import WritePost from "./components/WritePost";
import Post from "./components/Post";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPost />} />
          <Route path='/write-post' element={<WritePost />} />
          <Route
            path='/write-post/:documentType?/:showPopup3?'
            element={<WritePost />}
          />
          <Route path='post' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
