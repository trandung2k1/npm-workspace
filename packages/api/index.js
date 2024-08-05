const sum = require('../../libs/math');
const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const rs = sum(1, 2);
    return res.status(200).json({
        result: rs,
    });
});

app.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}`);
});
