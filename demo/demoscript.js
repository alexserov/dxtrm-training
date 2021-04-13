playground.button.then(function(x){
    x.createButton(document.getElementById('host'), 'text', function(){
        alert('hello');
    });
});