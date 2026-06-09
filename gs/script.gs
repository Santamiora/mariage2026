const weddingDate = new Date("2026-08-15"); // ta date

const today = new Date();

const sameDay =
  today.getDate() === weddingDate.getDate() &&
  today.getMonth() === weddingDate.getMonth() &&
  today.getFullYear() === weddingDate.getFullYear();

if (sameDay) {

  const duration = 15000;
  const end = Date.now() + duration;

  const firework = () => {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 80,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 6,
      angle: 120,
      spread: 80,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(firework);
    }
  };

  firework();

  setInterval(() => {
    confetti({
      particleCount: 120,
      spread: 180,
      startVelocity: 45,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5
      }
    });
  }, 2500);
}
