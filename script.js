document.getElementById("encrypt-btn").addEventListener("click", function() {
    let text = document.getElementById("input-text").value;
    let encryptedText = encryptText(text);
    updateOutput(encryptedText);
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let text = document.getElementById("input-text").value;
    let decryptedText = decryptText(text);
    updateOutput(decryptedText);
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function updateOutput(result) {
    const outputText = document.getElementById("output-text");
    const placeholder = document.querySelector(".output-placeholder");

    if (result) {
        outputText.value = result;
        outputText.style.display = "block";
        placeholder.style.display = "none";
    } else {
        outputText.style.display = "none";
        placeholder.style.display = "block";
    }
}
