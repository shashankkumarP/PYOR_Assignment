import db from "./db.json"
export const FetchCryptoCurrencies = async(data:string[])=>{

    let check = ["ethereum","dogecoin","solana"];
    let database = JSON.parse(JSON.stringify(db));
    
    let promises_resolved = await Promise.all(data.map(async(el:any)=>{
        // console.log(database.sites[el]);
        let fetch_result = await fetch(database.sites[el.value]);
        let result =  fetch_result.json();
        return result;
     }));
    return promises_resolved
   



  



}