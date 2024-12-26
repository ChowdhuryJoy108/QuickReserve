import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import RoomCard from "../../components/RoomCard";
import AuthContext from "../../context/AuthContext";
import { Helmet } from "react-helmet";
import { Typewriter } from 'react-simple-typewriter'

const Rooms = () => {
  const { userId } = useContext(AuthContext);
  console.log(userId);
  const [rooms, setRooms] = useState([]);
  const [sortRoomOrder, setSortRoomOrder] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/rooms").then((res) => setRooms(res.data));
  }, []);

  const handleSortRoomByPriceRange = (order) => {
    setSortRoomOrder(order);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/rooms/sort?sortRoomOrder=${sortRoomOrder}`)
      .then((res) => setRooms(res.data));
  }, [sortRoomOrder]);

  return (
    <div>
      <Helmet>
        <title>Rooms - QuickReserve</title>
        <meta name="description" content="Welcome to the Rooms Page." />
      </Helmet>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h1
          style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
          className="text-2xl px-4 text-center text-[#111111] lg:text-4xl"
        >
          {" "}
          Find Your Perfect Stay <br />{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Browse",
                "Filter",
                "Book",
            
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span> 
          the Best Rooms for Your Comfort and Convenience.
        </h1>
        <p className="text-base px-2 w-full  text-gray-600 text-center lg:w-[800px]">
        Discover a wide range of rooms designed for your comfort and style. Easily filter by preferences, compare options, and secure your perfect stay with a seamless booking process today.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <details className="dropdown">
          <summary className="btn m-1 ">
            {" "}
            <FaFilter /> Filter Rooms
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-64 p-2 shadow">
            <li className="mb-2">
              <button
                onClick={() => handleSortRoomByPriceRange("asc")}
                className="btn"
              >
                Sort By Price:(low-high)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSortRoomByPriceRange("desc")}
                className="btn"
              >
                Sort By Price:(high-low)
              </button>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 my-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
