const API_KEY = "keyNmRNp3M2oIpnfF"
const GENERERIC_URL = "https://api.airtable.com/v0/app4MqpvYJy5fPAhr"

export const generateURL = (tableName, itemId)=>{
  let url = `${GENERERIC_URL}/${tableName}?api_key=${API_KEY}`;
  if(itemId){
    url =  `${GENERERIC_URL}/${tableName}/${itemId}?api_key=${API_KEY}`;
  }
  return url;
}