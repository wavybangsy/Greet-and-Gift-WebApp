const controller = {
  getHome: function (req, res) {
    res.render("index", {
      pageName: "Home",
    });
  },
};

export default controller;
