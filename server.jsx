import { enviarEmailComDadosDoFormulario } from './src/app/api/sendEmail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const formData = req.body;

  try {
    await enviarEmailComDadosDoFormulario(formData);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}


// const express = require('express');
// const bodyParser = require('body-parser');
// const enviarEmailComDadosDoFormulario = require('./src/app/api/sendEmail');

// const app = express();
// app.use(bodyParser.json());

// app.post('../api/sendEmail', async (req, res) => {
//   const formData = req.body;
  
//   try {
//     await enviarEmailComDadosDoFormulario(formData);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
