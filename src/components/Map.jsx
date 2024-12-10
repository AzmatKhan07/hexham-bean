// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";

// const MapComponent = () => {
//   const mapContainer = useRef(null);

//   // Mapbox token (replace this with your actual token)
//   mapboxgl.accessToken = "your-mapbox-token-here";

//   // Client's address coordinates (replace with actual values)
//   const coordinates = {
//     lat: 56.462018, // Latitude
//     lng: -2.970721, // Longitude
//   };

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11", // Mapbox style
//       center: [coordinates.lng, coordinates.lat], // Starting position [lng, lat]
//       zoom: 13, // Initial zoom level
//     });

//     // Add a marker at the client's location
//     new mapboxgl.Marker()
//       .setLngLat([coordinates.lng, coordinates.lat])
//       .setPopup(
//         new mapboxgl.Popup().setHTML(`
//           <h4>Client's Address</h4>
//           <p>7-9 Whitehall Street, Dundee, DD1 4AA, United Kingdom</p>
//         `)
//       )
//       .addTo(map);

//     // Cleanup map instance on component unmount
//     return () => map.remove();
//   }, []);

//   return (
//     <div className="w-full h-96">
//       <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
//     </div>
//   );
// };

// export default MapComponent;
