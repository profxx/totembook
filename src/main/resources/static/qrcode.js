/* const all = document.querySelector(".all");
const genBtn = document.querySelector("#generate-btn");
const qrInput = document.querySelector("#qr-input");
const qrImage = document.querySelector("#qr-image");
const qrContainer = document.querySelector(".qr-code");

genBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); // Obtém o valor do input sem espaços extras

    if (!qrValue) {
        alert("Por favor, insira um texto ou URL.");
        return;
    }

    // API do QuickChart para gerar QR Code
    let qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(qrValue)}&size=200`;

    qrImage.src = qrUrl;

    qrImage.onload = () => {
        all.classList.add("active");
        qrContainer.style.opacity = "1";
        qrContainer.style.pointerEvents = "auto";
    };

    qrImage.onerror = () => {
        alert("Erro ao carregar QR Code. Tente novamente.");
    };
}); */

const all = document.querySelector(".all");
const genBtn = document.querySelector("#generate-btn");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const qrInput = document.querySelector("#qr-input");
const qrImage = document.querySelector("#qr-image");
const qrContainer = document.querySelector(".qr-code");

genBtn.addEventListener("click", () => {
    // Obtém os valores dos campos de entrada e remove espaços extras
    let title = titleInput.value.trim();
    let author = authorInput.value.trim();
    let additionalInfo = qrInput.value.trim();

    // Verifica se algum campo está vazio
    if (!title || !author || !additionalInfo) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Combina todas as informações em uma string
    let qrValue = `Título: ${title}\nAutor: ${author}\nInformações adicionais: ${additionalInfo}`;

    // API do QuickChart para gerar QR Code
    let qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(qrValue)}&size=200`;

    // Define a URL da imagem do QR Code
    qrImage.src = qrUrl;

    // Quando a imagem do QR Code é carregada
    qrImage.onload = () => {
        all.classList.add("active");
        qrContainer.style.opacity = "1";
        qrContainer.style.pointerEvents = "auto";
    };

    // Caso haja erro ao carregar a imagem
    qrImage.onerror = () => {
        alert("Erro ao carregar QR Code. Tente novamente.");
    };
});