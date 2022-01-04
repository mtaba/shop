import { Route } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Topic } from './pages/homepage/topic.component';
function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/topic" component={Topic} />
    </div>
  );
}

export default App;
