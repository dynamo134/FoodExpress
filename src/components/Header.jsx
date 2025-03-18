import { useState } from "react";
const loggedInUser = () => {
  return true;
};

const Title = () => {
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
