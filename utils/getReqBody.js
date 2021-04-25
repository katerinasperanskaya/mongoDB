const getReqBody = (req) => {
  return new Promise((res, rej) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        res(JSON.parse(body));
      });
    } catch (e) {
      rej(e);
    }
  });
};

module.exports = {
  getReqBody,
};
