import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/read">Read</Link></li>
          <li><Link to="/update">Update</Link></li>
          <li><Link to="/delete">Delete</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <section className="header-section">
        <h1>Vegan Bar</h1>
      </section>
      <section className="content-section">
        <p>Welcome to the Vegan Bar. Enjoy our delicious plant-based meals!</p>
      </section>
    </div>
  );
}

export default Main;