import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import FeriaContext from "../../contextos/FeriaContext"

const Remove = () => {
    const {getProductById,handlerOnDelete} = useContext(FeriaContext)
    const {id}  = useParams<any>()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const {name,price} = getProductById(id)  
        setName(name)
        setPrice(price)
    }, [name,price,id])

    const handlerOnConfirm=(e:any)=>{
        handlerOnDelete(id)
        history.push('/list')
    }

    return (
        <div>
           Estas seguro que deseas borrar el producto
           <div>id: {id}</div> 
           <div>name: {name}</div> 
           <div>price: {price}</div> 
           <button className="btn btn-danger" onClick={e=>handlerOnConfirm(e)} >Borrar</button>
        </div>
    )
}

export default Remove