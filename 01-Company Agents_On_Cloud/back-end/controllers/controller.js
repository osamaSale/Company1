const connection = require("../db");


const getSeller = (req,res) =>{
    const sql ="select * from seller"
    connection.query(sql,(err,result)=>{
        if (err){
            res.json(err);
            }
            res.json(result)
    })
}



const createSeller = (req, res) => {
  const sql = `INSERT INTO seller (name, email, phone ,type) VALUES  ( ?, ?, ? ,? )`;
  let { name, email, phone, type } = req.body;
  const data = [name, email, phone, type];
  connection.query(sql, data, (err, result) => {
    if (err) {
        res.json({ err: "Error" });
        console.log(err)
    }else{
        res.json({
            result: "success",
            data,
          });
        }
  });

};
const getIdSeller = (req,res)=>{
  const sql = `SELECT * FROM seller WHERE id_seller = ${req.params.id_seller}`;
  connection.query(sql,(err, result) => {
    if (err) throw err;
    // console.log("RESULT: ", result);
    res.json(result);
      });
}
const createReservationRequest = (req,res) =>{
  const sql  = `INSERT INTO buyer (id_seller,name_buyer,email_buyer,Reservation_date) VALUES (?,?,?,?) `
  let { id_seller,name_buyer, email_buyer, Reservation_date} =req.body;
  const data = [
    id_seller,
    name_buyer,
    email_buyer,
    Reservation_date,
  ];



  connection.query(sql, data, (err,result) => {
    if (err) {
      res.json({ err: "Invalid" });
      console.log('------------------------------------');
      console.log(err);
      console.log('------------------------------------');
    } else if (result) {
      res.json({
        result: "success",
        data,
      });
    }
  });

}
const getReservationRequest = (req,res) =>{
const sql = 'select * from buyer'
connection.query(sql,(err,result)=>{
     if(err){
       console.log(err)
     }else{
      res.json(result)
     }
})

}

const getIdReservationRequest = (req,res) =>{
const sql = `select * from buyer where id_seller = ${req.params.id_seller}`
connection.query(sql,(err,result)=>{
     if(err){
       console.log(err)
     }else{
      res.json(result)
     }
})
}

const accept_reject =(req,res)=>{
  const sql = `UPDATE buyer SET accept_reject = ? WHERE id_buyer =  ${req.params.id_buyer}`
  let data = [req.body.accept_reject];
  connection.query(sql, data, (err) => {
    if (err) throw err;

    res.json('Success change accept/reject ');
    });
}

module.exports = {
  getSeller ,
  createSeller,
  getIdSeller ,
  createReservationRequest ,
  getReservationRequest,
  getIdReservationRequest,
  accept_reject
};