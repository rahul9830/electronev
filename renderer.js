function sendToPython() {
  var python = require('child_process').spawn('python', ['./term.py']);
  
  python.stdout.on('data', function (data) {
    console.log("Python response: ", data.toString('utf8'));
    result.textContent = data.toString('utf8');
  });

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

}

btn1.addEventListener('click', () => {
  sendToPython();
});

btn.dispatchEvent(new Event('click'));