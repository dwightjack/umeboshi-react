module.exports = () => {
    console.error('This entrypoint format is deprecated. Please upgrade umeboshi-cli.');
    console.error();
    console.error('npm install -g umeboshi-cli');
    return {};
};

module.exports.beforeRender = () => (files, metalsmith, done) => {
    const meta = metalsmith.metadata();
    meta.tmpl.hmr = true;
    done();
};