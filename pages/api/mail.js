/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const human = await validate(body.token);

  if (!human) {
    res.status(400);
    res.json({ error: 'Recaptcha failed. Please try again.' });
    return
  } else {
    const message = `
    Name: ${body.firstname} ${body.lastname}\r\n
    Company: ${body.company}\r\n
    Phone Number: ${body.country}: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}`;

    const data = {
      to: 'parker@parkersiu.com',
      from: 'parker@parkersiu.com',
      subject: 'New message from portfolio site!',
      text: message,
      html: message.replace(/\r\n/g, '<br>')
    };

    await mail.send(data);

    res.status(200).json({ status: 'Ok' });
  }

  async function validate(token) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
      method: 'post',
    });
    const data = await response.json();
    return data;
  }
}
