/*
lol
function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}
*/

function isValidEmail(email) {
  let emailHasAmpersand = /@/.test(email);
  if (!emailHasAmpersand) return false;
  let [ local, domain ] = email.split('@');
  let localValidLength = /[A-Za-z0-9]/.test(local);
  let localValidChars = !/[^A-Za-z0-9]/.test(local);
  let domainHasDot = /[.]/.test(domain);
  if (!domainHasDot) return false;
  let componentsAreValid = domain.split('.').every(component => {
    let componentValidLength = /[A-Za-z]/.test(component);
    let componentValidChars = !/[^A-Za-z]/.test(component);
    return componentValidLength && componentValidChars;
  });
  let valid = localValidLength &&
    localValidChars &&
    componentsAreValid;
  console.log(valid);
  return valid;
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false