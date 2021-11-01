import express from 'express';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('The sedulous hye$$$$$$$$$fewfna ate the antelope!');
});


app.listen(PORT, HOST, () => {
    return console.log(`server is listening on ${PORT}`);
});
