const errorMiddleware = (error, request, response, next) => {
    response.status(500).send({
        message: "Error...",
        success: false,
        error
    })
}

export default errorMiddleware