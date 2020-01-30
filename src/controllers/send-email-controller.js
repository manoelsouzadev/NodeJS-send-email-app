'use strict';
const sendEmailConfig = require('../../config/send-mail');
const nodemailer = require('nodemailer');

exports.post = (req, res, next) => {
  let transporter = nodemailer.createTransport(sendEmailConfig.config);
  const message = {
    from: 'teste <teste@mail.com>',
    to: 'tech.teste@mail.com',
    subject: 'Nodemailer é muito legal!',
    text: 'Olá, teste, está gostando do curso de NodeJS?',
    html:
      "Node é legal! <a href='https://nodejs.org/en/'>NodeJS</a>"
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(500).send('Falha ao enviar E-mail!');
    }
    return res.status(200).send('E-mail enviado com sucesso!');
  });
};
