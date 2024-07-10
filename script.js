function encrypt() {
    const message = document.getElementById("message").value;
    const lowercaseOnly = document.getElementById("lowercaseOnly").checked;
    let encryptedMessage = message;

    if (lowercaseOnly) {
        encryptedMessage = encryptedMessage.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Simples criptografia de substituição (exemplo: substituir cada letra pelo próximo caractere no alfabeto)
    encryptedMessage = encryptedMessage.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
        }
        return char;
    }).join('');

    document.getElementById("outputMessage").value = encryptedMessage || "Nenhuma mensagem encontrada";
}

function decrypt() {
    const message = document.getElementById("message").value;
    const lowercaseOnly = document.getElementById("lowercaseOnly").checked;
    let decryptedMessage = message;

    if (lowercaseOnly) {
        decryptedMessage = decryptedMessage.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Descriptografia correspondente (exemplo: substituir cada letra pelo caractere anterior no alfabeto)
    decryptedMessage = decryptedMessage.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 - 1 + 26) % 26) + 97);
        }
        return char;
    }).join('');

    document.getElementById("outputMessage").value = decryptedMessage || "Nenhuma mensagem encontrada";
}

function copyToClipboard() {
    const outputMessage = document.getElementById("outputMessage");
    outputMessage.select();
    outputMessage.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Mensagem copiada!");
}
