
import {toast} from "react-toastify";
import {useEffect} from "react";
const Home = () => {

    useEffect(()=>{
        toast.info("Bienvenue sur KyriApp !")
    }, [])

  return (
      <div>
          <h1>Home page</h1>
      </div>
  )
}

export default Home