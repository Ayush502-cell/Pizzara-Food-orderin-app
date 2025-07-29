const URL = "https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json";
async function makeNetworkCall(){
    try{
        const response = await fetch(URL);
        const object = await response.json();
        return object;
    }
    catch(err){
        console.log("Some problem in api call",err);
        throw err;
    }
}
export default makeNetworkCall;
