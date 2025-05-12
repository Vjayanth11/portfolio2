function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Make sure resume.pdf is in the same folder as your HTML
  link.download = 'John_Resume.pdf'; // Desired file name
  link.click();
}
