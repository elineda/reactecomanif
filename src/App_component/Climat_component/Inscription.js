import React, { useState } from 'react';
import axios from 'axios';
import '../../css/index.css'

function Inscription(props) {

    const [numero, setNumero] = useState('')

    function Enregistrement() {
        if (numero.length===10){
            // axios.post('http://127.0.0.1:8000', {numero:numero})
            //     .then(res=>{
            //         console.log(res)
            //     })
            props.showVote()
        }
    }

    return(
        <div className='container text'>
            <p className='text-center'>Pour valider votre engagement, veuillez entrer votre numéro de téléphone </p>
            <div className='d-flex justify-content-center'>
            <input value={numero} onChange={event => setNumero(event.target.value)} type='text'/>
            <button className='btn btn-success' onClick={Enregistrement}>Ok</button>
            </div>
        </div>
    )
}

export default Inscription