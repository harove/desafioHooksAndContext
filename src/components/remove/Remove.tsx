import { useContext } from "react"
import { useParams } from "react-router-dom"
import FeriaContext from "../../contextos/FeriaContext"

const Remove = () => {
    const {getProductById} = useContext(FeriaContext)
    const {id}  = useParams<any>()
    return (
        <div>
           remove {id} 
        </div>
    )
}

export default Remove
