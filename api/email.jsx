const { Resend } = require("resend");

const API_KEY = "re_4mf2NzmH_9HEwyBHrcDc3Qc1tSAvhTLyo";
const resend = new Resend(API_KEY);

const enviarEmailComDadosDoFormulario = (dadosDoFormulario) => {
  const { nome, sobrenome, email, whatsapp } = dadosDoFormulario;

  resend.emails
    .send({
      from: 'contato@lavanderiamundial.com.br',
      to: 'hebertdev82@gmail.com',
      subject: 'Solicitação de Orçamento',
      html: `
        <p>Nome: ${nome} ${sobrenome}</p>
        <p>Email: ${email}</p>
        <p>WhatsApp: ${whatsapp}</p>
      `,
    })
    .then((response) => {
      console.log(response);
      console.log("E-mail enviado com sucesso!");
    })
    .catch((error) => {
      console.log("Algo não funcionou bem!");
    });
};

module.exports = enviarEmailComDadosDoFormulario;
