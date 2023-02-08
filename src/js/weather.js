export async function fetchWeather(Weather){
    let url=new URL("http://localhost:9000/weather?")
    for  (const [key,value] of Object.entries(Weather))
        
    {
       // each entry is an array: 
      //  entry[0]=key
       // entry[1]=value
       if (value !=="")
           url.searchParams.append(key, value);
   }
   url+="&appid=fa334dd47fad955abd704d8ba25e38c9&units=metric"
   console.log(url)
    return await fetch(url);
}

export async function postNewWeather(weather){
    return await fetch('http://localhost:9000/geolocations/hadel',
    {
        method: 'POST',
        headers : {
            'Accept':'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(weather)
    })
}
export async function GetAllWeather(){
    return await fetch('http://localhost:9000/weather/all/hadel?appid=fa334dd47fad955abd704d8ba25e38c9',
    {
        method: 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}