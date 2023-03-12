import {useEffect, useState} from "react";
import productService from "../services/ProductService";
import {useNavigate, Link, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import ProductService from "../services/ProductService";

const Addproduct = () => {

    const[name, setName]=useState("")
    const[description, setDescription]=useState("")
    const[price, setPrice]=useState("")
    const[status, setStatus]=useState("")

    let navigate = useNavigate()
    const {id} = useParams()

    const notify = () => toast.success("Produit ajouté avec succès 👌");
    const notify2 = () => toast("Produit modifié avec succès 👌");

    const saveOrUpdateProduct=(e)=>{

        e.preventDefault()
        const product = {name, description, price, status}


        if(id){
            ProductService.update(id, product).then((res)=>{
                notify2()
                setTimeout(()=>navigate("/products"), 500)
            }).catch(error=>{
                console.log(error)
            })
        }else {
            if(!name && !description && !price && !status){
                toast.error("Veuillez remplir tous les champs !")

            }else{
            ProductService.save(product).then((res)=>{
                console.log(res.data)

                notify()
                setTimeout(()=>navigate("/products"), 500)

            }).catch(error=>{
                console.log(error)
            })
        }
        }


    }

    useEffect(()=>{
        ProductService.getById(id).then((response)=>{
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStatus(response.data.status)
        }).catch(error=>{
            console.log(error)
        })
    }, [])




    return (
        <div className="container mt-3">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        id ? <h2 className="text-center">Update product</h2> : <h2 className="text-center">Add product</h2>
                    }
                    <div className="card-body">
                        <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> <strong> Nom : </strong></label>
                            <input className="form-control" type="text" placeholder="Entrer le nom" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label"> <strong>Description :</strong> </label>
                            <input className="form-control" type="text" placeholder="Entrer la description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label"> <strong>Prix :</strong> </label>
                            <input className="form-control" type="text" placeholder="Entrer le prix" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label"> <strong> Statut :</strong></label>
                            <input className="form-control" type="text" placeholder="Entrer le statut" name="name" value={status} onChange={(e)=>setStatus(e.target.value)}/>
                        </div>
                            <button className="btn btn-success" onClick={(e)=>saveOrUpdateProduct(e)}>{id ? "Modifier" : "Ajouter"}</button>
                            <Link to="/products" className="btn btn-danger m-3">Retour</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Addproduct