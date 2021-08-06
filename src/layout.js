export const layout = () => `
<div class="scores">
    <div class="scores-header">
      <h2>Recent scores</h2>
      <button class="btn" id="refreshBtn"><i class="fas fa-sync-alt"></i> Refresh</button>
    </div>
    <ul class="score-list" id="score-list">
    </ul>
  </div>
  <div class="add-scores">
    <div class="scores-header">
      <h2>Add your score</h2>
    </div>
    <form action="" id="form" autocomplete="off">
      <input type="text" id="formName" name="name" placeholder="Your name" required>
      <input type="number" id="formScore" name="score" placeholder="Your score" step="1" min="0" max="100" required>
      <button class="btn" type="submit" id="submitbtn"><i class="fas fa-plus"></i> Submit</button>
    </form>
  </div>`;

export const showScores = (scores) => scores.map((score) => `<li>${score.user}: ${score.score}</li>`).join('');