
import { Map, Marker } from "pigeon-maps"
const HotelMap = () => {
   
  return (
    
      <div>
        <Map height={300} defaultCenter={[22.3476, 91.8231]} defaultZoom={11}>
      <Marker width={50} anchor={[22.3476, 91.8231]} />
    </Map>
      </div>
    
  );
};

export default HotelMap;
