function randomQuotes(){

    var userName = ["-- Oscar Wilde","-- Mahatma Gandhi","-- Frank Zappa","-- Marcus Tullius Cicero","-- Mae West"];

    var text = [
        '"Be yourself; everyone else is already taken."',
        '"Be the change that you wish to see in the world."',
        '"So many books, so little time."',
        '"A room without books is like a body without a soul."',
        '"You only live once, but if you do it right, once is enough."'
    ];
    
    var num = Math.floor(Math.random() * userName.length);
    
    document.getElementById("demo1").innerHTML=(text[num]);
    document.getElementById("demo2").innerHTML=(userName[num]);
    
    return num;
    
}
