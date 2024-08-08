function scrapePhoneNumbers() {
    //const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    //const phoneRegex = /(?:\+?1[-.\s]?)?(?:\(?[2-9]\d{2}\)?[-.\s]?)?[2-9]\d{2}[-.\s]?\d{4}/g;
    const phoneRegex = /(?:\+?1[-.\s]?)?(?:\(?[2-9]\d{2}\)?[-.\s]?)?[2-9]\d{2}[-.\s]?\d{4}(?=\b)/g;

    const pageContent = document.body.innerText;
    const phoneNumbers = pageContent.match(phoneRegex) || [];
    
    if (phoneNumbers.length > 0) {
      const numbersText = phoneNumbers.join('\n');
      copyToClipboard(numbersText);
    //   alert(`Copied ${phoneNumbers.length} phone numbers to clipboard.`);
    } else {
      alert('No phone numbers found on this page.');
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