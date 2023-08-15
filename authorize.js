const authorize = (req, res, next) => {
  const providedApiKey = req.headers.authorization.split(" ")[1]
  if (providedApiKey === process.env.API_KEY) {
    next() // Allow the request to proceed
  } else {
    res.status(401).json({ message: "Only site admin is authorized" })
  }
}

export default authorize
