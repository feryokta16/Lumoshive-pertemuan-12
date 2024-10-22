// Sistem Pengelolaan Kendaraan Transportasi Umum

// Buatlah sistem pengelolaan kendaraan transportasi umum yang mendukung beberapa jenis kendaraan seperti Bus, Taksi, dan Angkutan Kota (Angkot). Setiap kendaraan memiliki tarif berbeda dan cara perhitungan biaya yang unik:
// 1. Bus:
// a. Tarif per kilometer adalah Rp 2.000.
// b. Memberikan diskon 15% jika jarak perjalanan lebih dari 50 km.
// 2. Taksi:
// a. Tarif dasar adalah Rp 10.000 (fixed charge).
// b. Tarif per kilometer adalah Rp 3.500.
// c. Biaya perjalanan dihitung dengan menambahkan tarif dasar ke total biaya perjalanan.
// 3. Angkot:
// a. Tarif tetap sebesar Rp 5.000 per perjalanan tanpa memperhitungkan jarak.
// Tugas:
// · Buat class Transport sebagai class induk dengan method calculateFare(distance) untuk menghitung biaya perjalanan.
// · Buat subclass Bus, Taksi, dan Angkot yang mewarisi class Transport, masing-masing dengan logika perhitungan biaya spesifik.
// · Buat array berisi instance dari ketiga jenis kendaraan dan buat loop untuk menghitung serta menampilkan biaya perjalanan masing-masing untuk jarak 30 km dan 70 km.

class Trasport {
  constructor(type, pricePerKm) {
    this.type = type;
    this.pricePerKm = pricePerKm;
  }
  calculateFare(distance) {
    return this.pricePerKm * distance;
  }
}

class Bus extends Trasport {
  constructor() {
    super("Bus", 2000);
  }
  calculateFare(distance) {
    let fare = super.calculateFare(distance);
    if (distance > 50) {
      fare *= 0.85; // untuk mendapatkan dikon 85%
    }
    return fare;
  }
}

class Taksi extends Trasport {
  constructor() {
    super("Taksi", 3500);
    this.fixedCharge = 10000;
  }
  calculateFare(distance) {
    return this.fixedCharge + super.calculateFare(distance);
  }
}

class Angkot extends Trasport {
  constructor() {
    super("Angkot", 5000);
  }

  calculateFare() {
    return this.pricePerKm;
  }
}

const transports = [new Bus(), new Taksi(), new Angkot()];
function displayFares(distance) {
  transports.map((transport) => {
    console.log(
      ` biaya perjalanan dengan ${
        transport.type
      } untuk ${distance} km adalah ${transport.calculateFare(distance)}`
    );
  });
}

// console.log("===================jarak 30km=============================");
// displayFares(30);
// console.log("===================jarak 70km=============================");
// displayFares(70);

// Sistem Pengelolaan Reservasi Hotel
// Buat sistem reservasi hotel dengan beberapa tipe kamar, yaitu Standard Room, Deluxe Room, dan Suite Room, dengan aturan berikut:
// 1. Standard Room:
// a. Harga per malam: Rp 500.000.
// b. Tidak ada fasilitas tambahan.
// 2. Deluxe Room:
// a. Harga per malam: Rp 1.000.000.
// b. Termasuk sarapan gratis.
// 3. Suite Room:
// a. Harga per malam: Rp 2.000.000.
// b. Memberikan diskon 10% jika menginap lebih dari 3 malam dan termasuk akses kolam renang gratis.
// Tugas:
// · Buat class Room sebagai class induk dengan method calculateTotalPrice(nights) untuk menghitung total harga.
// · Buat subclass StandardRoom, DeluxeRoom, dan SuiteRoom yang mewarisi class Room dan menerapkan logika spesifik sesuai tipe kamar.
// · Buat array berisi beberapa contoh pemesanan kamar dan tampilkan total harga masing-masing untuk 2 dan 5 malam.

class Room {
  constructor(type, pricePerNight) {
    this.type = type;
    this.pricePerNight = pricePerNight;
    this.facilities = [];
  }
}

class StandardRoom extends Room {
  constructor() {
    super("Standard Room", 500000);
    this.facilities.push("No Facilities");
  }
}
class DeluxeRoom extends Room {
  constructor() {
    super("Deluxe Room", 1000000);
    this.facilities.push("Free Breakfast");
  }
}
class SuiteRoom extends Room {
  constructor() {
    super("Suite Room", 2000000);
    this.facilities.push("Free Swimming Pool Access");
  }
  calculateTotalPrice(nights) {
    let totalPrice = this.pricePerNight * nights;
    if (nights > 3) {
      totalPrice *= 0.9;
    }
    return totalPrice;
  }
}
const rooms = [new StandardRoom(), new DeluxeRoom(), new SuiteRoom()];
function displayTotalPrice(nights) {
  rooms.map((room) => {
    if (room instanceof SuiteRoom) {
      console.log(
        `Total harga untuk ${
          room.type
        } untuk ${nights} malam adalah ${room.calculateTotalPrice(
          nights
        )}, dengan fasilitas ${room.facilities}`
      );
    } else {
      console.log(
        `Total harga untuk ${room.type} untuk ${nights} malam adalah ${
          room.pricePerNight * nights
        }, dengan fasilitas ${room.facilities}`
      );
    }
  });
}
// console.log("===================2 malam=============================");
// displayTotalPrice(2);
// console.log("===================5 malam=============================");
// displayTotalPrice(5);

