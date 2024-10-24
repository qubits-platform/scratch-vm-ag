const historyData = [];

const addHistory = coordinates => historyData.push(coordinates);

const getHistory = () => historyData;

module.exports = {addHistory, getHistory};
