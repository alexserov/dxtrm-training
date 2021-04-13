playground.button.then(function(x){
    new x.MyButton().create(
        document.getElementById('button1'), 
        { 
            text: 'Simple button', 
            onClick: function(){ alert('simple button clicked'); }
        }
    );
});

playground.materialButton.then(function(x){
    new x.MaterialButton().create(
        document.getElementById('button2'), 
        { 
            text: 'Material button', 
            onClick: function(){ alert('Material button clicked'); },
            color: '#65bff0'
        }
    );
});
