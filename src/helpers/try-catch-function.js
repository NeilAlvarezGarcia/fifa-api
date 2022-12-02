const tryCatchFunction = (fn) => async (req, res) => {
    try {
        await fn(req, res);
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err || { message: "Someting went wrong. Come back" },
        })
    }
}

export default tryCatchFunction;