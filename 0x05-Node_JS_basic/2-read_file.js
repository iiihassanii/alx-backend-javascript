const fs = require('fs');

function countStudents(Path) {
  if (!fs.existsSync(Path)) {
    throw new Error('Cannot load the database');
  }
  fs.readFile(Path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  const lines = data.split('\n').filter(line => line.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
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
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, students] of Object.entries(fieldData)) {
  console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
});
} 

module.exports = countStudents;
