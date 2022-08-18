const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/:date', (req, res) => {
    let datestr = req.params.date;

    let testRegex1 = /\d{4}[-]\d{2}[-]\d{2}|\s/;

    let testRegex2 = /\d{10}/;

    if (testRegex1.test(datestr)) {
        let date = new Date(datestr);
        const unix = Math.floor(date.getTime() / 1000);
        return res.json({ unix: unix, utc: date.toUTCString() });
    } else if (testRegex2.test(datestr)) {
        let unix = parseInt(datestr);
        let date = new Date(unix);
        return res.json({ unix: unix, utc: date.toUTCString() });
    } else {
        return res.json({ error: 'Invalid Date' });
    }


}
);

app.listen(3000, () => {
    console.log('listening on port 3000');
    console.log('http://localhost:3000');
}
);
