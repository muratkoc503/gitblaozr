window.generatePdf = function (elementId, filename) {
    const element = document.getElementById(elementId);

    const opt = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // html2pdf.js kullanarak PDF oluştur
    html2pdf().from(element).set(opt).save();
}