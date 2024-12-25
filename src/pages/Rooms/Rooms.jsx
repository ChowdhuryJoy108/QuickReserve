import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import RoomCard from "../../components/RoomCard";
import AuthContext from "../../context/AuthContext";

const Rooms = () => {
  const { userId } = useContext(AuthContext);
  console.log(userId);
  const [rooms, setRooms] = useState([]);
  const [sortRoomOrder, setSortRoomOrder] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/rooms").then((res) => setRooms(res.data));
  }, []);


  const handleSortRoomByPriceRange =(order) =>{
    setSortRoomOrder(order)
  
    };

    useEffect(()=>{
      axios.get(`http://localhost:8000/rooms/sort?sortRoomOrder=${sortRoomOrder}`)
      .then(res => setRooms(res.data))
    },[sortRoomOrder])
  
  return (
    <div>
      <div className="flex flex-col items-center space-y-4  my-[50px]">
        <h1 className="text-xl font-bold lg:text-4xl">
          Connecting You to the World!
        </h1>
        <p className="w-full text-center text-gray-600 lg:w-[700px]">
          Explore all visa options in one place! Find detailed information,
          eligibility, and application steps to make your global journey
          seamless and hassle-free.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <details className="dropdown">
          
          <summary className="btn m-1 "> <FaFilter /> Filter Rooms</summary>
          
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-64 p-2 shadow">
            <li className="mb-2">
              <button onClick={()=>handleSortRoomByPriceRange('asc')} className="btn">Sort By Price:(low-high)</button>
            </li>
            <li>
              <button onClick={()=>handleSortRoomByPriceRange('desc')} className="btn">Sort By Price:(high-low)</button>
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
