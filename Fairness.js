function guardDutySchedule(recruits) {
  const daysInMonth = 30;
  const weekdayPoint = 1;
  const fridayPoint = 1.5;
  const weekendPoint = 2;

  // Initialize the points for each recruit
  const recruitPoints = recruits.reduce((acc, recruit) => {
    acc[recruit] = 0;
    return acc;
  }, {});

  const schedule = [];

  const getLeastScoredRecruit = () => {
    // Sort the recruits by points
    recruits.sort((a, b) => {
      if (recruitPoints[a] === recruitPoints[b]) return 0;
      return recruitPoints[a] < recruitPoints[b] ? -1 : 1;
    });
    return recruits[0];
  };

  for (let i = 0; i < daysInMonth; i++) {
    let recruit;
    if ((i + 1) % 7 === 0 || (i + 1) % 7 === 6) {
      // Sunday or Saturday
      recruit = getLeastScoredRecruit();
      recruitPoints[recruit] += weekendPoint;
    } else if ((i + 1) % 7 === 5) {
      // Friday
      recruit = getLeastScoredRecruit();
      recruitPoints[recruit] += fridayPoint;
    } else {
      // Other weekdays
      recruit = getLeastScoredRecruit();
      recruitPoints[recruit] += weekdayPoint;
    }
    schedule.push(recruit);
  }

  return schedule;
}

const recruits = [
  "Andy",
  "Beth",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Hannah",
];
console.log(guardDutySchedule(recruits));
