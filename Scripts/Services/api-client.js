const URL = "https://raw.githubusercontent.com/Ayush502-cell/Pizzara-Food-orderin-app/main/Scripts/assets/pizza.json"
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
