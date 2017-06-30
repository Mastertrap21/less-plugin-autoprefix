module.exports = function(options) {
    if (typeof options === 'string') {
        try {
            options = JSON.parse(options);
        } catch(e) {
            var browsers = options.replace(/\s*,\s*/g, ",").split(",");
            options = {browsers: browsers};
        }
    }
    return options;
};
