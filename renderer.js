function sendToPython() {
  var python = require('child_process').spawn('python', ['./term.py']);
  
  python.stdout.on('data', function (data) {
    console.log("Python response: ", data.toString('utf8'));
    result.textContent = data.toString('utf8');
  });

}

btn1.addEventListener('click', () => {
  sendToPython();
});

btn.dispatchEvent(new Event('click'));
