import React from 'react'
import {useParams , useNavigate} from 'react-router-dom'
function Detailes() {
    const {id,image,title } = useParams()
    return (
        <div>
            <h1>
                {id}
                <img src = {image} />
                {title}
            </h1>
        </div>
    )
}

export default Detailes
