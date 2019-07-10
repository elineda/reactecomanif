import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Inscription from './Climat_component/Inscription'
import Map from './Climat_component/Map'

function Climat(){
    const [data, setData] = useState([])
    const [api, setApi] = useState({})
    const [showVote, setShowVote] = useState(false)




    useEffect(()=>{
        const fetchData = async ()=> {
            const result = await axios(
                'http://127.0.0.1:8000/%5Edata.geojson$',
            );
            setApi(result.data);
        };
        fetchData();

    },[])

    useEffect(()=>{
        if (api.features){
            let result=[]
            for (let i=0; i<api.features.length; i++){
                result.push([api.features[i].geometry.coordinates[1], api.features[i].geometry.coordinates[0], 'vert']);
            }
            setData(result)


        }

    }, [api]);

    function Vote() {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((function (resultat) {
                setData([...data, [resultat.coords.latitude, resultat.coords.longitude, 'rouge']] )
                setShowVote(true)
            }))
        }
    }


    function showVoteFalse(){
        setShowVote(false)
    }

    var divVote;
    if (showVote){
        divVote =<Inscription showVote={showVoteFalse} data={data}/>
    }else{
        divVote=( <div className="vote d-flex flex-sm-row flex-column justify-content-center pt-3">
            <div className="btn btn-light order-sm-1 order-0" to="/page/coucou">En savoir plus</div>
            <button type="button" className="btn btn-success order-sm-1 order-0" id='votes' onClick={Vote}>
                <span id="moiaussi_trad">Moi aussi </span>
            </button>
            <div className="btn btn-light order-sm-1 order-0" to="/page/donne">J'aide le projet</div>

        </div>)
    }

    return(
        <div>
            <Map data={data} />
            {divVote}

        </div>
    )
}


export default Climat