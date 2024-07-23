const fs = require('fs').promises;

/**
 * Counts the number of students in each field from a database file and logs the result.
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 * @throws {Error} If the database cannot be loaded.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Check if the file is empty or only contains the header
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Remove the header line
    const headers = lines.shift().split(',');

    // Create an object to hold the student data by field
    const fieldData = {};

    // Process each line
    lines.forEach(line => {
      const student = line.split(',');

      // Ensure we have a complete record
      if (student.length === headers.length) {
        const field = student[3];
        const firstName = student[0];

        if (!fieldData[field]) {
          fieldData[field] = [];
        }

        fieldData[field].push(firstName);
      }
    });

    const totalStudents = lines.length;

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fieldData)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

