var numberofSongButtons= document.querySelectorAll("button").length;
for(i=0;i<numberofSongButtons;i++){
    document.querySelectorAll(".music")[i].addEventListener("click",function(){
        var innerHtmlText= this.innerHTML;
        switch(innerHtmlText){
            case  "😍" :
                var song1=new Audio("song1.mp3.mp3");
                song1.play();
                break;
            case "😠":
                var song2=new Audio("song2.mp3.mp3");
                song2.play();
                break;
            case "😪":
                var song3=new Audio("song3.mp3.mp3");
                song3.play();
                break;
            case "🤩":
                var song4=new Audio("song4.mp3.mp3");
                song4.play();
                break;
            case "😀":
                var song5=new Audio("song5.mp3.mp3");
                song5.play();
                break;
            case "🥰":
                var song6=new Audio("song6.mp3.mp3");
                song6.play();
                break;
            case "😚":
                var  song7=new Audio("song7.mp3.mp3");
                song7.play();
                break;
            case  "😋" :
                var song8=new Audio("song8.mp3.mp3");
                song8.play();
                break;

            case  "🤗" :
                var song9=new Audio("song9.mp3.mp3");
                song9.play();
                break;

            case  "😆" :
                var song10=new Audio("song10.mp3.mp3");
                song10.play();
                break;

            case  "😘" :
                var song11=new Audio("song11.mp3.mp3");
                song11.play();
                break;

            case  "😫" :
                var song12=new Audio("song12.mp3.mp3");
                song12.play();
                break;

            case  "😉" :
                var song13=new Audio("song13.mp3.mp3");
                song13.play();
                break;

            case  "😭" :
                var song14=new Audio("song14.mp3.mp3");
                song14.play();
                break;

            case  "😢" :
                var song15=new Audio("song15.mp3.mp3");
                song15.play();
                break;

            case  "😞" :
                var song16=new Audio("song16.mp3.mp3");
                song16.play();
                break;

            case  "😴" :
                var song17=new Audio("song17.mp3.mp3");
                song17.play();
                break;

            case  "🙃" :
                var song18=new Audio("song18.mp3.mp3");
                song18.play();
                break;

            case  "😙" :
                var song19=new Audio("song19.mp3.mp3");
                song19.play();
                break;

            case  "😝" :
                var song20=new Audio("song20.mp3.mp3");
                song20.play();
                break;

        }
    });



}