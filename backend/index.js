const {MongoClient} = require('mongodb');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const router = express.Router()

module.exports = router;

// app.get('/comments/:website', function (req, res) {
//     res.send(req.params.website)
// });

// //Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// router.get("/", (req, res) => {
//     res.json({ message: "Hello World." });
//     console.log(res);
//   });

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Interlinked:uottahack5interlinked@interlinked.9t7atmk.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        await client.connect();
        // await  listDatabases(client);
        // await  listFiles(client);
        const interlinkedDatabase = client.db('interlinked');
        const websitesCollection = interlinkedDatabase.collection('websites');
        app.get('/comments/:website', function (req, res) {
            // res.send(req.params.website)
            (async () => {
                res.send(await getComments(client, req.params.website));
            })()
        });

        
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function getComments(client, website) {
    const interlinkedDatabase = client.db('interlinked');
    const websitesCollection = interlinkedDatabase.collection('websites');
    const websites = await websitesCollection.find({}).toArray();
    // console.log(JSON.stringify(websites, null, 2));
    // console.log(websites[0]['https://wikipedia.com']);
    console.log(website);
    // console.log(websites[0][website]);
    // return(websites[0]['' + website + ' '])
    return website

};

async function listFiles(client) {
    const websites = await websitesCollection.find({}).toArray();
    console.log(JSON.stringify(websites, null, 2));
    console.log(websites[0]['https://wikipedia.com']);

};

main().catch(console.error);