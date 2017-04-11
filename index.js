module.exports = () => {
    return {
        beforeRender(files, metalsmith, done) {
            const meta = metalsmith.metadata();
            meta.tmpl.hmr = true;
            done();
        }
    };
};