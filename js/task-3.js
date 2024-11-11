function getElementWidth(content, padding, border) {
    // İçerik, padding ve border değerlerini px biriminden sayıya dönüştürmek için parseFloat kullanılır
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Her iki kenar için padding eklenecek
    const borderWidth = parseFloat(border) * 2; // Her iki kenar için border eklenecek

    // Border-box için toplam genişlik hesaplama
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    return `${totalWidth}px`; 
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

