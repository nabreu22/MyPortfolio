import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="menu">
      <ul className="grid">
        <li>
          <a className="title" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a className="title" href="#about">
            ABOUT ME
          </a>
        </li>
        <li>
          <a className="title" href="#my-projects">
            MY PROJECTS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
