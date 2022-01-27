export function validatePhone(tel) {
  const number = tel.replace(/^(\+)|\D/g, "$1");
  if (number.length !== 10) {
    return false;
  }
  return true;
}

export function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  }
  return false;
}
