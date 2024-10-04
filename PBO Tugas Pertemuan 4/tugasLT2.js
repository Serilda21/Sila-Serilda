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
class KapalPerangLaut extends KapalPerang {
    constructor(nama, jenis, panjang, lebar, jumlahMeriam, kecepatan) {
        super(nama, jenis, panjang, lebar, jumlahMeriam)
        this.kecepatan = kecepatan
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kecepatan ${this.kecepatan} knot.`
    }

    menembak() {
        return `Kapal ${this.nama} menembakkan meriam dengan kecepatan ${this.kecepatan} knot!`
    }
}
class KapalPerangUdara extends KapalPerang {
    constructor(nama, jenis, panjang, lebar, jumlahMeriam, jumlahPesawat) {
        super(nama, jenis, panjang, lebar, jumlahMeriam)
        this.jumlahPesawat = jumlahPesawat
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahPesawat} pesawat tempur.`
    }

    menerbangkanPesawat() {
        return `Kapal ${this.nama} menerbangkan ${this.jumlahPesawat} pesawat tempur!`
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

class KapalSelamNuklir extends KapalSelam {
    constructor(nama, jenis, panjang, lebar, kedalamanMaksimum, dayaNuklir) {
        super(nama, jenis, panjang, lebar, kedalamanMaksimum)
        this.dayaNuklir = dayaNuklir
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki daya nuklir ${this.dayaNuklir} MW.`
    }

    mengaktifkanReaktor() {
        return `Kapal ${this.nama} mengaktifkan reaktor nuklir dengan daya ${this.dayaNuklir} MW!`
    }
}

class KapalSelamKonvensional extends KapalSelam {
    constructor(nama, jenis, panjang, lebar, kedalamanMaksimum, jumlahBaterai) {
        super(nama, jenis, panjang, lebar, kedalamanMaksimum)
        this.jumlahBaterai = jumlahBaterai
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahBaterai} baterai.`
    }

    mengisiBaterai() {
        return `Kapal ${this.nama} mengisi baterai sebanyak ${this.jumlahBaterai} unit!`
    }
}

class KapalCargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasKargo) {
        super(nama, jenis, panjang, lebar)
        this.kapasitasKargo = kapasitasKargo
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas kargo ${this.kapasitasKargo} ton.`
    }

    muatKargo() {
        return `Kapal ${this.nama} memuat kargo sebanyak ${this.kapasitasKargo} ton.`
    }

    bongkarKargo() {
        return `Kapal ${this.nama} membongkar kargo sebanyak ${this.kapasitasKargo} ton.`
    }

    pergiKePelabuhan() {
        return `Kapal ${this.nama} pergi ke pelabuhan untuk memuat kargo.`
    }

    kembaliKePelabuhan() {
        return `Kapal ${this.nama} kembali ke pelabuhan setelah membongkar kargo.`
    }
}

class KapalPenelitian extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahIlmuwan) {
        super(nama, jenis, panjang, lebar)
        this.jumlahIlmuwan = jumlahIlmuwan
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahIlmuwan} ilmuwan.`
    }

    melakukanPenelitian() {
        return `Kapal ${this.nama} melakukan penelitian di laut.`
    }

    mengumpulkanData() {
        return `Kapal ${this.nama} mengumpulkan data penelitian.`
    }

    menganalisisData() {
        return `Kapal ${this.nama} menganalisis data penelitian.`
    }

    publikasikanHasil() {
        return `Kapal ${this.nama} mempublikasikan hasil penelitian.`
    }
}

const kapalPerang = new KapalPerang("Kapal Perang 1", "Perang", 150, 50, 10)
console.log(kapalPerang.infoKapal());
console.log(kapalPerang.serang())
console.log(kapalPerang.pertahanan())
console.log(kapalPerang.patroli())

const kapalPerangLaut = new KapalPerangLaut("Kapal Perang Laut 1", "Perang Laut", 150, 50, 10, 30)
console.log(kapalPerangLaut.infoKapal())
console.log(kapalPerangLaut.menembak())

const kapalPerangUdara = new KapalPerangUdara("Kapal Perang Udara 1", "Perang Udara", 150, 50, 10, 20)
console.log(kapalPerangUdara.infoKapal())
console.log(kapalPerangUdara.menerbangkanPesawat())

const kapalSelam = new KapalSelam("Kapal Selam 1", "Selam", 100, 20, 500)
console.log(kapalSelam.infoKapal());
console.log(kapalSelam.menyelam())
console.log(kapalSelam.muncul())
console.log(kapalSelam.deteksi())
console.log(kapalSelam.serangBawahAir())

const kapalSelamNuklir = new KapalSelamNuklir("Kapal Selam Nuklir 1", "Selam Nuklir", 100, 20, 500, 100)
console.log(kapalSelamNuklir.infoKapal())
console.log(kapalSelamNuklir.mengaktifkanReaktor())

const kapalSelamKonvensional = new KapalSelamKonvensional("Kapal Selam Konvensional 1", "Selam Konvensional", 100, 20, 500, 50)
console.log(kapalSelamKonvensional.infoKapal())
console.log(kapalSelamKonvensional.mengisiBaterai())

const kapalCargo = new KapalCargo("Kapal Cargo 1", "Cargo", 200, 30, 5000)
console.log(kapalCargo.infoKapal());
console.log(kapalCargo.muatKargo())
console.log(kapalCargo.bongkarKargo())
console.log(kapalCargo.pergiKePelabuhan())
console.log(kapalCargo.kembaliKePelabuhan())

const kapalPenelitian = new KapalPenelitian("Kapal Penelitian 1", "Penelitian", 150, 25, 10)
console.log(kapalPenelitian.infoKapal());
console.log(kapalPenelitian.melakukanPenelitian())
console.log(kapalPenelitian.mengumpulkanData())
console.log(kapalPenelitian.menganalisisData())
console.log(kapalPenelitian.publikasikanHasil())