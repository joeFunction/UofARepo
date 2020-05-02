function generateMarkdown(data) {
  return `
# the title is ${data.title}
license is ${data.license}

`;
}

module.exports = generateMarkdown;
