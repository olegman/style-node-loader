module.exports = function (content) {
    if (this.cacheable) this.cacheable();
    var locals = '';
    var startIndex = content.indexOf('locals');
    if (startIndex != -1) locals = content.substr(startIndex);
    if (locals) {
        return [
            "var " + locals,
            "module.exports = locals;"
        ].join("\n");
    } else {
        return "module.exports = {};"
    }
}
