import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
import image from "../assets/doctor.jpg"
import { FaStar, FaRegStar} from 'react-icons/fa';
import "./Card.css";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const handleFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return;
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify([...favs, { name, username, id }])
    );
  };

  return (
    <div className="card">
      <Link to={`${links.dentista.path}/${id}`}>
        <img src={image} alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavs} className="favButton">
  
  {!isFav ? 
   <FaRegStar/>   : <FaStar/> }
</button>
    </div>
  );
};

export default Card;
