// for (let i = 0; i <= 30; i++) {
//   sendEmail({
//     to: ["Pranitakarki200@gmail.com"],
//     subject: `i hate you ${i}`,
//     html: `
//       <div>
//       <p>You have successfully registered in our system.</p>
//       </div>
//       `,
//   });
// }

import nodemailer from "nodemailer";
// the main thing in this file is transporterInfo and mailInfo
//neglect other part

//transporterInfo gives form information while mailInfo gives to info
let transporterInfo = {
  // host: emailHost,
  host: "smtp.gmail.com",
  // if from is gmail use gmail smtp
  port: 587,
  secure: false,

  //   auth user and pass play the role from
  auth: {
    // note user and pass most be genuine
    //it is the email through which email is send
    user: "upreti.kshitiz.ku@gmail.com",
    pass: "ndgh oxcf enpb wuej",
    // to send email form server first you have to =>
    //use 2-step verification and generate app password
    //instead of using your password use app password of gmail
    //for this go to the => manage your account => security setting and=>enable 2-step verification =>create app password (select other option)
  },
};

export let sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo); //transporter gives from information
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

// How to call mail

// await sendMail({
// from: '"Unique" <uniquekc425@gmail.com>',
//   to: ["abc@gmail.com", "nitanthapa425@gmail.com"],
//   subject: "My first system email",
//   html: `<h1>Hello world</h1>`,
// });

// the from part is responsible  to show

// if you want to attach file use below code

//to sendMail just call
// try {
//   await sendMail({
//     from: '"Fred Foo" <nitanthapa425@gmail.com>',
//     to: ["nitanthapa123@gmail.com", "sandeshbca5@arunima.edu.np"],
//     cc: ["ram@gmail.com"],
//     bcc: ["hari@gmail.com"],
////bcc is blind carbon copy
//     attachments: [
//   {
//     filename: 'example.pdf', // Replace with your desired filename
//     path: '/path/to/example.pdf' // Replace with the actual file path on your server
//   }
// ]
//     subject: "this is subject",
//     html: `<h1>Hello World<h1>`,
//   });
//   console.log("email is sent successfully");
// } catch (error) {}

// note from : is only  use to show the from information (ie not used to point the sender email sender email is point by the auth part)
//   it is recommend to use  backtick
