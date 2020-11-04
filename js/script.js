
let artists = [];

const artist1 = new Artist('Madonna', 'USA', 'Pop', 'resources/madonna.jpg');
const artist2 = new Artist('Fleetwood Mac', 'UK', 'Blues/Pop/Rock','resources/fleetwood.jpg');
const artist3 = new Artist('LÉON', 'Sweden', 'Pop','resources/leon.jpg');
const artist4 = new Artist('Christine and the Queens', 'France', 'Electronic pop','resources/christine.jpg');
const artist5 = new Artist('Led Zeppelin', 'UK', 'Rock', 'resources/zeppelin.jpg');
const artist6 = new Artist('Florence + the Machine', 'UK', 'Soul/Rock','resources/florence.jpg');
const artist7 = new Artist('ABBA', 'Sweden', 'Disco/Pop/Schlager', 'resources/abba.jpg');
const artist8 = new Artist('Death Cab for Cutie', 'USA', 'Indie','resources/deathcab.jpg');

artists.push(artist1, artist2, artist3, artist4, artist5, artist6, artist7, artist8);

let artistSongLyric = new Map([
    [artist1.name,'You´re so consumed with how much you get, You waste your time with hate and regret'],
    [artist2.name, 'Tell me lies, tell me sweet little lies'],
    [artist3.name, 'Maybe we´ve been chasing a feeling, maybe it can be like before'],
    [artist4.name, 'Voglio che tu mi tocchi con la tua rabbia, voglio che tu mi tocchi con il tuo furore'],
    [artist5.name, 'But now it´s time for me to go, the autumn moon lights my way'],
    [artist6.name, 'That´s the last song you´ll ever sing, held him down, broke his neck'],
    [artist7.name, 'So when you´re near me, darling can´t you hear me S. O. S. The love you gave me, nothing else can save me'],
    [artist8.name, 'Flying in circles inside a jar, `cause the air we breathe, is thinning with the words that we speak']
])

function Artist(name, country, genre,img) {
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.img = img;
    this.perform = () => artistSongLyric.get(name);
}

function createArtistCard(artist) {
    return '<div class="card">' + 
        '<img src="' + artist.img + '" class="card-img-top" alt="">' +   
        '<div class="card-body">' +
            '<h5 class="card-title" id="artistName">' + artist.name +'</h5>' +
            '<p id="countryOfOrigin"><strong>Country: </strong>' + artist.country + '</p>' +
            '<p id="genre"><strong>Genre: </strong>' + artist.genre + '</p>' +
            '<p class="card-text" id="stringLyric"><strong>Lyrics: </strong><i>' +  artist.perform() + '</i></p>' +
        '</div>' +
    '</div>'
}

function printArtistDeck(){
    let str = '<div class="card-deck">';
    
    artists.forEach(function(artist) {
        str += '<div class="col-md-3 mb-3">' + createArtistCard(artist) + '</div>';
    }); 
  
    str += '</div>';
    document.getElementById("cardContainer").innerHTML = str;
}

function populateRandomArtist(){
    const randomArtist = artists[Math.floor(Math.random()*artists.length)];
    const artistOfTheDay = createArtistCard(randomArtist);
    document.getElementById("artistOfTheDay").innerHTML = artistOfTheDay;

}
printArtistDeck();
populateRandomArtist();


