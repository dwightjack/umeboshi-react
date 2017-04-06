module.exports = () => {
    return {
        afterRender(files, metalsmith, done) {
            const webpackServer = files['scripts/webpack-server.js'];

            if (webpackServer) {
                files['scripts/webpack-server.js'].contents = new Buffer( //eslint-disable-line no-param-reassign
                    webpackServer.contents.toString().replace('hot: false', 'hot: true')
                );
            }
            done();
        }
    };
};