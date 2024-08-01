function findHack(arr) {
    const hackedNames = [];
    for (const record of arr) {
      const [name, totalScore, grades] = record;
      let score = 0;
      let countBOrAbove = 0;
      for (const grade of grades) {
        if (grade === 'A') {
          score += 30;
          countBOrAbove++;
        } else if (grade === 'B') {
          score += 20;
          countBOrAbove++;
        } else if (grade === 'C') {
          score += 10;
        } else if (grade === 'D') {
          score += 5;
        }
      }
      if (grades.length >= 5 && countBOrAbove === grades.length) {
        score += 20;
      }
      score = Math.min(score, 200);
      if (score !== totalScore) {
        hackedNames.push(name);
      }
    }
    return hackedNames;
  }