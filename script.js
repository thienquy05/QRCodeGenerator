//Declare elements to take input from user
const input = document.getElementById("input");
const qrContainer = document.getElementById("qr-code");
const genBtn = document.getElementById("generate-btn");
const dowBtn = document.getElementById("dowload-btn");
const clrBtn = document.getElementById("clear-btn");

let qr;

genBtn.addEventListener("click", () => {
    //Check if the input field is empty or not
    const text = input.value.trim();

    //If the input is empty -> send alert to user
    if (!text) {
        alert("Please enter text or link!");
        dowBtn.style.display = "none";
    }
    //Clear previous QR
    qrContainer.innerHTML = "";

    //Generate new QR
    qr = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height:256,
    });

    //Set time out -> wait for a moment to prepare for dowload
    setTimeout(() => {
        const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
        if (img) {
            const dataURl = img.src || img.toDataURL();
            dowBtn.href = dataURl;
            dowBtn.style.display = "inline-block";
        }
    }, 300);
});

