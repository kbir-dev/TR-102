const fetchProducts = async(req , res) => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const products = data.products;

        if(products.length < 0){
            return res.status(400).json({
                success : false,
                message : "No data to show",
            })
        }

        res.status(200).json({
            success : true,
            message : "Products fetched successfully",
            Data : products,
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message : `Error occured in fetching data ${error.message}`
        })
    }
}

const getSingleProduct = async(req , res) => {
    try {
        const {id} = req.params;

        const respones = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await respones.json();

        if(!data){
            return res.status(400).json({
                success : false,
                message : "No product found",
            })
        }

        res.status(200).json({
            success : true,
            message : "Product fetched successfully",
            Data : data,
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message : `Error occured in fetching data ${error.message}`
        })
    }
}

module.exports = {
    fetchProducts,
    getSingleProduct,
}