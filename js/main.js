let numberOfFilms = +prompt('скільки фільмів ви переглянули','');

const personalMovieDB = {
count : numberOfFilms,
movies : {},
actors : {},
genres : [],
privat : false
};

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

if(personalMovieDB.count <10){
    console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
}else{
    console.log(' ви кіноман');
}


console.log(personalMovieDB);
