const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);
    
    res.status(err.status || 500).json({
        mensaje: err.message || "Ocurrió un error en el servidor",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, 
    });
};

export default errorHandler;