import "./../css/link.css";

function Link(data) {
  return (
    <a href={data.link} className="link">
      <img src={data.icon} alt="" srcset="" className="link_icon" />
      <div className="link_name">{data.name}</div>
      <div className="link_link">
        <i className="fas fa-link"></i>
      </div>
    </a>
  );
}

export default Link;
