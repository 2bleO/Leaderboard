export const layout = () => `
<div class="scores">
    <div class="scores-header">
      <h2>Recent scores</h2>
      <button id="refreshBtn">Refresh</button>
    </div>
    <ul class="score-list" id="score-list">
    </ul>
  </div>
  <div class="add-scores">
    <div class="scores-header">
      <h2>Add your score</h2>
    </div>
    <form action="" id="form">
      <input type="text" id="formName" name="name" placeholder="Your name" required>
      <input type="number" id="formScore" name="score" placeholder="Your score" step="1" min="0" max="100" required>
      <button type="submit" id="submit">Submit</button>
    </form>
  </div>`;

export const showScores = (scores) => scores.map((score) => `<li>${score.user}: ${score.score}</li>`).join('');