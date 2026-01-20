const { randomUUID } = require("crypto");

const getRandomString = () => {
  const randomid = randomUUID();

  console.log(new Date().toISOString(), ":", randomid);

  setTimeout(getRandomString, 5000);
};

getRandomString();
