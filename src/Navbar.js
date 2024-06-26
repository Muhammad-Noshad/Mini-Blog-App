import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mini Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/search"> Search Blog</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;