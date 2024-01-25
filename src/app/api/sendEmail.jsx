import { Resend } from 'resend';
import Cors from 'cors';
import initMiddleware from '../lib/init-middleware';

const cors = initMiddleware(
  Cors({
    methods: ['POST'],
  })
);

const API_KEY = 're_4mf2NzmH_9HEwyBHrcDc3Qc1tSAvhTLyo';
const resend = new Resend(API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { nome, sobrenome, email, whatsapp } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'contato@lavanderiamundial.com.br',
      to: 'hebertdev82@gmail.com',
      subject: 'Solicitação de Orçamento',
      html: `
        <p>Nome: ${nome} ${sobrenome}</p>
        <p>Email: ${email}</p>
        <p>WhatsApp: ${whatsapp}</p>
      `,
    });

    console.log(response);
    console.log('E-mail enviado com sucesso!');

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Algo não funcionou bem!', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

// const { Resend } = require("resend");

// const API_KEY = "re_4mf2NzmH_9HEwyBHrcDc3Qc1tSAvhTLyo";
// const resend = new Resend(API_KEY);

// const enviarEmailComDadosDoFormulario = (dadosDoFormulario) => {
//   const { nome, sobrenome, email, whatsapp } = dadosDoFormulario;

//   resend.emails
//     .send({
//       from: 'contato@lavanderiamundial.com.br',
//       to: 'hebertdev82@gmail.com',
//       subject: 'Solicitação de Orçamento',
//       html: `
//         <p>Nome: ${nome} ${sobrenome}</p>
//         <p>Email: ${email}</p>
//         <p>WhatsApp: ${whatsapp}</p>
//       `,
//     })
//     .then((response) => {
//       console.log(response);
//       console.log("E-mail enviado com sucesso!");
//     })
//     .catch((error) => {
//       console.log("Algo não funcionou bem!");
//     });
// };

// module.exports = enviarEmailComDadosDoFormulario;
