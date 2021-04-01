const cdata = new Corona;
const ui = new UI;
const searchCountry = document.getElementById('country');

searchCountry.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
  
    if(userText !== ''){
     // Make http call
     cdata.getData(userText)
      .then(err => {
        if(err.results === 0) {
          // Show alert
        showError('No Data Found','alert');
        } else {
          // Show profile
          console.log(err);
          ui.showData(err);
        }
      })
    } else {

      ui.cleardata();
    }
  }); 