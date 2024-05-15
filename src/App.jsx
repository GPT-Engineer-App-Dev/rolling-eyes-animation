import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EyeAnimation from './components/EyeAnimation';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EyeAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