// Buat sistem inventarisasi toko elektronik dengan beberapa jenis produk seperti Laptop, Smartphone, dan Tablet, di mana setiap produk memiliki cara berbeda dalam menentukan garansi dan harga jual:
// 1. Laptop:
// a. Garansi: 2 tahun.
// b. Harga jual ditambahkan biaya pajak 10%.
// 2. Smartphone:
// a. Garansi: 1 tahun.
// b. Mendapat diskon 5% jika dibeli lebih dari 1 unit.
// 3. Tablet:
// a. Garansi: 6 bulan.
// b. Harga jual tetap tanpa pajak atau diskon.
// Tugas:
// · Buat class Product sebagai class induk dengan method calculatePrice(quantity, basePrice) untuk menghitung harga total.
// · Buat subclass Laptop, Smartphone, dan Tablet dengan logika berbeda untuk perhitungan harga dan garansi.
// · Tampilkan informasi produk dan harga total untuk setiap jenis produk dalam array.

class Product {
  constructor(name, basePrice) {
    this.name = name;
    this.basePrice = basePrice;
  }
  calculatorPrice(quantity) {
    return this.basePrice * quantity;
  }
  getInfo() {
    return `product:${this.name},`;
  }
}

class Laptop extends Product {
  constructor(basePrice) {
    super("Laptop", basePrice);
    this.garansi = "2 tahun";
  }
  calculatorPrice(quantity) {
    return this.basePrice * quantity * 1.1;
  }
  getInfo() {
    return `product:${this.name}, dikenakan pajak 10% dengan garansi:${this.garansi},`;
  }
}

class Smartphone extends Product {
  constructor(basePrice) {
    super("Smartphone", basePrice);
    this.garansi = "1 tahun";
  }
  calculatorPrice(quantity) {
    let finalPrice = this.basePrice * quantity;
    if (quantity > 1) {
      finalPrice *= 0.95;
    }
    return finalPrice;
  }
  getInfo(quantity) {
    if (quantity > 1) {
      return `product:${this.name}, mendapat diskon 5% dengan garansi:${this.garansi},`;
    } else {
      return `product:${this.name}, garansi:${this.garansi},`;
    }
  }
}

class Tablet extends Product {
  constructor(basePrice) {
    super("Tablet", basePrice);
    this.garansi = "6 bulan";
  }

  calculatorPrice(quantity) {
    return this.basePrice * quantity;
  }
  getInfo() {
    return `product:${this.name}, garansi:${this.garansi},`;
  }
}
const products = [
  new Laptop(1000000),
  new Smartphone(500000),
  new Tablet(300000),
];
function displayProducts(quantity) {
  products.map((product) => {
    console.log(
      `${product.getInfo(quantity)} harga total: ${product.calculatorPrice(
        quantity
      )}`
    );
  });
}
// displayProducts(1);
// console.log("==============2 unit=======================");
// displayProducts(2);

// Sistem Penilaian Akademik Online

// Buat sistem penilaian akademik untuk dua jenis pengguna, yaitu Dosen dan Mahasiswa, dengan aturan berikut:
// 1. Dosen:
// a. Dapat memberikan nilai kepada mahasiswa.
// b. Hanya dapat melihat dan mengedit nilai mahasiswa.
// 2. Mahasiswa:
// a. Dapat melihat nilai yang diberikan oleh dosen.
// b. Tidak bisa mengubah nilai.
// Tugas:
// · Buat class User sebagai class induk dengan method getRole() untuk menampilkan peran pengguna.
// · Buat subclass Dosen dan Mahasiswa dengan properti dan method tambahan yang sesuai.
// · Simulasikan interaksi di mana dosen memberikan nilai kepada mahasiswa, dan mahasiswa dapat melihat nilai tersebut tetapi tidak bisa mengubahnya.

class User {
  constructor(name) {
    this.name = name;
  }
  getRole() {
    return this.constructor.name;
  }
}

class Dosen extends User {
  constructor(name) {
    super(name);
    this.grades = {};
  }
  setGrade(mahasiswa, grade) {
    this.grades[mahasiswa.name] = grade;
    console.log(
      `${this.name} memberikan nilai ${grade} kepada ${mahasiswa.name}`
    );
  }
  viewGrades() {
    console.log(`nilai yang diberikan oleh bapak ${this.name}`);
    for (const [student, grade] of Object.entries(this.grades)) {
      console.log(`${student}: ${grade}`);
    }
  }
}
class Mahasiswa extends User {
  constructor(name) {
    super(name);
    this.grades = {};
  }
  viewGrades() {
    if (this.grade === null) {
      console.log(`${this.name} tidak memiliki nilai`);
    } else {
      console.log(`${this.name} memiliki nilai ${this.grade}`);
    }
  }

  reciveGrade(grade) {
    this.grade = grade;
  }
}

const dosen = new Dosen("Mr Deni");
const dosen2 = new Dosen("Mr Siddik");
const mahasiswa1 = new Mahasiswa("fery");
const mahasiswa2 = new Mahasiswa("john");

console.log(dosen.getRole());

dosen.setGrade(mahasiswa1, 80);
dosen.setGrade(mahasiswa2, 80);

dosen2.setGrade(mahasiswa1, 90);
dosen2.setGrade(mahasiswa2, 90);

dosen2.viewGrades();
dosen.viewGrades();
