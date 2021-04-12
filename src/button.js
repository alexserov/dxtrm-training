function createButton(node, text, callback){    
    let textContainer = document.createElement('div');
    textContainer.innerText = text;    
    node.classList.add('my-button');
    node.appendChild(textContainer);
    node.addEventListener('click', callback);
}

exports.createButton = createButton;