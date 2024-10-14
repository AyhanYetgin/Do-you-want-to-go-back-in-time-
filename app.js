let currentDate = new Date(2024, 9, 14, 20, 52, 59); // Başlangıç tarihi: 14 Ekim 2024, saat 23:59:59

function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('datee');

    // Zamanı formatla ve göster
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Tarihi formatla ve göster
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Ayları 1'den başlatmak için +1
    const day = String(currentDate.getDate()).padStart(2, '0');
    dateElement.textContent = `${day}.${month}.${year}`;

    // Zamanı 1 saniye geri al
    currentDate.setSeconds(currentDate.getSeconds() - 1);

    // Eğer saat 00:00:00 olduysa tarih bir gün geriye git
    if (hours === '00' && minutes === '00' && seconds === '00') {
        currentDate.setDate(currentDate.getDate() - 1); // Tarihi bir gün geri al
    }
}

setInterval(updateTime, 1000); // Her saniyede bir güncellemeyi ayarla
updateTime(); // Sayfa yüklendiğinde hemen güncelle
