function fileGen(response) {
  var content = `# ${response.title}
      ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email})
      #### ${response.license} 
      
      ## Table of Contents
      * [Repository Description](#Repository-Description)
      * [Installation Instructions](#Install)
      * [Usage Information](#Usage)
      
      # Repository Description
      ${response.description}
      
      ## User Story
      ### As A developer
      1.   Given a command-line application that accepts user input.
      2.   I want to be prompted for information about my application repository.
      3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contribution Guidelines, Tests Instructions, and Questions.
      4.   I want my project title to display as the title of the README.
      5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
      6.   I want to choose a license for my application from a list of options; and then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.  
      7.   I want to enter my GitHub username; then this is added to the section of the README entitled Questions, with a link to my GitHub profile.
      8.   I want to enter my email address; and then this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
      9.   I want to click on the links in the Table of Contents; then I am taken to the corresponding section of the README.
  
      ## Usage
      ${response.usage}
      
      ### Contributions
      ${response.contribute}
      
      
      ## Tests
      1.  ${response.test}
      
      ## Installation Instructions
      ${response.install}


      ### Screenshots
      ###### [Back to Table of Contents](#Table-of-Contents)
      #### ![script.js](${response.scriptjs})
      
      ## License
      ${response.license}`;
  return content;
}

module.exports = fileGen;
