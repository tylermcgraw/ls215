let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let summary = {
    studentGrades: [],
    exams: []
  };
  let exams = [];

  for (student of Object.values(scores)) {
    summary.studentGrades.push(getGrade(student));
    student.scores.exams.forEach((exam, idx) => {
      if (exams[idx] === undefined) {
        exams[idx] = [];
      }
      exams[idx].push(exam);
    });
  }

  exams.forEach(examScores => {
    summary.exams.push({
      average: Math.round(examScores.reduce((acc, score) => acc + score) / examScores.length * 10) / 10,
      minimum: examScores.reduce((acc, score) => score < acc ? score : acc),
      maximum: examScores.reduce((acc, score) => score > acc ? score : acc),
    })
  });

  return summary;
}

function getGrade(student) {
  let exams = student.scores.exams;
  let exercises = student.scores.exercises;
  let examPercent = exams.reduce((acc, exam) => acc + exam) / exams.length;
  let exercisesPercent = exercises.reduce((acc, exercise) => acc + exercise);
  let percent = Math.round((examPercent * .65 + exercisesPercent * .35));
  let letter = getLetterGrade(percent);
  return `${percent} (${letter})`;
}

function getLetterGrade(percent) {
  if (percent >= 93) {
    return 'A';
  } else if (percent >= 85) {
    return 'B';
  } else if (percent >= 77) {
    return 'C';
  } else if (percent >= 69) {
    return 'D';
  } else if (percent >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/