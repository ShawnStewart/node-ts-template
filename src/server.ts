import { createServer } from 'http';

const server = createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
});

export const initServer = (): void => {
    server.listen(8001, () => {
        console.log('listening on 8001');
    });
};
