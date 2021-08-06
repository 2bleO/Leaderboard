const apiBase = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export async function createGame(gameName) {
  const game = { name: `${gameName}` };
  const response = await fetch(`${apiBase}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  const { result } = await response.json();
  return result.split(' ')[3];
}

export async function addScore(user, score, id) {
  const player = { user: user.value, score: score.value };
  const response = await fetch(`${apiBase}games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });
  const result = await response.json();
  return result;
}

export const getScores = async (gameId) => {
  const response = await fetch(`${apiBase}games/${gameId}/scores/`);
  const result = await response.json();
  return result;
};