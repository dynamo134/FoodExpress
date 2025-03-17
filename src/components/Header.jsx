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
    </div>
  );
};

export default Header;
