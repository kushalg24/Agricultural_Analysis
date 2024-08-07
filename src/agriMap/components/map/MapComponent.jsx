import React, { useEffect, useRef, useState } from "react";
import { TileLayer, GeoJSON, Marker, useMap, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import your custom icon image
import customMarkerIcon from '../icons/marker.svg'; // Ensure the path is correct

const MapComponent = ({
    center,
    geoJsonData,
    isSelectEnabled,
    shouldTriggerReset,
    setReset,
    surveyGeoJsonData,
}) => {
    const map = useMap();
    const geoJsonLayerRef = useRef(null);
    const surveyGeoJsonLayerRef = useRef(null);
    const markerRef = useRef(null);
    const [selectedPoints, setSelectedPoints] = useState([]);

    // Create a custom icon
    const customIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [32, 32], // size of the icon
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
    });

    useEffect(() => {
        map.setView(center, map.getZoom(), {
            animate: true,
        });
    }, [center, map]);

    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    };

    useEffect(() => {
        if (geoJsonLayerRef.current && geoJsonData) {
            geoJsonLayerRef.current.clearLayers();
            geoJsonLayerRef.current.addData(geoJsonData);
        }
    }, [geoJsonData]);

    useEffect(() => {
        if (surveyGeoJsonLayerRef.current && surveyGeoJsonData) {
            surveyGeoJsonLayerRef.current.clearLayers();
            surveyGeoJsonLayerRef.current.addData(surveyGeoJsonData);
        }
    }, [surveyGeoJsonData]);

    useEffect(() => {
        if (markerRef.current) {
            markerRef.current.setLatLng(center);
        }
        map.setView(center, map.getZoom(), {
            animate: true,
        });
    }, [center, map]);

    const handleMapClick = (e) => {
        if (isSelectEnabled) {
            const { latlng } = e;
            setSelectedPoints([...selectedPoints, [latlng.lat, latlng.lng]]);
        }
    };

    const getGeoJson = () => {
        const polygon = L.polygon(selectedPoints);
        const geoJson = polygon.toGeoJSON();
        console.log(geoJson);
    };

    useEffect(() => {
        if (selectedPoints.length > 2) {
            getGeoJson();
        }
    }, [selectedPoints]);

    useEffect(() => {
        if (shouldTriggerReset) {
            setSelectedPoints([]);
            setReset(false);
        }
    }, [shouldTriggerReset]);

    useEffect(() => {
        if (!isSelectEnabled) {
            map.removeEventListener("click");
        }
    }, [isSelectEnabled]);

    return (
        <div className="w-full h-full">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} ref={markerRef} icon={customIcon} />
            {geoJsonData && (
                <GeoJSON
                    data={geoJsonData}
                    onEachFeature={onEachFeature}
                    ref={geoJsonLayerRef}
                />
            )}
            {surveyGeoJsonData && (
                <GeoJSON
                    data={surveyGeoJsonData}
                    style={{ color: "red" }}
                    onEachFeature={onEachFeature}
                    ref={surveyGeoJsonLayerRef}
                />
            )}
            {isSelectEnabled && selectedPoints.length > 0 && (
                <Polygon positions={selectedPoints} />
            )}
            {isSelectEnabled && (
                <div
                    onClick={() =>
                        map.addEventListener("click", handleMapClick)
                    }
                    style={{ height: "100%", width: "100%" }}
                />
            )}
        </div>
    );
};

export default MapComponent;