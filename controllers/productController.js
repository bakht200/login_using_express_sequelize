const db = require('../model/index');

///Create Main Model


const Product = db.products


//MAIN WORK//

//create products//

const addProduct = async (req,res) => {
    let info ={
        title:req.body.title,
        description:req.body.description,
        publised:req.body.published?req.body.published:false,
        price:req.body.price,

    }

    const product = await Product.create(info);
    res.status(200).send(product);
    console.log(product);
}


//get All Products//


const getProduct = async (req,res)=>{
    let products = await Product.findAll({});
    res.status(200).send(products);
}

///specific Attributes//
const specificProducts = async (req,res)=>{
    let products = await Product.findAll({
        attributes:[
            'title',
            'price'
        ]
    });
    res.status(200).send(products);
}

//get Single Products//

const singleProducts = async (req,res)=>{
    const id  = req.params.id;
    let singleProduct = await Product.findOne({where:{id:id}})
    res.status(200).send(singleProduct);

}

//update Products///


const updateProducts = async (req,res)=>{
    const id = req.params.id;
    const product = await  Product.update(req,body,{where:{id:id}});
    res.status(200).send(product);

}

//delete product by ID///

const deleteProducts = async (req,res)=>{
    const id = req.params.id;
    const product = await  Product.destroy({where:{id:id}});
    res.status(200).send("Product is Deleted");

}


module.exports={
    addProduct,
    getProduct,
    specificProducts,
    singleProducts,
    updateProducts,
    deleteProducts
}
