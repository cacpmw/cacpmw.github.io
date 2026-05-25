const API_ENDPOINT = 'https://n8n.carloscarneiro.dev.br/webhook/ac658d05-2718-48b8-89b8-d3bfe1494c62';

async function callN8N(action, data) {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, data })
  });
  return response.json();
}
