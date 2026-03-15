exports.isLogin = (req, res, next) => {

    if (req.session.user) {
        return res.status(200).json({
            message: "Already logged in"
        })
    }

    next();
}