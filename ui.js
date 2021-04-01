class UI{
    constructor(){
        this.stats = document.getElementById('data');
    }

    showData(err){
        this.stats.innerHTML =`
        <div class="new-section">
            <div class="new countryname">
                <div class="head">
                  <small>Country</small>
                </div>
                <h3>${err.data.response[0].country}</h3>
            </div>
        </div>
        <div class="new-section">
        <div class="new continentname">
            <div class="head">
              <small>Continent & Date</small>
            </div>
            <h3>${err.data.response[0].continent}</h3>
            <small> ${err.data.response[0].day}</small>
        </div>
    </div>
     <div class="new-section">
                <div class="new ncase">
                        <div class="head">
                        <small>New Cases</small>
                        </div>
                    
                            <h3>${err.data.response[0].cases.new}</h3>
                </div>
                <div class="new ndeath">
                        <div class="head">
                        <small>New Deaths</small>
                        </div>

                            <h3>${err.data.response[0].deaths.new}</h3>
                </div>
        </div>


        <div class="new-section">

        <div class="new nrecover">
            <div class="head">
            <small>New Recovered</small>
            </div>
            
                <h3>${err.data.response[0].cases.recovered}</h3>
        </div>
        <div class="new tcases">
        <div class="head">
        <small>Total Cases</small>
        </div>
         
            <h3>${err.data.response[0].cases.total}</h3>
        </div>
</div>
        <div class="total-section">
              
                <div class="new tdeaths">
                <div class="head">
                <small>Total Deaths</small>
                </div>
                   
                    <h3>${err.data.response[0].deaths.total}</h3>
                </div>
                <div class="new ttests">
                <div class="head">
                    <small>Total Tests</small>
                </div>
                   
                    <h3>${err.data.response[0].tests.total}</h3>
                </div>
        </div>
        `;
    }

   
    showError(message,className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className =className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const search = document.querySelector('.header');

        container.insertBefore(div,search);
        
        setTimeout(()=>{
            this.clearAlert();
            
        },5000);

    }

    clearAlert(){
        const currentAlert =document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    cleardata(){
        this.profile.innerHTML='';
    }
}