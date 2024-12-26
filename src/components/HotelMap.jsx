import { Map, Marker } from "pigeon-maps";
import { FaMapMarkedAlt } from "react-icons/fa";
const HotelMap = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-8">
        <h1 className="text-xl flex flex-col items-center gap-2 font-bold text-center lg:text-3xl lg:flex-row">
          <span className="text-6xl">
            <FaMapMarkedAlt />
          </span>{" "}
          Explore Our Precise Location Below
        </h1>
      </div>
      <div className="max-w-6xl mx-auto rounded-lg">
        <Map height={300} defaultCenter={[22.3476, 91.8231]} defaultZoom={11}>
          <Marker width={50} anchor={[22.3476, 91.8231]} />
        </Map>
      </div>
    </div>
  );
};

export default HotelMap;
