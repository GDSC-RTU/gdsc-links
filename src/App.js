import Link from "./components/link";
import links from "./assets/links";
import "./css/app.css";

function App() {
  return (
    <div className="container">
      
      <div className="intro">
        <img
          src="./assets/avatar.gif"
          alt=""
          className="intro_avatar"
        />
        <div className="intro_name">
         Hi there, visitor!
        </div>
        <div className="intro_description">
         @gdscrtu <br />
         "Join us in our mission of empowering the technical community"

        </div>
      </div>

      <div className="links">
        {links.map((link) => {
          return (
            <Link
              link={link.link}
              name={link.name}
              icon={`./assets/icons/${link.icon}`}
              key={link.link}
            ></Link>
          );
        })}
      </div>
    
    </div>
  );
}

export default App;
