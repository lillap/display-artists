
function Artist(name, country, genre, lyricSnippet) {
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.lyricSnippet = lyricSnippet;
}

let artists = [];

function addArtist(){

    const artist1 = new Artist('Madonna', 'USA', 'Pop', 'bla');
    const artist2 = new Artist('Fleetwood Mac', 'UK', 'Blues/Pop/Rock', 'bla');
    const artist3 = new Artist('LÉON', 'Sweden', 'Pop','bla');
    const artist4 = new Artist('Christine and the Queens', 'France', 'Electronic pop', 'bla');
    const artist5 = new Artist('Led Zeppelin', 'UK', 'Rock', 'bla');
    const artist6 = new Artist('Florence + the Machine', 'UK', 'Soul/Rock', 'bla');

    artists.push(artist1, artist2, artist3, artist4, artist5, artist6);
    console.log(artists);
}

function populateRandomArtist(artists){
    return artists[Math.floor(Math.random()*artists.length)];
}

function perform(){
    
}

function printArtistDeck(){
    let str = '<div class="card-deck">';
    artists.forEach(function(artist) {

    str += '<div class="col-md-3 mb-3">' +
                '<div class="card">' + 
                    '<img src="..." class="card-img-top" alt="...">' +   
                    '<div class="card-body">' +
                        '<h5 class="card-title" id="artistName">' + artist.name +'</h5>' +
                        '<p id="countryOfOrigin">Country: ' + artist.country + '</p>' +
                        '<p id="genre">Genre: ' + artist.genre + '</p>' +
                        '<a href="#" class="btn btn-primary" id="getLyricsBtn">Get Lyric!</a>' + 
                        '<p class="card-text" id="stringLyric"> ' + '</p>' +
                    '</div>' +
                '</div>'+ 
            '</div>' 
  }); 
  
  str += '</div>';
  document.getElementById("cardContainer").innerHTML = str;
}
  addArtist();
  printArtistDeck();

const getLyricsBtn  = document.getElementById('getLyricsBtn');

getLyricsBtn.addEventListener('click', perform);