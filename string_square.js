function string_square(s)
{
	if(s !== null && s !== undefined && typeof s === 'string')
	{
		lunghezza = s.length;
		risultato = lunghezza * lunghezza;
		return risultato;
	}
	else
	{
		return -1;
	}
}


module.exports = {string_square};
