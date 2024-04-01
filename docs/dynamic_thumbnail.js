import html2canvas from 'html2canvas';

// Define the URLs of your project pages
const projectUrls = [
  'project1_page.html',
  'project2_page.html',
  // Add more project URLs as needed
];

// Capture screenshots of each project page
projectUrls.forEach((url, index) => {
  html2canvas(document.querySelector(`#${index}`)).then(canvas => {
    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL();

    // Create a thumbnail image element
    const img = document.createElement('img');
    img.src = dataURL;

    // Append the thumbnail image to the document
    document.body.appendChild(img);
  });
});
