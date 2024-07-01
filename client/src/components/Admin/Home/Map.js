import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [51.505, -0.09];

const Map = () => {
  return (
    <div className=" bg-white rounded-[20px] p-[20px] mt-[20px] laptop:mr-[30px]">
      <h2 className="font-[600] text-lap_c my-[10px]">Map View</h2>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "350px" }}
        className="rounded-lg border"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Driver</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
