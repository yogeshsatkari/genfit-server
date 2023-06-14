import { MongoClient } from 'mongodb';
import express from 'express';
import cors from "cors";
import "dotenv/config"

const app = express()
app.use(cors());
let db;

app.get('/', async (req, res) => {
    const user = await db.collection('user').find().toArray()
    console.log(user);
    res.send(user);
})

// app.get('/user', (req, res) => {
//     res.send({
//         user_id: 1,
//         user_name: "",
//         user_email: "",
//         user_password: "",
//         user_role: "",
//         sex: "MALE",
//         age: 34,
//     });
// })

app.get('/user-profile', (req, res) => {
    res.send({
        user_id: 1,
        plan: "LOSE", // FIT, GAIN or LOSE
        genfit_records: [
          {
            captured_image: "asdlfjsdlfkjsdgk",
            created_at: "13 Nov 6:00pm",
            model_insights: {
              generated_image: "wredfgfhfbdgdsf",
              weight: "",
              height: "",
              diet: {
                a: "",
                b: ""
              },
              exercise: {
                a: "",
                b: ""
              },
              sleep: {
                a: "",
                b: ""
              },
              other_things: ""
            }
          }
        ],
        created_at: "",
        updated_at: "",
        deleted_at: "",
      });
})

async function start() {
    // const client = new MongoClient(process.env.MONGODB_URL)
    // await client.connect()
    // db = client.db()
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`);
    })
}
start()


