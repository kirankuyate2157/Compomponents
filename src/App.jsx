import StartPost from "./components/StartPost";
import WritePost from "./components/WritePost";
import EditPhoto from "./components/EditPhoto";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
