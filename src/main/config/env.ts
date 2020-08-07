export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  // mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-node-api', => Usando Docker é necessário apontar para a "dns" gerada para a imagem
  port: process.env.PORT || 5050,
  jwt_secret: process.env.JWT_SECRET || 'a-23s4#d567z34=fsdg*e'
}
