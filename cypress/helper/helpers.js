function getCurrentDateTime() {
    const currentDate = new Date();
    const cstOffset = -6 * 60; // CST offset from UTC in minutes
    const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60 * 1000);
    const cstTime = new Date(utcTime + (cstOffset * 60 * 1000));
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    const formattedDateTime = cstTime.toLocaleString('en-US', options).replace(',', '');
    return formattedDateTime;
}

module.exports = getCurrentDateTime;
