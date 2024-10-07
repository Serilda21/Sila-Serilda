class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasKargo) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasKargo = kapasitasKargo;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas kargo sebesar ${this.kapasitasKargo} ton.`;
    }
}

class KapalLayar extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahLayar) {
        super(nama, jenis, panjang, lebar);
        this.jumlahLayar = jumlahLayar;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahLayar} layar.`;
    }
}

class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalamanMaks) {
        super(nama, jenis, panjang, lebar);
        this.kedalamanMaks = kedalamanMaks;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menyelam hingga kedalaman ${this.kedalamanMaks} meter.`;
    }
}

class KapalPerang extends Kapal {
    constructor(nama, jenis, panjang, lebar, persenjataan) {
        super(nama, jenis, panjang, lebar);
        this.persenjataan = persenjataan;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan persenjataan: ${this.persenjataan}.`;
    }
}

// Membuat beberapa objek dari kelas yang berbeda
const kapalFerry = new KapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal());

const kapalKargo = new KapalKargo("Kargo Besar", "Kargo", 300, 80, 10000);
console.log(kapalKargo.infoKapal());

const kapalLayar = new KapalLayar("Layar Cepat", "Layar", 50, 15, 3);
console.log(kapalLayar.infoKapal());

const kapalSelam = new KapalSelam("Selam Jaya", "Selam", 100, 10, 500);
console.log(kapalSelam.infoKapal());

const kapalPerang = new KapalPerang("Destroyer", "Perang", 150, 25, "Rudal, Meriam");
console.log(kapalPerang.infoKapal());
