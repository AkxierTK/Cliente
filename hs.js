

let div = document.createElement("div");
div.innerText = "Warlock";
div.addEventListener("click", function (e) {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Warlock", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "bea3a88772msh2555487164f5cccp1ff684jsnae9fa449a90a"
        }
    })
        .then(response => response.json())
        .then(response => {
            for (i = 0; i < response.length; i++) {
                let div2 = document.createElement("div");
                div2.innerText = response[i].name;
                div2.id=response[i].cardSet;
                let img= document.createElement("img");
                if(response[i].img){
                    img.src=response[i].img;
                }else{
                    img.src="https://images-ext-1.discordapp.net/external/i6TVz0akmMrjfkjCX02ybVRub8SBOfoxr1U0-i4Jkik/https/media.hearthpwn.com/attachments/104/137/classic.png";
                }
                div2.appendChild(img);
                div2.addEventListener("click", function (e) {
                    console.log(this.innerText);
                    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/"+this.innerText, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                            "x-rapidapi-key": "bea3a88772msh2555487164f5cccp1ff684jsnae9fa449a90a"
                        }
                    })
                        .then(response =>response.json())
                        .then(response=>{
                            for (j = 0; j < response.length; j++) {
                                if(response[j].cardSet==this.id){
                                    console.log(response[j].text);
                                }
                            }
                        })
                        .catch(err => {
                            console.error(err);
                        });
                })
                document.body.append(div2);
            }
        })
        .catch(err => {
            console.error(err);
        });
});
document.body.appendChild(div);