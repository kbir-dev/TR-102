import { React, useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  console.log(products);

  const saveData = (item) => {
    console.log(item);
    localStorage.setItem("Product" , JSON.stringify(item));
  }

  return (
    <div>
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
                    <button className="btn btn-danger" onClick={() => saveData(item)}>
                      Add to localstorage
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
