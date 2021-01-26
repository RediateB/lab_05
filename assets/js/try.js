
  document.getElementById('buttons')
  .addEventListener('click', function(e) { 
       // Step 2
    if (e.target.className === 'buttonClass') {
      // Step 3
      console.log('Click!');
    }
  });
