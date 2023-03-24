// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![](https://img.shields.io/badge/License:-${license}-lightgrey)`  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 return `[${license}](./LICENSE)`
}

module.exports = {renderLicenseBadge, renderLicenseLink}
