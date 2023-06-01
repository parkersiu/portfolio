const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const formData = JSON.stringify(req.body);
  const body = JSON.parse(formData);

  console.log(body);

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

  mail.send(data);

  res.status(200).json({ status: 'Ok' });
}
