export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwt_secret: process.env.JWT_SECRET || 'a-23s4#d567z34=fsdg*e'
}
