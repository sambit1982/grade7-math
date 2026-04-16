// === Quiz Data (15 questions per topic, grouped by difficulty) ===
const quizzes = {
  algebra: [
    // --- Easy ---
    { q: "Solve: x + 7 = 12. What is x?", a: "5", hint: "Subtract 7 from both sides", d: "easy" },
    { q: "Solve: x − 9 = 6. What is x?", a: "15", hint: "Add 9 to both sides", d: "easy" },
    { q: "Solve: 3x = 21. What is x?", a: "7", hint: "Divide both sides by 3", d: "easy" },
    { q: "Simplify: 5x + 3x = ?x", a: "8", hint: "Add the coefficients", d: "easy" },
    { q: "Solve: x + 15 = 20. What is x?", a: "5", hint: "Subtract 15 from both sides", d: "easy" },
    // --- Medium ---
    { q: "Solve: 2x + 4 = 14. What is x?", a: "5", hint: "Subtract 4, then divide by 2", d: "medium" },
    { q: "Solve: 5x − 10 = 15. What is x?", a: "5", hint: "Add 10, then divide by 5", d: "medium" },
    { q: "Simplify: 9x − 4x + 2x = ?x", a: "7", hint: "Combine like terms: 9 − 4 + 2", d: "medium" },
    { q: "Solve: x/4 = 8. What is x?", a: "32", hint: "Multiply both sides by 4", d: "medium" },
    { q: "Solve: 3x + 7 = 28. What is x?", a: "7", hint: "Subtract 7, then divide by 3", d: "medium" },
    // --- Hard ---
    { q: "Solve: 4(x + 2) = 24. What is x?", a: "4", hint: "Divide by 4 first, then subtract 2", d: "hard" },
    { q: "Solve: 2x + 3 = x + 10. What is x?", a: "7", hint: "Subtract x from both sides, then subtract 3", d: "hard" },
    { q: "Solve: 6x − 5 = 3x + 10. What is x?", a: "5", hint: "Get all x on one side: 3x = 15", d: "hard" },
    { q: "If 3(x − 4) = 9, what is x?", a: "7", hint: "Divide by 3 → x − 4 = 3, then add 4", d: "hard" },
    { q: "Solve: x/3 + 5 = 9. What is x?", a: "12", hint: "Subtract 5 → x/3 = 4, then multiply by 3", d: "hard" },
  ],
  geometry: [
    // --- Easy ---
    { q: "A right angle measures ___ degrees.", a: "90", hint: "Think of a square corner", d: "easy" },
    { q: "Angles in a triangle add up to ___ degrees.", a: "180", hint: "It's always the same!", d: "easy" },
    { q: "A circle has radius 7. Diameter = ___", a: "14", hint: "Diameter = 2 × radius", d: "easy" },
    { q: "How many sides does a hexagon have?", a: "6", hint: "Hex = 6", d: "easy" },
    { q: "A straight line angle measures ___ degrees.", a: "180", hint: "A flat line = half turn", d: "easy" },
    // --- Medium ---
    { q: "A square has side 5 cm. Area = ___ cm²", a: "25", hint: "Area = s × s", d: "medium" },
    { q: "A rectangle is 8 cm × 3 cm. Perimeter = ___ cm", a: "22", hint: "Perimeter = 2(l + w)", d: "medium" },
    { q: "A triangle has base 10 and height 6. Area = ___", a: "30", hint: "Area = ½ × base × height", d: "medium" },
    { q: "A square has perimeter 36 cm. Side length = ___ cm", a: "9", hint: "Perimeter = 4s → s = 36/4", d: "medium" },
    { q: "Two angles of a triangle are 50° and 60°. Third angle = ___°", a: "70", hint: "180 − 50 − 60", d: "medium" },
    // --- Hard ---
    { q: "A circle has diameter 10. Circumference = ___ π", a: "10", hint: "C = πd", d: "hard" },
    { q: "A circle has radius 5. Area = ___ π", a: "25", hint: "Area = πr²", d: "hard" },
    { q: "A rectangle has area 48 cm² and width 6 cm. Length = ___ cm", a: "8", hint: "Area = l × w → l = 48/6", d: "hard" },
    { q: "An equilateral triangle has perimeter 27 cm. Each side = ___ cm", a: "9", hint: "All 3 sides are equal: 27/3", d: "hard" },
    { q: "A triangle has angles in ratio 1:2:3. Largest angle = ___°", a: "90", hint: "1+2+3 = 6 parts. 180/6 = 30 per part. Largest = 3×30", d: "hard" },
  ],
  shapes3d: [
    // --- Easy ---
    { q: "How many faces does a cylinder have?", a: "3", hint: "2 circles + 1 curved surface", d: "easy" },
    { q: "How many faces does a sphere have?", a: "1", hint: "Just one curved surface", d: "easy" },
    { q: "How many faces does a cone have?", a: "2", hint: "1 circle base + 1 curved surface", d: "easy" },
    { q: "A cube has ___ faces.", a: "6", hint: "Think of a dice!", d: "easy" },
    { q: "A cube has ___ edges.", a: "12", hint: "4 on top + 4 on bottom + 4 vertical", d: "easy" },
    // --- Medium ---
    { q: "A cylinder has r=3, h=10. Volume = ___π", a: "90", hint: "V = πr²h → 9 × 10 = 90", d: "medium" },
    { q: "A cone has r=3, h=4. Volume = ___π", a: "12", hint: "V = (1/3)πr²h → (1/3)(9)(4)", d: "medium" },
    { q: "A cube has side 4. Volume = ___", a: "64", hint: "V = s³ = 4 × 4 × 4", d: "medium" },
    { q: "A cylinder has r=5, h=2. Volume = ___π", a: "50", hint: "V = πr²h → 25 × 2", d: "medium" },
    { q: "A sphere has r=3. Surface area = ___π", a: "36", hint: "SA = 4πr² → 4 × 9", d: "medium" },
    // --- Hard ---
    { q: "A sphere has r=6. Volume = ___π", a: "288", hint: "V = (4/3)πr³ → (4/3)(216)", d: "hard" },
    { q: "A cylinder has r=4, h=7. Surface area = ___π", a: "88", hint: "SA = 2πr² + 2πrh → 2(16) + 2(28)", d: "hard" },
    { q: "A cone has r=6, h=8. Volume = ___π", a: "96", hint: "V = (1/3)πr²h → (1/3)(36)(8)", d: "hard" },
    { q: "A sphere has diameter 10. Volume = ___ π (use fraction)", a: "500/3", hint: "r=5, V = (4/3)π(125) = 500/3 π", d: "hard" },
    { q: "A cube has surface area 150 cm². Side = ___ cm", a: "5", hint: "SA = 6s² → s² = 25 → s = 5", d: "hard" },
  ],
  trigonometry: [
    // --- Easy ---
    { q: "In SOH CAH TOA, sin = Opposite / ___", a: "Hypotenuse", hint: "SOH!", d: "easy" },
    { q: "tan θ = Opposite / ___", a: "Adjacent", hint: "TOA!", d: "easy" },
    { q: "cos θ = ___ / Hypotenuse", a: "Adjacent", hint: "CAH!", d: "easy" },
    { q: "The longest side of a right triangle is the ___", a: "Hypotenuse", hint: "It's opposite the right angle", d: "easy" },
    { q: "A right angle has ___ degrees.", a: "90", hint: "The square corner in the triangle", d: "easy" },
    // --- Medium ---
    { q: "Opposite=3, hypotenuse=5. sin θ = 3/___", a: "5", hint: "sin = O/H", d: "medium" },
    { q: "Adjacent=4, hypotenuse=5. cos θ = ___/5", a: "4", hint: "cos = A/H", d: "medium" },
    { q: "Opposite=6, adjacent=8. tan θ = 6/___", a: "8", hint: "tan = O/A", d: "medium" },
    { q: "Opposite=5, hypotenuse=13. sin θ = 5/___", a: "13", hint: "sin = O/H", d: "medium" },
    { q: "Adjacent=12, hypotenuse=13. cos θ = ___/13", a: "12", hint: "cos = A/H", d: "medium" },
    // --- Hard ---
    { q: "sin θ = 0.6 and hypotenuse = 10. Opposite = ___", a: "6", hint: "O = sin θ × H = 0.6 × 10", d: "hard" },
    { q: "cos θ = 0.8 and hypotenuse = 15. Adjacent = ___", a: "12", hint: "A = cos θ × H = 0.8 × 15", d: "hard" },
    { q: "Opposite=8, adjacent=6. Hypotenuse = ___", a: "10", hint: "Pythagorean: √(64+36) = √100", d: "hard" },
    { q: "Hypotenuse=17, opposite=8. Adjacent = ___", a: "15", hint: "a² + 8² = 17² → a² = 289−64 = 225", d: "hard" },
    { q: "tan θ = 1. The angle θ = ___ degrees", a: "45", hint: "When O = A, the angle is 45°", d: "hard" },
  ],
};

