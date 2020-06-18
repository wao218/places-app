import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props

  mapboxgl.accessToken = 'pk.eyJ1Ijoid2VzbGV5b3Nib3JuZTEiLCJhIjoiY2s1ejhlajg3MGMzZTNtbng4YzlqZ2d2aCJ9.DNSvEnL39pj_gTzQHTDFog';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [center.lng, center.lat],
      zoom: zoom
    });  

    // Adds map marker
    new mapboxgl.Marker().setLngLat([center.lng, center.lat]).addTo(map);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
  } , [center, zoom]);
  
  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      
    </div>
  )
}

export default Map;
