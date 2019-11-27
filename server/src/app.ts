import express = require('express');
import * as cors from "cors";

const app = express();
app.use(cors());
// app.options('*', cors());
const port = 9000; // default port to listen

// define a route handler for the default home page
app.get('/', (req: any, res: any) => {
    res.send('Hello world!');
});

app.get('/test', (req: any, res: any) => {
    const messages = [
        {
            title: "title 1 ahsdf hasdfh ashdf ",
            text: "text 1",
        },

        {
            title: "title 2",
            text: "text 2",
        },

        {
            title: "title 3",
            text: "text 3",
        },
    ]
    res.send(messages);
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
