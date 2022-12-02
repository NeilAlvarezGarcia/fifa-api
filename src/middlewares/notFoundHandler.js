const notFound = (_req, res) => {
    res.status(404).json({
        status: false,
        error: {
            message: "Route not found",
        }
    })
}

export default notFound;