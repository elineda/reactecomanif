import React from 'react';
import { Map as LeafletMap, TileLayer , Marker, Popup } from 'react-leaflet';
import L from "leaflet";

function Map(props) {
    const data = props.data

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('../../img/marker-icon-green-v2.png'),
        iconUrl: require('../../img/marker-icon-green-v2.png'),
        shadowUrl: require('../../img/marker-shadow.png')
    });


    function icone(type){
        if (type==='rouge'){
            return  L.icon({
                iconRetinaUrl: require('../../img/marker-icon-red.png'),
                iconUrl: require('../../img/marker-icon-red.png'),
                shadowUrl: require('../../img/marker-shadow.png'),
                iconSize: [25, 41],
                iconAnchor: [17.5, 41],
            });
        }
        else {
            return L.icon({
                iconRetinaUrl: require('../../img/marker-icon-green-v2.png'),
                iconUrl: require('../../img/marker-icon-green-v2.png'),
                shadowUrl: require('../../img/marker-shadow.png'),
                iconSize: [25, 41],
                iconAnchor: [17.5, 41],
            });
        }
    }

    return(
        <div>
            <LeafletMap

                center={[50, 10]}
                zoom={6}
                maxZoom={10}
                attributionControl={
                    true}
                zoomControl={
                    true}
                doubleClickZoom={
                    true}
                scrollWheelZoom={
                    true}
                dragging={
                    true}
                animate={
                    true}
                easeLinearity={0.35}>
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                {data.map((position, idx)=>

                    <Marker key={idx} position={position} icon={icone(position[2])}>
                        <Popup>
                            Popup for any custom information.
                        </Popup>
                    </Marker>
                )}

            </LeafletMap>

        </div>

    )
}

export default Map