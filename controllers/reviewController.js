const db = require('../model/index');

///Create Main Model


const Review = db.reviews


//MAIN WORK//

//create products//

const addReviews = async (req,res) => {
    let info ={
      
        rating:req.body.rating,
      
        description:req.body.description,

    }

    const product = await Review.create(info);
    res.status(200).send(product);
    console.log(product);
}


//get All Products//


const getProduct = async (req,res)=>{
    let products = await Review.findAll({});
    res.status(200).send(products);
}



//get Single Products//

const singleProducts = async (req,res)=>{
    const id  = req.params.id;
    let singleProduct = await Review.findOne({where:{id:id}})
    res.status(200).send(singleProduct);

}

//update Products///


const updateProducts = async (req,res)=>{
    const id = req.params.id;
    const product = await  Review.update(req,body,{where:{id:id}});
    res.status(200).send(product);

}

//delete product by ID///

const deleteProducts = async (req,res)=>{
    const id = req.params.id;
    const product = await  Review.destroy({where:{id:id}});
    res.status(200).send("Review is Deleted");

}


module.exports={
    addReviews,
    getProduct,
    
    singleProducts,
    updateProducts,
    deleteProducts
}
