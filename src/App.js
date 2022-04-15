import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import Content from './components/Content';
import AddContent from './components/AddContent';
import EditContent from './components/EditContent';
import EditProfilePic from './components/EditProfilePic';


function App() {
  return (
    <>
      <Router>
        {/* Added the context provider for sending the data from parent to different child */}
        <div style={{ display: "grid", gridTemplateColumns: "18% 78%" }}>
          <div class="sidebar">
            <SideBar />
          </div>
          <div class="p-2 overflow-auto">
            <Routes>
              <Route path="/ProductAndUsers" element={<Content />} />
              <Route exact path="/" element={<Content />} />
              <Route path="/add-user" element={<AddContent />} />
              <Route path="/edit-user/:id" element={<EditContent />} />
              <Route path="/edit-profile/:id" element={<EditProfilePic />} />
              {/* Added route for editing the existing user */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
