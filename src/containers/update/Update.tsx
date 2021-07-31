import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FormularioUpdate from '../../components/formularioUpdate/FormularioUpdate'
import FeriaContext from '../../contextos/FeriaContext'


const Update = () => {
    const {getProductById, handlerOnUpdate} = useContext(FeriaContext)
    const {id} = useParams<any>()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const {name,price} = getProductById(id)     
        debugger 
        setName(name)
        setPrice(price)
    }, [name,price,id])


    return (
        <>
         {name&&price&&<FormularioUpdate id={id} name={name} price={price}/>}   
        </>
    )
}

export default Update
