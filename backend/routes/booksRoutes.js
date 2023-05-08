const router = require("express").Router();
const bookModel = require("../models/booksModel");
//post request
router.post("/add", async (req,res)=>{
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"book added succesfully"})
        });
    } catch (error) {
        console.log(error); 
    }
});
//get request
router.get("/deleteBook", async (req,res)=>{
    try {
        
        let books ;
        books = await bookModel.find();
            res.status(200).json({books});
        
    } catch (error) {
        console.log(error); 
    }
});
//get request by id
router.get("/deleteBook/:id", async (req,res)=>{
    let book;
    const id= req.params.id;
try {
    book = await bookModel.findById(id);
    res.status(200).json({book});
} catch (error) {
    console.log(error);
}
});
//update books
router.put("/updateBook/:id", async (req,res)=>{
    const id= req.params.id;
    const {bookname, description ,author, image,price} = req.body;
    let book;
    try {
      book = await bookModel.findByIdAndUpdate(id, {
        bookname, 
        description, 
        author, 
        image,
        price
    });
    await book.save().then(()=>res.json({message:"data updated"}));
    } catch (error) {
        console.log(error);
    }
});
//delete book
router.delete("/deleteBook/:id", async (req,res)=>{

    const id= req.params.id;
try {
    await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"deleted successfully"}));
    
} catch (error) {
    console.log(error);
}
});

module.exports= router;