function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

  if(h==0) {
    h=12;
  }

    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}




function genQuote() {
 var randNum = Math.floor(Math.random() * 8) + 1;
 document.getElementById('quote').innerHTML = quotes[randNum];
 var tweetQuote = quotes[randNum].split(' ').join('%20');
 tweetQuote = tweetQuote.split('<br>').join('');
 tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
 $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", "\"Nothing can dim the light that shines from within.\"<br>- Maya Angelou","\"Good things come to people who wait, but better things come to those who go out and get them.\"<br>- <small><em>(Unknown)</em></small>", "\"The key to success is to focus on goals, not obstacles.\"<br>- <small><em>(Unknown)</em></small>", "\"Do not wait for opportunity. Create it.\"<br>-<small><em>(Unknown)</em></small>",
"\"Impossible is just an opinion.\"<br> - Paulo Coelho", "\"Great things never come from comfort zone.\"<br>- <small><em>(Unknown)</em></small>",
"\"It always seems impossible until it's done.\"<br>- Nelson Mandela", "\"One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.\"<br>- Michelle Obama", "\"Be thankful for what you have; you’ll end up having more. If you concentrate on what you don’t have, you will never, ever have enough.\"<br>- Oprah Winfrey", "\"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.\"<br>- Dale Carnegie", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",];

//date
function startDate() {
 var d = new Date();
 var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}














/* var quotes = [
  'blanxejej',
  'kswmwkswsmws',
  'soreya die sau'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('displayQuote').innerHTML = quotes[randomNumber];

}  */
