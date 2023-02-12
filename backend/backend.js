import { MongoClient } from 'mongodb';

import express, { json, Router } from 'express';

const uri = "mongodb+srv://Interlinked:uottahack5interlinked@interlinkednew.9t7atmk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
console.log('Connecting to MongoDB Atlas cluster...');
await client.connect();
console.log('Successfully connected to MongoDB Atlas!');

const app = express();

app.use(json());

try {
    app.get('/comments', async (req, res) => {
        try {
            const comments = await getComments(client, req.query.website)
            console.log(comments)
            console.log("Returned " + Object.values(comments).length + " comments for website '" + req.query.website+"'");
            // for (var i = 0; i < comments.length; i++) {
            //     console.log("Comment " + (i + 1) + ": " + comments[i].comment);
            //     console.log("Comment " + (i + 1) + " author: " + comments[i].author);
            //     console.log("Comment " + (i + 1) + " date: " + comments[i].date);
            //     console.log("Comment " + (i + 1) + " likes: " + comments[i].likes);
            // }
            res.json(comments);
            } catch (err) {
              res.status(500).send(err.message);
        }
    });
} catch (e) {
    console.error(e);
}

async function getComments(client, website) {
    const interlinkedDatabase = client.db('interlinked');
    const websitesCollection = interlinkedDatabase.collection('websites');
    const websites = await websitesCollection.find({}).toArray();
    // console.log(websites[0]);
    return Object.values(websites[0][website].comments);

};

app.listen(3000, () => {
    console.log(`Backend server is running on 3000`);
});