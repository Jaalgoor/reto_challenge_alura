// Función para encriptar el texto
function encryptText() {
    const text = document.getElementById('inputText').value;
    if (text === '') {
        alert('Por favor, ingresa algún texto para encriptar.');
        return;
    }
    const encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    // Actualiza el texto encriptado
    document.getElementById('outputText').innerText = encryptedText;

    // Cambia la imagen de fondo
    document.getElementById('backgroundImage').src = './img/Encriptado.jpeg';
}

// Función para desencriptar el texto
function decryptText() {
    const text = document.getElementById('inputText').value;
    if (text === '') {
        alert('Por favor, ingresa algún texto para desencriptar.');
        return;
    }
    const decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    // Actualiza el texto desencriptado
    document.getElementById('outputText').innerText = decryptedText;

    // Cambia la imagen de fondo de vuelta a la original
    document.getElementById('backgroundImage').src = './img/compu_lupa.jpeg';
}

// Event listeners para los botones
document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
