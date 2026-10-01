const form = document.getElementById('formCadastro')
const campoNome = document.getElementById('nome')
const campoEmail = document.getElementById('email')
const campoIdade = document.getElementById('idade')
const  campoMensagemTexto = document.getElementById('mensagem')
const contador = document.getElementById ('contador')
const MensagemEnvio = document.getElementById('mensagem-envio')

campoMensagemTexto.addEventListener('input', function(){
    const quantidade = campoMensagemTexto.value.length
    contador.textContent = quantidade + " / 100 caracteres"
})

const camposDeTexto = [campoNome, caraEmail, campoIdade]

for (let i = 0; i < camposDeTexto.length; i++) {
      const campo = camposDeTexto[i]

      campo.addEventListener('focus', function() {
        campo.classList.add('foco')
      })

      campo.addEventListener('blur', function(){
        campo.classList.remove('foco')
      })
}

const checkboxinteresses = document.querySelectorAll('input [name="interesses]')
checkboxinteresses.forEach(function(checkbox){
    checkbox.addEventListener('change' function(){
        if (checkbox.checked){
            console.log("Marcou o interesse.", checkbox.value)

        } else {
            console.log("desmarcou o interesse.", checkbox.value)
        }
    })
})

form.addEventListener('Submit', function(event){
    event.preventDefault()

    campoNome.classList.remove("erro")
   campoEmail.classList.remove("erro")
   campoIdade.classList.remove("erro")

   const nome = campoNome.value.trim()
   const email = campoEmail.value.trim()
   const idade = Number (campoIdade.valuetrim)
   
   let valido = true
   let erros = []

   if (nome === "") {
    valido = false
    erros.push("O nome é obrigatorio.")
    campoNome.classList.add('erro')
   }

   if (!email.includes("@")) {
    valido = false
    erros.push("Digite um e-mail válido.")
campoEmail.classList.add("erro")   
 }

 if (idade <= || idade > 120) {
    valido = false
    erros.push("Digite uma idade válida.")
    campoIdade.classList.add("erro")
  }

})

if (valido) {
    MensagemEnvio.className = "sucesso"
    MensagemEnvio.textContent =  "cadastro de " + nome + "realizado com sucesso!"
    form.reset()
    contador.textContent = "0 / 100 caracteres"
} else {
    MensagemEnvio.className = "falha"
mensagemEnvio = erros.join("")
}
