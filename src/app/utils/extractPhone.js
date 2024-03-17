export function extractPhone(string) {
  const phoneNumberRegex = /\+[\d-]+/; // Regular expression to match phone number format
  const phoneNumberMatches = string?.match(phoneNumberRegex);

  if (phoneNumberMatches && phoneNumberMatches.length > 0) {
    const phoneNumber = phoneNumberMatches[0];
    return phoneNumber;
  } else {
    return "Visit profile";
    console.log("Phone number not found in the string.");
  }
}
