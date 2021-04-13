let button1 = new playground.MyButton(
        document.getElementById('button1'), 
        { 
            text: 'Simple button', 
            onClick: function(){ alert('simple button clicked'); }
        }
    );

let button2 = new playground.MaterialButton(
        document.getElementById('button2'), 
        { 
            text: 'Material button', 
            onClick: function(){ alert('Material button clicked'); },
            color: '#65bff0'
        }
    );

document.getElementById('update').addEventListener('click', ()=>{
    button1.option({
        text: 'Simple button UPDATED'
    });
    button2.option({
        text: 'Material button UPDATED',
        color: '#12c921'
    });
});
