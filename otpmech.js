function sendotp(){
    const otp = document.getElementById("email");
    const otpverify=document.getElementById("otpverify")[0];

}
Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "otp to your account",
    Body : "your otp is "
}).then(
  message => alert(message)
);
