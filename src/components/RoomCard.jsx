import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { _id, name, price, facilities, description, currency, availability } =
    room;
  return (
    <Link to={`/room/details/${_id}`}>
      <div className="card  bg-base-100 w-full h-[450px] shadow-xl lg:w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
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
          <div className="card-actions justify-start">
            {facilities.map((facility, index) => (
              <div key={index} className="badge badge-outline">
                <span className="font-semibold">{facility}</span>
              </div>
            ))}
          </div>
          {/* <div className="w-full">
            <Link to={`/room/details/${_id}`}>
              <button className="btn w-full text-black bg-green-400 hover:bg-green-700 hover:text-white ">
                Book Now
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
