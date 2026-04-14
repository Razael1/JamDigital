function updateJam() {
    const sekarang = new Date();
    
    // Format tanggal
    const optionsTanggal = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const tanggal = sekarang.toLocaleDateString('id-ID', optionsTanggal);
    document.getElementById('tanggal').textContent = tanggal;
    
    // Format jam
    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    const detik = sekarang.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('jam').textContent = `${jam}:${menit}:${detik}`;
}

// Update setiap detik
setInterval(updateJam, 1000);

// Update pertama kali saat halaman dimuat
updateJam();
