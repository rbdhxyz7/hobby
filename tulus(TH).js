const lyrics = [
  { text: "Tak ada yang hilang dariku belakangan", speed: 70, pause: 1400 },
  { text: "Sedang tak mudah bertemu rasa senang", speed: 70, pause: 1400 },
  { text: "Sedang kucari yang jadi pencetusnya", speed: 70, pause: 1400 },
  { text: "Mungkin hilangnya atau siklus hidupku", speed: 70, pause: 1600 },
  { text: "Mungkin aku sedang tak bisa", speed: 60, pause: 1500 },
  { text: "Tak bisa jatuh cinta", speed: 50, pause: 1800 },
  { text: "Membuka hati tuk apapun siapapun", speed: 50, pause: 1600 },
  { text: "Dan mungkin aku memang sedang tak bisa", speed: 65, pause: 1500 },
  { text: "Tak bisa jatuh cinta", speed: 60, pause: 1800 },
  { text: "Membuka hati tuk apapun siapapun", speed: 50, pause: 2000 }
];

const emotes = ["🍃", "🍵", "🌱", "✨", "💚", "🌿", "🎶", "🌸"];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getRandomEmote() {
  return emotes[Math.floor(Math.random() * emotes.length)];
}

async function startLyrics() {
  console.clear();

  for (const item of lyrics) {
    const topEmote = getRandomEmote();
    const bottomEmote = getRandomEmote();

    // 1. Tampilkan emote atas (rata kiri)
    console.log(`~ ${topEmote} ~\n`);

    // 2. Ketik lirik per-huruf (rata kiri)
    for (const char of item.text) {
      process.stdout.write(char);
      await sleep(item.speed);
    }

    // 3. Tampilkan emote bawah (rata kiri)
    console.log(`\n\n~ ${bottomEmote} ~`);

    // 4. Tahan kalimat sesuai durasi pause
    await sleep(item.pause);

    // 5. Bersihkan layar untuk kalimat berikutnya
    console.clear();
  }

  // Tampilan penutup
  console.log("thx ✨\n");
}

startLyrics();