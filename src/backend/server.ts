import path from 'path';
import express from 'express';

const app = express();
const DIST_DIR = 'dist';

const HTML_FILE = 'index.html';

app.use(express.static(DIST_DIR));

app.get('/', (req: any, res: any): void => {
  res.sendFile(HTML_FILE, { root: DIST_DIR });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
