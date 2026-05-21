const questions = [
  {
    text: "Which type of electromagnetic wave has the longest wavelength?",
    options: ["Gamma rays", "Visible light", "Radio waves"],
    answer: 2
  },
  {
    text: "Which type of radiation is ionizing?",
    options: ["Radio waves", "Ultraviolet", "Microwaves"],
    answer: 1
  },
  {
    text: "If the wavelength gets shorter, what happens to frequency (in a vacuum)?",
    options: [
      "Frequency decreases",
      "Frequency stays the same",
      "Frequency increases"
    ],
    answer: 2
  },
  {
    text: "What does redshift tell us about a star or galaxy?",
    options: [
      "It is moving toward us",
      "It is moving away from us",
      "It is not moving at all"
    ],
    answer: 1
  },
  {
    text: "Low-mass stars like the Sun end their lives as:",
    options: ["Black holes", "White dwarfs", "Neutron stars"],
    answer: 1
  }
];

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "quiz-question";

    const p = document.createElement("p");
    p.textContent = `${index + 1}. ${q.text}`;
    div.appendChild(p);

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = optIndex;
      label.appendChild(input);
      label.append(` ${opt}`);
      div.appendChild(label);
    });

    container.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && Number(selected.value) === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("quiz-result");
  result.textContent = `You got ${score} out of ${questions.length} correct.`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
  document
    .getElementById("check-answers")
    .addEventListener("click", checkAnswers);
});