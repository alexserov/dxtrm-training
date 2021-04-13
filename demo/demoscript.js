new playground.MyButton(
        document.getElementById('button1'), 
        { 
            text: 'Simple button', 
            onClick: function(){ alert('simple button clicked'); }
        }
    );

new playground.MaterialButton(
        document.getElementById('button2'), 
        { 
            text: 'Material button', 
            onClick: function(){ alert('Material button clicked'); },
            color: '#65bff0'
        }
    );
