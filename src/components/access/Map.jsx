import GoogleMapReact from 'google-map-react';

export const Map = () => {
  const defaultLatLng = {
    lat: 33.587230,
    lng: 130.394532,
  };

  const handleApiLoaded = ({ map, maps }) => {
    new maps.Marker({
      map,
      position: defaultLatLng,
    });
  };

  return (
    <div style={{ height: '33vh', width: '100%' }}>
      <GoogleMapReact
        defaultZoom={10}
        defaultCenter={defaultLatLng}
        bootstrapURLKeys={{
          key:"AIzaSyBFhmGy4IDohaQ4kf46iBylr2xZWnYMJdY"
        }}
        onGoogleApiLoaded={handleApiLoaded}
      ></GoogleMapReact>
    </div>
  );
}