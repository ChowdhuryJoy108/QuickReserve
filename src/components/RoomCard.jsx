import { Link, useLocation } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { _id, photos, name, price, facilities, description, currency, availability } =
    room;
    const location = useLocation()
    console.log(location.pathname)
  return (
    <Link to={`/room/details/${_id}`}>
      <div className={`card  bg-base-100 w-full ${location.pathname === "/" ? "h-[400px]" : "h-[300px]"} shadow-xl lg:w-96`}>
        <figure>
          <img
            src={photos[0]}
            alt="Room photos"
            className="w-full h-[150px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className={`badge py-2 ${availability ? "badge-success" : "badge-secondary"}`}>
              {availability ? "Available" : "Booked"}
            </div>
          </h2>
          <p className="text-base text-gray-700">{description}</p>
          <p>
            <span className="font-bold text-xl">
              {currency} {price}
            </span>
            /Day
          </p>
          {
            location.pathname === '/rooms' ? " " : <div className="w-full">
            <Link to={`/room/details/${_id}`}>
              <button className="btn w-full text-black bg-green-400 hover:bg-green-700 hover:text-white ">
                Book Now
              </button>
            </Link>
          </div> 
          }
          
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
