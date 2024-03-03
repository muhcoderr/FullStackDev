import express from "express";

const app = express();

const port = 3000;

app.get("/jokes", (req, res) => {
  const jokes = [
    {
     "id":"1",
     "name":"joke 1",
     "description":"aray bahi ma joke ho app ka"
    },
    {
     "id":"2",
     "name":"joke 2",
     "description":"na kar bahii"
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
