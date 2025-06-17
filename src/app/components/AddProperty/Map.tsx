"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
// Import useMap directly since it's a hook
import { useMap } from "react-leaflet";

interface LocationSuggestion {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

interface MapProps {
  initialPosition?: LatLngExpression;
  onLocationSelect?: (position: LatLngExpression) => void;
}

interface SearchBarProps {
  onLocationSelect: (position: LatLngExpression) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect }) => {
  const map = useMap();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleSelect = (suggestion: LocationSuggestion) => {
    const position: LatLngExpression = [
      parseFloat(suggestion.lat),
      parseFloat(suggestion.lon),
    ];
    onLocationSelect(position);
    map.setView(position, 13);
    setSuggestions([]);
    setSearchQuery(suggestion.display_name);
  };

  return (
    <div className="leaflet-top leaflet-left p-2">
      <div className="leaflet-control">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            fetchSuggestions(e.target.value);
          }}
          placeholder="Search location..."
          className="w-64 p-2 border rounded"
        />
        {suggestions.length > 0 && (
          <div className="bg-white mt-1 rounded shadow-lg max-h-48 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion.display_name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DynamicSearchBar = dynamic(() => Promise.resolve(SearchBar), {
  ssr: false,
});

const Map: React.FC<MapProps> = ({
  initialPosition = [20.5937, 78.9629],
  onLocationSelect,
}) => {
  const [position, setPosition] = useState<LatLngExpression>(initialPosition);

  const handleLocationSelect = (newPosition: LatLngExpression) => {
    setPosition(newPosition);
    onLocationSelect?.(newPosition);
  };

  return (
    <div className="h-96 w-full my-4">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Selected location</Popup>
        </Marker>
        <DynamicSearchBar onLocationSelect={handleLocationSelect} />
      </MapContainer>
    </div>
  );
};

export default Map;
