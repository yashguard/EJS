const studentDetails = (req, res) => {
  res.status(200).render("index");
};
const studentLogin = (req, res) => {
  res.status(200).render("login");
};
const studentSignup = (req, res) => {
  res.status(200).render("signup");
};
const studentProduct = (req, res) => {
  res.status(200).render("products");
};

module.exports = { studentDetails, studentLogin, studentSignup, studentProduct };
