import sys
import time

def print_karaoke_line(text, char_delay=0.08, line_delay=1.0):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(char_delay)
    print()  # Pindah baris setelah lirik selesai
    time.sleep(line_delay)

def play_karaoke():
    # Format: ("Lirik Lagu", kecepatan_huruf, jeda_ke_baris_berikutnya)
    lyrics = [
        ("Bila memang kau tak bisa bersama", 0.17, 1.2),
        ("Jika lelah dan keluhkan semua rasa", 0.18, 1.0),
        ("Lepaskan genggam tanganmu", 0.17, 1.5),
        ("Jangan paksakan tuk rindu", 0.18, 1.8),
        ("Kan kututup semua ruang dihatiku", 0.19, 2.0),
        ("Bila memang kau tak bisa bersama", 0.17, 1.2),
        ("Jangan paksakan hati tuk terus mencinta", 0.18, 1.5),
        ("Relakanlah saja ini", 0.17, 1.2),
        ("Kan kusimpan kisah ini", 0.17, 1.2),
        ("Dan kututup semua ruang dihatiku", 0.17, 2.5),
    ]

    time.sleep(1) # Jeda pembuka sebelum lirik mulai
    
    for line, char_delay, line_delay in lyrics:
        print_karaoke_line(line, char_delay, line_delay)

if __name__ == "__main__":
    play_karaoke()