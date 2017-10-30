console.warn('This template is DEPRECATED. Please upgrade umeboshi-cli to v3+ and use the new "webpack" template');

module.exports = () => {
    console.error('This entrypoint format is deprecated. Please upgrade umeboshi-cli.');
    console.error();
    console.error('npm install -g umeboshi-cli');
    return {};
};
