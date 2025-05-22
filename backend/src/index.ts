import express, { json, urlencoded, Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req : Request, res : Response) => {
  res.status(200).json({
    success : true,
    user : {
      name : 'Bhoopendra Chaurasia',
      email : 'bhoopendra@gmail.com',
      age : 24
    }
  });
});

app.post('/create-user', (req : Request, res : Response) => {
  res.status(200).json({
    success : true,
    ...req.body
  })
});

app.listen(PORT, () => {
  console.log(`Server is listen on port : ${PORT} and url : http://localhost:${PORT}`);
});

