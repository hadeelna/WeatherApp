
 export async function fetchAllSearches(search){
    let url=new URL("http://localhost:9000/geolocations?")
    for  (const [key , value] of Object.entries(search))
    
    {
        // each entry is an array: 
        // entry[0]=key
        // entry[1]=value
        if (value !==""){
       // key="location
            url.searchParams.append(key,value)
                url+="&appid=fa334dd47fad955abd704d8ba25e38c9"
            }
    }
    return await fetch(url);

}


