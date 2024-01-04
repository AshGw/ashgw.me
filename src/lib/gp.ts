export function gmailParser(email: string): string {
  const [localPart, domain] = email.split('@');

  const parsedLocalPart = localPart.replace(/\./g, '');

  return `${parsedLocalPart}@${domain}`;
}

export function isGmail(email: string): boolean | undefined {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
  return gmailRegex.test(email);
}
