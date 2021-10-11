import './App.scss';
import EmojiApiCall from './components/EmojiApiCall';
import Footer from './components/shared-components/Footer'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>
            Hello, hello!
          </h1>
          <EmojiApiCall/>
        </header>
      <Footer/>
    </div>
  );
}

export default App;
