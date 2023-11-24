const Card = require("../model/Card.js");


const getCards = (req,res)=>{
    Card.find()
    .then((card)=>{
        res.json(card)
    })
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })
};

//post
const createCard = async(req,res)=>{
    const {title,service,ssdNo} = req.body;

    if (!title || !service || !ssdNo === undefined){
        return res.status(400).json({error:"missing or invalid fields in the request body"})
    }
    try{
        const card = new Card({
            title,
            service,
            ssdNo,
        });

        const savedCard = await card.save();
        res.status(200).json(savedCard);
    }catch(error){
        res.status(500).json({error: error.message})
    };
};

//put
const updateCard = (req,res)=>{
    Card.findOneAndUpdate(
        { _id: req.params.cardID},
        {
            $set:{
                title: req.body.title,
                service: req.body.service,
                ssdNo: req.body.ssdNo,
            },
        },
        {new: true}
    )
    .then((updatedCard)=>{
        if (!updatedCard){
            return res.status(404).json({error:"Card not found"})
        }
        res.json(updatedCard);
    })
    .catch((error)=>{
        res.status(500).json({error :error.message})
    });
};

//delete
const deleteCard = (req,res)=>{
  Card.deleteOne({ _id: req.params.cardID})
    .then((result)=>{
        if (result.deletedCount === 0){
            return res.status(404).json({ error: "Card not found"});

        }
        res.json({message: "Card Deleted"})
    })
    .catch((error)=>{
        res.status(500).json({error: error.message})
    })
 
};


module.exports = {
    getCards,
    createCard,
    updateCard,
    deleteCard
}