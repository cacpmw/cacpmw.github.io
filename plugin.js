const API_ENDPOINT = 'https://n8n.carloscarneiro.dev.br/webhook/ac658d05-2718-48b8-89b8-d3bfe1494c62';

async function callN8N(action, data) {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, data })
  });
  return response.json();
}

/********************
 * Variáveis globais
 ********************/
var conversation
var workspaceInfo

/********************
 * Eventos
 ********************/

Kinbox.on("conversation", function (data) {
    conversation = data
    console.log("on conversation", data)

    getWorkspaceInfo()
})

Kinbox.on("no_conversation", function (data) {
    conversation = null
    console.log("on no-conversation", data)
})

Kinbox.on("callback", function (data) {
    console.log("on callback", data)
    if (data.key === "idade-changed") {
        Kinbox.loading(false)
        if (data.success) {
            Kinbox.toast("success", "Alterou idade com sucesso")
        } else {
            Kinbox.toast("error", "Erro ao alterar idade")
        }
    }
})

async function toast() {
    const response = await callN8N("toast",{payload:{
      conversation,
      payload: "success"
    }})
    if(response.data==="success"){
      Kinbox.toast("success", "Toast de sucesso")
    }
}
