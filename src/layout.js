export const layout = () => `
<div class="scores">
    <div class="scores-header">
      <h2>Recent scores</h2>
      <button>Refresh</button>
    </div>
    <ul class="score-list">
      <li>Name: 10</li>
      <li>Name: 20</li>
      <li>Name: 30</li>
    </ul>
  </div>
  <div class="add-scores">
    <div class="scores-header">
      <h2>Add your score</h2>
    </div>
    <form action="">
      <input type="text" id="name" name="name" placeholder="Your name">
      <input type="number" id="score" name="score" placeholder="Your score" step="1" min="0" max="100">
      <button type="submit" id="submit">Submit</button>
    </form>
  </div>`;

export default layout;