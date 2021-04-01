class Corona{
    constructor(){

    }
    async getData(country){
        const request = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "2d2dd50068msh6137922e1f974acp17aa0bjsn8a46d60e282f",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
        })
            const data = await request.json();
        
        return{
            data
        }
    }
  

}
