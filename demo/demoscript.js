playground.button.then(function(x){
    new x.MyButton().create(
        document.getElementById('host'), 
        { 
            text: 'click me!', 
            onClick: function(){ alert('hello'); }
        }
    );
});