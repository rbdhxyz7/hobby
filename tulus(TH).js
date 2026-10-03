const lyrics = [
  "Tak ada yang hilang dariku belakangan",
  "Sedang tak mudah bertemu rasa senang",
  "Sedang kucari yang jadi pencetusnya",
  "Mungkin hilangnya atau siklus hidupku",
  "Mungkin aku sedang tak bisa",
  "Tak bisa jatuh cinta",
  "Membuka hati tuk apapun siapapun",
  "Dan mungkin aku memang sedang tak bisa",
  "Tak bisa jatuh cinta",
  "Membuka hati tuk apapun siapapun"
];

// Fungsi delay dalam milidetik
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function startLyrics() {
  // Clear terminal di awal
  console.clear();

  for (const line of lyrics) {
    // Ketik per-huruf
    for (const char of line) {
      process.stdout.write(char);
      await sleep(50); // Kecepatan ketik (50ms per huruf)
    }

    // Tahan kalimat sejenak setelah selesai diketik
    await sleep(1500);

    // Hapus layar terminal sebelum kalimat berikutnya
    console.clear();
  }

  console.log("thx ✨");
}

startLyrics();