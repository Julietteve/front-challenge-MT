import './App.css';
import { Footer, Header } from "./components";
import { Main } from "./pages/Main";

export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <div className='app-main-container'>
      <Header/>
      <Main/>
      </div>
      <Footer/>
    </div>
  );
}
