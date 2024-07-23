console.log("Welcome to Holberton School, what is your name?\n")

process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  // Trim the input to remove any extra newlines or spaces
  const name = input.trim();

  // Display the user's input
  console.log(`Your name is: ${name}`);

  // Display the closing message and end the program
  console.log('This important software is now closing');

  // End the stdin input stream
  process.stdin.end();
});