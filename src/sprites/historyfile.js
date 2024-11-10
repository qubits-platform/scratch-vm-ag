const historyData = [];

const addHistory = coordinates => historyData.push(coordinates);

const getHistory = () => historyData;

const clearHistory = () => historyData.length = 0;

module.exports = {addHistory, getHistory, clearHistory};
