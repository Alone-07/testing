import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gopikakrish2002@gmail.com',
    pass: 'phaz ekst evat ovrc'
  }
});

var mailOptions = {
  from: 'gopikakrish2002@gmail.com',
  to: 'al71one2002@gmail.com',
  subject: 'Sending Email using Node.js',
  // text: 'That was easy!'
  html: '<h1>Welcome</h1><p>that was easy</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
