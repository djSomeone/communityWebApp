
import './App.css';
import Header from './component/header/header';
import Sidebar from './component/sideBar/sideBar';
import Post from './component/post/post';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}

export default App;
