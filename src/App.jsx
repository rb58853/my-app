import './App.css';
import FullContainer from './components/FullContainer';
import TopBars from './components/bars/TopBars';
import BottomBar from './components/bars/BottomBar';
import './components/utils/basic.css'

function App({content}) {
  return <div className="App">
    <TopBars />
    <FullContainer content={content} />
    <BottomBar />
  </div>;
}

export default App;
