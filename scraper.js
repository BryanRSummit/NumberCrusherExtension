function scrapePhoneNumbers() {
  const phoneRegex = /(?:\+?1[-.\s]?)?(?:\(?[2-9]\d{2}\)?[-.\s]?)?[2-9]\d{2}[-.\s]?\d{4}/g;
  const phoneFields = [
      document.querySelector('input[name="Phone"]'),
      document.querySelector('input[name="Additional Phone"]'),
      document.querySelector('input[name="Additional Phone 2"]')
  ];
  
  const phoneNumbers = phoneFields
      .map(field => field ? field.value.match(phoneRegex) : null)
      .filter(match => match !== null)
      .flat();
  
  if (phoneNumbers.length > 0) {
      const numbersText = phoneNumbers.join('\n');
      copyToClipboard(numbersText);
      console.log(`Copied ${phoneNumbers.length} phone numbers to clipboard.`);
  } else {
      console.log('No phone numbers found in the specified fields.');
  }
}

async function copyToClipboard(text) {
  try {
      await navigator.clipboard.writeText(text);
  } catch (err) {
      console.error('Failed to copy: ', err);
  }
}

scrapePhoneNumbers();