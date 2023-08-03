const { Router } = require("express");
const {
  studentDetails,
  studentSignup,
  studentLogin,
  studentProduct,
} = require("../controllers/student.controller");
const router = Router();

router.get("/", studentDetails);
router.get("/signup", studentSignup);
router.get("/login", studentLogin);
router.get("/product", studentProduct);

module.exports = router;
