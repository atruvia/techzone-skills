/* ============================================================
   teach — Quiz widget (zero dependencies)
   Tight feedback loop for retrieval practice: the learner clicks
   an option and finds out instantly whether it was right.

   Markup (see lesson-template.html):

     <div class="quiz">
       <p class="quiz__label">Wissens-Check</p>
       <p class="quiz__q">Frage …?</p>
       <div class="quiz__options">
         <button class="quiz__option" data-correct="true">Antwort A</button>
         <button class="quiz__option">Antwort B</button>
         <button class="quiz__option">Antwort C</button>
       </div>
       <p class="quiz__feedback" hidden>Warum diese Antwort stimmt …</p>
     </div>

   - Mark the right option with data-correct="true".
   - Keep every answer the same length so formatting reveals nothing.
   - The optional .quiz__feedback is shown after the first answer.
   ============================================================ */

(function () {
  function wire(quiz) {
    var options = quiz.querySelectorAll('.quiz__option');
    var feedback = quiz.querySelector('.quiz__feedback');

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        if (quiz.dataset.answered === 'true') return;
        quiz.dataset.answered = 'true';

        var chosenCorrect = option.dataset.correct === 'true';

        options.forEach(function (o) {
          o.disabled = true;
          if (o.dataset.correct === 'true') o.classList.add('is-correct');
        });
        if (!chosenCorrect) option.classList.add('is-wrong');

        if (feedback) feedback.hidden = false;
        quiz.dispatchEvent(new CustomEvent('quiz:answered', {
          bubbles: true,
          detail: { correct: chosenCorrect }
        }));
      });
    });
  }

  function init() {
    document.querySelectorAll('.quiz').forEach(wire);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