// === Navigation ===
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.topic').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.topic).classList.add('active');
  });
});

// === Render Quizzes ===
const diffLabel = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard' };

function renderQuizzes() {
  document.querySelectorAll('.quiz-section').forEach(section => {
    const topic = section.dataset.quiz;
    const container = section.querySelector('.quiz-questions');
    let lastD = '';
    container.innerHTML = quizzes[topic].map((item, i) => {
      const header = item.d !== lastD ? `<div class="diff-header">${diffLabel[item.d]}</div>` : '';
      lastD = item.d;
      return `${header}<div class="quiz-q">
        <p>${i + 1}. ${item.q}</p>
        <input type="text" id="${topic}-q${i}" placeholder="Answer">
        <div class="hint">💡 ${item.hint}</div>
      </div>`;
    }).join('');
    section.querySelector('.quiz-result').textContent = '';
  });
}

// === Check Quiz ===
function checkQuiz(topic) {
  const items = quizzes[topic];
  let correct = 0;
  items.forEach((item, i) => {
    const input = document.getElementById(`${topic}-q${i}`);
    const userAnswer = input.value.trim().toLowerCase();
    const isCorrect = userAnswer === item.a.toLowerCase();
    input.className = isCorrect ? 'correct' : 'wrong';
    if (isCorrect) correct++;
  });
  const pct = Math.round((correct / items.length) * 100);
  const result = document.querySelector(`[data-quiz="${topic}"] .quiz-result`);
  result.textContent = correct === items.length
    ? `🎉 Perfect! ${correct}/${items.length} — You're a math superstar!`
    : correct >= 12
    ? `🌟 Amazing! ${correct}/${items.length} (${pct}%) — Almost perfect!`
    : correct >= 8
    ? `👏 Great job! ${correct}/${items.length} (${pct}%) — Keep it up!`
    : correct >= 5
    ? `💪 Good effort! ${correct}/${items.length} (${pct}%) — Review the lessons and try again!`
    : `📖 ${correct}/${items.length} (${pct}%) — Read through the lesson above and give it another go!`;
  saveProgress(topic, pct);
  renderProgress();
}

// === Progress (localStorage) ===
function saveProgress(topic, pct) {
  const data = JSON.parse(localStorage.getItem('math7progress') || '{}');
  data[topic] = Math.max(data[topic] || 0, pct);
  localStorage.setItem('math7progress', JSON.stringify(data));
}

function renderProgress() {
  const data = JSON.parse(localStorage.getItem('math7progress') || '{}');
  const topics = [
    { key: 'algebra', label: '🔢 Algebra' },
    { key: 'geometry', label: '📐 Geometry' },
    { key: 'shapes3d', label: '🧊 3D Shapes' },
    { key: 'trigonometry', label: '📏 Trigonometry' },
  ];
  document.getElementById('progress-bars').innerHTML = topics.map(t =>
    `<div class="progress-item">
      <label>${t.label} — ${data[t.key] || 0}%</label>
      <div class="progress-bar">
        <div class="progress-fill ${t.key}" style="width:${data[t.key] || 0}%"></div>
      </div>
    </div>`
  ).join('');
}

// === Init ===
renderQuizzes();
renderProgress();
