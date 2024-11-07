import { React, useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast , Toaster} from 'sonner';

function Home() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataFromBackend = async() => {
      const response = await axios.get("http://localhost:8000/fetchProducts");
      if(response.data.success){
        setProducts(response.data.Data)
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    }
    fetchDataFromBackend();
  }, []);

  const fetchSingleProduct = async(id) => {
    try {
      console.log(id)
      const response = await axios.get(`http://localhost:8000/singleProduct/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
        localStorage.setItem("product" , JSON.stringify(response.data.Data));
        navigate("/buy_now");
      }else{
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Toaster richColors position="top-right"></Toaster>
      <h1>This is the home component</h1>
      <div className="row">
        {products.length > 0 ? (
          <>
            {products.map((item) => {
              return (
                <div className="card col-lg-3 my-4" key={item.id}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-danger" onClick={() => fetchSingleProduct(item.id)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1 className="text-center text-danger">Loading ........</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
