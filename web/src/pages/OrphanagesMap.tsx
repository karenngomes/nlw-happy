import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [50, 60],
  iconAnchor: [25, 60],
  popupAnchor: [170, 2],
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Maceió</strong>
          <span>Alagoas</span>
        </footer>
      </aside>

      <Map
        center={[-9.6516899, -35.7297573]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[-9.6516899, -35.7297573]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={248}
            maxWidth={248}
            className="map-popup"
          >
            Lar das Meninas
            <Link to="">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
