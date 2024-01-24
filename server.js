const express = require('express');
const bodyParser = require('body-parser');
const enviarEmailComDadosDoFormulario = require('./src/app/components/send-email.jsx');

const app = express();
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const formData = req.body;
  
  try {
    await enviarEmailComDadosDoFormulario(formData); // Importe a função aqui corretamente
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// app.post('/api/email.jsx', async (req, res) => {
//   const formData = req.body;
  
//   try {
//     await sendEmail(formData);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
