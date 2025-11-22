const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ca23aee271msh59d3219de954ba2p18b47ejsn29e440c1d133',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}