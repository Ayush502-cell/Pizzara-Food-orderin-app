// Glue between UI and Model
function doNetworkCall(){
    const URL = "https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json";
    const promise = fetch(URL);
    console.log("promise is : ",promise);
    promise.then(response=>{
        console.log("response is : ",response);
        const promise2 = response.json();
        promise2.then(data=>console.log("Data is",data))
        .catch(e=>console.log("JSON parse error",e))
    }).catch(err=>{
        console.log("error is : ",err);
    })
}