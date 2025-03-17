import "./App.css";

const Titile = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/food-express-logo-design_79169-3.jpg"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Titile />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <h2>Body</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h2>Footer</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
