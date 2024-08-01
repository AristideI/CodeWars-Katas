function generateChatRoomNames(users) {
    // Convert to Title Case
    const normalizeName = name => name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const firstNamesCount = {};
    const firstNameLastNameInitialCount = {};
    
    users = users.map(normalizeName);

    // Count occurrences of first names and last name initials
    users.forEach(name => {
        const [firstName, lastName] = name.split(' ');

        firstNamesCount[firstName] = (firstNamesCount[firstName] || 0) + 1;
        const key = `${firstName}_${lastName.charAt(0)}`;
        firstNameLastNameInitialCount[key] = (firstNameLastNameInitialCount[key] || 0) + 1;
    });

    const resultNames = [];

    users.forEach(name => {
        const [firstName, lastName] = name.split(' ');

        if (firstNamesCount[firstName] === 1) {
            resultNames.push(firstName);
        } else if (firstNameLastNameInitialCount[`${firstName}_${lastName.charAt(0)}`] === 1) {
            resultNames.push(`${firstName} ${lastName.charAt(0)}`);
        } else {
            resultNames.push(name);
        }
    });

    return resultNames.sort();
}