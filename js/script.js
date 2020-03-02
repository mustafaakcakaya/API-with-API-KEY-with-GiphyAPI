var request = new XMLHttpRequest();

request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=z9qEJKCAcrrMCA7q77qHJXLDkv111Kra&tag=squirrel&rating=g');

request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    var originalUrl = parsedData.data.url;
    console.log(originalUrl);


    var gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);

}

request.send();