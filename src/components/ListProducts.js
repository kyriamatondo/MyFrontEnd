import {useEffect, useState} from "react";
import ProductService from "../services/ProductService";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const ListProducts = () => {

    const notify =()=>toast.success("Produit supprimé avec succès 👌")

    const[products, setProducts]=useState([])

    useEffect(()=>{
       getAllProducts()
    }, [])

    const getAllProducts = () => {
        ProductService.getAll().then((res)=>{
            setProducts(res.data)
            console.log(res.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    
    const deleteProduct = (productId) => {
        if(window.confirm("Etes vous sur de vouloir supprimer ce produit ?")){
        ProductService.delete(productId).then((res)=> {
            getAllProducts()
            notify()
        }).catch(error=>{
            console.log(error)
        })
        }
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-header text-center"><strong> Liste des produits</strong></div>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Description</th>
                    <th scope="col">prix</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.status}</td>
                        <td>
                            <Link className="btn btn-info" to={`/edit/${product.id}`}>Modifier</Link>
                            <button className="btn btn-danger" onClick={()=>deleteProduct(product.id)} style={{marginLeft:"10px"}}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}

export default ListProducts