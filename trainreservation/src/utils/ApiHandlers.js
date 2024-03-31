
export const sendHttpRequest = async (url , method, data) => {
    let returnData ;
    await fetch(url,{
        method : method ,
        body : JSON.stringify(data),
        headers : {'content-Type' : 'application/json'}
    }).then((response)=>{ return response.json()}).then((response)=>returnData=response).catch(err=>console.log(JSON.stringify(err)));
    return returnData;
}


export const connectToServerFunc = async (setIsConnected)=>{
    //const getHealthApi = `http://localhost:8000/api/v1/health`; 
     const getHealthApi ='https://jsonplaceholder.typicode.com/todos'
    try{
        const res = await sendHttpRequest(getHealthApi,`GET`);
        if(res ){
            console.log("connected to server!");
            setIsConnected(true);
        }
    }catch(err){
        console.log("error",err);
    }
}


export const getTrainData = async (setTrains) =>{
   // const getTrainsUrl = `http://localhost:8000/api/v1/trains/getTrains`;
   const getTrainsUrl ='https://jsonplaceholder.typicode.com/posts/1/comments';
    try{
        const res = await sendHttpRequest(getTrainsUrl,`GET`);
        if(res){
            console.log("got train data!",res);
            let tempTrainData = res;
            tempTrainData = tempTrainData.sort((a,b)=>a.id - b.id);
            setTrains(tempTrainData);
        }
    }catch(err){
        console.log("error",err);
    }

}
