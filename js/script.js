const textBox = document.getElementById('textbox');

textBox.addEventListener('change', function(){
    
    if(!checkText(textBox.value)){
        document.getElementById('encrypt').disabled = true;
        document.getElementById('decrypt').disabled = true;
        
        textBox.classList.add('redBorder');
    }
    else{
        document.getElementById('encrypt').disabled = false;
        document.getElementById('decrypt').disabled = false;

        textBox.classList.remove('redBorder');
    }
})

function updateResult(text){
    const result_div = document.getElementById('result');

    result_div.innerHTML = `
        <p id="result_text" class="result_text">${text}</p>
        <button class='btn copy' onClick="getText()">Copy</button>
    `;

}

function checkText(text){
    if(text === text.toLowerCase()){
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return !(specialChars.test(text))
    }
    else{
        return false;
    }
}

function encrypt(original_text){
    let result = '';
    let encrypting = original_text;

    for (let letter of encrypting){
        if(cryptRule[letter]){
            result += cryptRule[letter];
        }
        else{
            result += letter
        }
    }

    updateResult(result);
}

function submitEncrypt(){
    const original_text = textBox.value;
    encrypt(original_text);
}

function decrypt(original_text){
    let result = original_text;

    for (let key in cryptRule){
        result = result.replaceAll(cryptRule[key], key);
    }

    updateResult(result);
}

function submitDecrypt(){
    const original_text = textBox.value;
    decrypt(original_text);
}