import axios from "axios";


const API_URL = "http://localhost:8080/api/v1/products";

class ProductService {

    getAll(){
        return axios.get(API_URL)
    }

    save(product){
        return axios.post(API_URL, product)
    }

    getById(productId){
        return axios.get(API_URL + "/" + productId)
    }

    update(productId, product){
        return axios.put(API_URL + "/"+productId, product)
    }

    delete(productId){
        return axios.delete(API_URL+ "/"+productId)
    }

}

export default new ProductService();