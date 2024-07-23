const fs = require('fs');

/**
 * Reads the content of a database file.
 * @param {string} path - The path to the database file.
 * @returns {string} The content of the file.
 * @throws {Error} If the file cannot be loaded.
 */
function readDatabase(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  return fs.readFileSync(path, 'utf8');
}

/**
 * Parses the content of a database CSV file and counts the number of students in each field.
 * @param {string} data - The content of the database file.
 * @returns {Object} An object containing the total number of students and an object with counts and lists of students per field.
 */
function parseDatabase(data) {
  const lines = data.split('\n').filter(line => line.trim() !== '');
  if (lines.length <= 1) {
    return {
      totalStudents: 0,
      fields: {}
    };
  }
  
  const headers = lines.shift().split(',');
  const fieldData = {};
  
  lines.forEach(line => {
    const student = line.split(',');
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
  
  return {
    totalStudents,
    fields: fieldData
  };
}
/**
 * Counts the number of students in each field from a database file and logs the result.
 * @param {string} path - The path to the database file.
 * @throws {Error} If the database cannot be loaded.
 */
function countStudents(path) {
  try {
    const data = readDatabase(path);
    const { totalStudents, fields } = parseDatabase(data);

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
