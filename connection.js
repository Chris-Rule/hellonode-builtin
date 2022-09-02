const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://NC-Group2:9o3QiPpgxoxMQy2V@cluster0.x1thw7k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
