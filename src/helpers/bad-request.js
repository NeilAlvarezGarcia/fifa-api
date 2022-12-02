const badRequest = (res, message) => {
    res.status(401).json({
        status: false,
        error: {
            message
        }
    })
}

export default badRequest;