function restrict() {
  const authError = {
    message: "Please sign in!",
  };

  return async (req, res, next) => {
    try {
      // check to see if user is signed in
      if (!req.session.signedIn) {
        return res.status(401).json(authError);
      }
      // if we reach this point, the user is authenticated!
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  restrict,
};
