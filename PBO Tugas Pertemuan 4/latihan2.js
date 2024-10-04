class Kapal {
    constructor(nama, jenis, panjang, lebar){
        this.nama = nama,
        this.jenis = jenis,
        this.panjang = panjang,
        this.lebar = lebar
    }


infoKapal(){
    return 'Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.'
    }
}

class KapalPerang extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahMeriam) {
        super(nama, jenis, panjang, lebar)
        this.jumlahMeriam = jumlahMeriam
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahMeriam} meriam.`
    }

    serang() {
        return `Kapal ${this.nama} menyerang dengan ${this.jumlahMeriam} meriam!`
    }

    pertahanan() {
        return `Kapal ${this.nama} siap bertahan dengan ${this.jumlahMeriam} meriam!`
    }

    patroli() {
        return `Kapal ${this.nama} melakukan patroli di perairan.`
    }
}

class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalamanMaksimum) {
        super(nama, jenis, panjang, lebar)
        this.kedalamanMaksimum = kedalamanMaksimum
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menyelam hingga ${this.kedalamanMaksimum} meter.`
    }

    menyelam() {
        return `Kapal ${this.nama} menyelam ke kedalaman ${this.kedalamanMaksimum} meter.`
    }

    muncul() {
        return `Kapal ${this.nama} muncul ke permukaan air.`
    }

    deteksi() {
        return `Kapal ${this.nama} mendeteksi target di sekitar.`
    }

    serangBawahAir() {
        return `Kapal ${this.nama} menyerang target di bawah air.`
    }
}

class kapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang){
        super(nama, jenis, panjang, lebar)
        this.kapalPenumpang = kapalPenumpang
    }

    infoKapal(){
        return '${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang'
    }

}

const kapalFerry = new kapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal())

const kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 200, 100);
const kapalPesiar = new Kapal("Titanic","Pesiar, 300, 100");

const kapalPerang = new KapalPerang("Kapal Perang 1", "Perang", 150, 50, 10)
console.log(kapalPerang.infoKapal())
console.log(kapalPerang.serang())
console.log(kapalPerang.pertahanan())
console.log(kapalPerang.patroli())

const kapalSelam = new KapalSelam("Kapal Selam 1", "Selam", 100, 20, 500)
console.log(kapalSelam.infoKapal())
console.log(kapalSelam.menyelam())
console.log(kapalSelam.muncul())
console.log(kapalSelam.deteksi())
console.log(kapalSelam.serangBawahAir())


console.log(kapalPenumpang.infoKapal());
console.log(kapalPesiar.infoKapal());