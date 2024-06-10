import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
        <span className="username">unknown</span>
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
