const request = new XMLHttpRequest();

    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    
    request.send();
    
    

    request.onload = () => {
        var data = JSON.parse(request.response);

        console.log("1st QUESTION") // Show diffrence between questions in console


        const flags = data.map((data) => `name : ${data.name} - flag : ${data.flag}`);
        for(let i=0; i<flags.length ; i++){
            console.log(flags[i])
        }
        
        // data.forEach((element) => console.log(element.flag))
        console.log("2nd QUESTION") // Show diffrence between questions in console
        
        const details = data.map((data) => ` NAME : ${data.name} , REGION : ${data.region} , SUB-REGION : ${data.subregion} , POPULATION : ${data.population}` );
        for(let j=0; j<details.length ; j++){
                 console.log(details[j])
                }

            }