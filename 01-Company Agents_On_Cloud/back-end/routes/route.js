const express = require('express');
const router = express.Router();
const { createSeller,getSeller,getIdSeller,createReservationRequest,getReservationRequest ,getIdReservationRequest,accept_reject} = require("../controllers/controller");
router.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
router.get("/getSeller",getSeller);
router.post("/createSeller", createSeller);
router.get("/getIdSeller/:id_seller", getIdSeller);
router.post("/createReservationRequest", createReservationRequest);
router.get("/getReservationRequest", getReservationRequest);
router.get("/getIdReservationRequest/:id_seller", getIdReservationRequest);
router.put("/getAcceptReject/:id_buyer", accept_reject);

module.exports = router;