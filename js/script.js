var request = new XMLHttpRequest();

request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=z9qEJKCAcrrMCA7q77qHJXLDkv111Kra');

request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);

    console.log(parsedData);

}

request.send();