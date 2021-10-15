import Link from "./components/link";
import links from "./assets/links";
import "./css/app.css";

function App() {
  return (
    <div className="container">
      <div className="intro">
        <img
          src="./assets/avatar.jpg"
          alt=""
          srcset=""
          className="intro_avatar"
        />
        <div className="intro_name">
          Hi there, We are Google Developers Club
        </div>
        <div className="intro_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          vitae dolor recusandae laboriosam aliquam, magni, non fuga cupiditate
          totam voluptatibus consequatur! Dolor quisquam dolorem, ipsa ex
          assumenda deleniti maiores beatae?
        </div>
      </div>
      <div className="links">
        {links.map((link) => {
          return (
            <Link
              link={link.link}
              name={link.name}
              icon={`./assets/icons/${link.icon}`}
            ></Link>
          );
        })}
      </div>
    </div>
  );
}

export default App;
