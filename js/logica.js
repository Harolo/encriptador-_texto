function encrypt() {
    const inputText = document.getElementById("textoUsuario").value;
    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayResult(encryptedText);
}

function decrypt() {
    const inputText = document.getElementById("textoUsuario").value;
    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayResult(decryptedText);
}


function displayResult(text) {
    const resultPanel = document.getElementById("resultPanel");
    resultPanel.innerHTML = `
         <div class="result-container result">
            <textarea class="result invisible-textarea">${text}</textarea>
        </div>
        <button class="copy-btn" title="Copiar texto" onclick="copyToClipboard('${text}')">Copiar</button>
    `;
}

function copyToClipboard(text) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Texto copiado al portapapeles");
}
