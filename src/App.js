import './App.css';
import Router from './Router';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
       <Layout><Router /></Layout>
    </div>
  );
}

export default App;
