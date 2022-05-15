let numberOfFilms;

function start (){
    numberOfFilms = +prompt('скільки фільмів ви переглянули','');
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('скільки фільмів ви переглянули','');
    }
}
start();

const personalMovieDB = {
count : numberOfFilms,
movies : {},
actors : {},
genres : [],
privat : false
};

function rememberMyFilms (){
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
        b = prompt('На сколько оцените его?','');
    
        if(a != '' && b != '' && a.length < 50 && a != null && b != null){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('ERROR');
            i--;
        }
    }
}
rememberMyFilms ();

function levelMyFilm (){
    if(personalMovieDB.count <10){
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else{
        console.log(' ви кіноман');
    }
}
levelMyFilm ();


function showMyDB (hiden){
    (!hiden) ? console.log(personalMovieDB) : console.log('eror');

}

showMyDB (personalMovieDB.privat);

function writeYourGenres (){
    for(let i = 1; i <= 3; i++){
       let ganr = prompt(`Ваш любимый жанр под номером ${i}`,'');
       personalMovieDB.genres[i - 1] = ganr;
    }
}

writeYourGenres ();

