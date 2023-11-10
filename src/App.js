import './App.css';
import NavbarComponents from './components/NavbarComponents';

function App() {
  return (
    <div className="App">
      <NavbarComponents />
        <div className="my-4">
          <h1>Dicky April Zahdi</h1>
          <p><strong>FrontEnd Web</strong></p>
          <hr />
          <ul>
            <li><code>PAKET: npx create-react-app kasir</code></li>
            <li><code>CSS: npm install react-bootstrap bootstrap</code></li>
            <li><code>NOTIF: npm install sweetalert --save</code></li>
            <li><code>API: npm install axios</code></li>
            <li><code>JSON Server: npm install -g json-server</code></li>
          </ul>
        </div>
      </div>
  );
}

export default App;
