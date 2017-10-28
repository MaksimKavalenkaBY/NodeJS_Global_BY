import http from 'http';
import config from '../../config/config.json';
import { logger } from '../../middlewares';

const product = {
  id: 1,
  name: 'Supreme T-Shirt',
  brand: 'Supreme',
  price: 99.99,
  options: [{
    color: 'blue',
  }, {
    size: 'XL',
  }],
};

export default function createJsonServer(port) {
  http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(product));
  }).listen(port, () => logger.info(`JSON ${config.server_listening} ${port}!`));
}
