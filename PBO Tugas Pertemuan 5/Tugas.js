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
      return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang`;
    }
  }
  
  class KapalPesiar extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahKabin) {
      super(nama, jenis, panjang, lebar);
      this.jumlahKabin = jumlahKabin;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahKabin} kabin`;
    }
  }
  
  class KapalTanker extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan) {
      super(nama, jenis, panjang, lebar);
      this.kapasitasMuatan = kapasitasMuatan;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki kapasitas muatan ${this.kapasitasMuatan} ton`;
    }
  }
  
  class KapalPerang extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahMeriam) {
      super(nama, jenis, panjang, lebar);
      this.jumlahMeriam = jumlahMeriam;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahMeriam} meriam`;
    }
  }
  
  class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalamanMaksimum) {
      super(nama, jenis, panjang, lebar);
      this.kedalamanMaksimum = kedalamanMaksimum;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini dapat menyelam hingga ${this.kedalamanMaksimum} meter`;
    }
  }
  
  const kapalFerry = new KapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600);
  console.log(kapalFerry.infoKapal());
  
  const kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 200, 100);
  const kapalPesiar = new Kapal("Titanic", "Pesiar", 300, 100);
  const kapalTanker = new KapalTanker("Sea Dragon", "Tanker", 250, 120, 50000);
  const kapalPerang = new KapalPerang("USS Nimitz", "Perang", 330, 78, 12);
  const kapalSelam = new KapalSelam("USS Virginia", "Selam", 150, 20, 400);
  
  console.log(kapalPenumpang.infoKapal());
  console.log(kapalPesiar.infoKapal());
  console.log(kapalTanker.infoKapal());
  console.log(kapalPerang.infoKapal());
  console.log(kapalSelam.infoKapal());