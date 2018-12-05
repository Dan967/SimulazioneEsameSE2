const express = require('express')
const square = require('./string_square');
const app = express()
const PORT = process.env.PORT || 3000
 
app.get('/', (req, res) => {
	res.send('Square String API');
});

app.get('/square/',(req,res) => {
	stringa = req.query.string;
	risultato = square.string_square(stringa);
	jsonresponse = {"result":risultato};
	res.json(jsonresponse);
});

 
app.listen(PORT, () => console.log('Example app listening on port '+ PORT))
