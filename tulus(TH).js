const lyrics = [
  { text: "Tak ada yang hilang dariku belakangan", speed: 60, pause: 1400 },
  { text: "Sedang tak mudah bertemu rasa senang", speed: 60, pause: 1400 },
  { text: "Sedang kucari yang jadi pencetusnya", speed: 60, pause: 1400 },
  { text: "Mungkin hilangnya atau siklus hidupku", speed: 70, pause: 1600 },
  { text: "Mungkin aku sedang tak bisa", speed: 80, pause: 1500 },
  { text: "Tak bisa jatuh cinta", speed: 90, pause: 1800 },
  { text: "Membuka hati tuk apapun siapapun", speed: 50, pause: 1600 },
  { text: "Dan mungkin aku memang sedang tak bisa", speed: 80, pause: 1500 },
  { text: "Tak bisa jatuh cinta", speed: 90, pause: 1800 },
  { text: "Membuka hati tuk apapun siapapun", speed: 50, pause: 2000 }
];

const emotes = ["🍃", "🍵", "🌱", "✨", "💚", "🌿", "🎶", "🌸"];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Fungsi untuk mencetak teks tepat di tengah terminal
function printCentered(text) {
  const termWidth = process.stdout.columns || 80; // Lebar terminal
  const textLength = text.length;
  const padding = Math.max(0, Math.floor((termWidth - textLength) / 2));
  return " ".repeat(padding) + text;
}

// Fungsi untuk memilih emote acak
function getRandomEmote() {
  return emotes[Math.floor(Math.random() * emotes.length)];
}

async function startLyrics() {
  console.clear();

  for (const item of lyrics) {
    const topEmote = getRandomEmote();
    const bottomEmote = getRandomEmote();

    // 1. Tampilkan emote atas di tengah
    console.log("\n\n"); // Jeda baris atas
    console.log(printCentered(`~ ${topEmote} ~`));
    console.log("\n");

    // 2. Hitung spasi awal agar teks lirik berada di tengah saat diketik
    const termWidth = process.stdout.columns || 80;
    const padding = Math.max(0, Math.floor((termWidth - item.text.length) / 2));
    process.stdout.write(" ".repeat(padding));

    // 3. Ketik lirik per-huruf
    for (const char of item.text) {
      process.stdout.write(char);
      await sleep(item.speed);
    }

    // 4. Tampilkan emote bawah di tengah
    console.log("\n\n");
    console.log(printCentered(`~ ${bottomEmote} ~`));

    // 5. Tahan kalimat sesuai durasi pause
    await sleep(item.pause);

    // 6. Bersihkan layar untuk kalimat berikutnya
    console.clear();
  }

  // Tampilan penutup di tengah
  console.log("\n\n" + printCentered("✨ thx ✨") + "\n\n");
}

startLyrics();