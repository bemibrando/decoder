function updateResult(text){
    const result_div = document.getElementById('result');

    result_div.innerHTML = `
        <p id="result_text" class="result_text">${text}</p>
        <button class='btn copy' onClick="getText()">Copy</button>
    `;

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
    const original_text = document.getElementById('textbox').value;
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
    const original_text = document.getElementById('textbox').value;
    decrypt(original_text);
}