const controller = {
  getHome: function (req, res) {
    res.render("envelope", {
      pageName: "Home3",
      css1: "/static/css/envelope.css",
    });
  },
};

export default controller;
