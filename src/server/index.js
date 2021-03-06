import path from 'path';
import webpack from 'webpack';
import express from 'express';
import config from '../../webpack.config.babel';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Listening at http://localhost:3000/');
});