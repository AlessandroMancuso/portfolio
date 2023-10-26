import Homepage from "./pages/Homepage.page";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Skill from "./pages/Skill.page";
import Project from "./pages/Project.page";

function App() {
  return (
    <div className="font-mono ">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="skill/:id" element={<Skill />} />
          <Route path="projects/:id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
