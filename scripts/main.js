var number = 3;

$('#htmlButton').click(function () {
    if ($('#html').css('display') == 'block' && number > 1) {
        $('#html').css('display', 'none');
    } else {
        $('#html').css('display', 'block');
    }
});
$('#cssButton').click(function () {
    if ($('#css').css('display') == 'block' && number > 1) {
        $('#css').css('display', 'none');
    } else {
        $('#css').css('display', 'block');
    }
});
$('#jsButton').click(function () {
    if ($('#js').css('display') == 'block' && number > 1) {
        $('#js').css('display', 'none');
    } else {
        $('#js').css('display', 'block');
    }
});


var range = ['#html', '#css', '#js'];
var widthRange = {
    3: '33.33333%',
    2: '50%',
    1: '100%'
};
$('.toggleButton').click(function () {
    number = 3;
    for (var i = 0; i < 3; i++) {
        if ($(range[i]).css('display') != 'block') {
            number--;
        }
    }
    $('.vertical').css('width', widthRange[number]);
});

var HTML_Editor = CodeMirror.fromTextArea(document.getElementById("htmlInput"), {
    lineNumbers: true,
    mode: "htmlmixed",
    indentUnit: 4,
    indentWithTabs: true,
    theme: "dracula"
});

var CSS_Editor = CodeMirror.fromTextArea(document.getElementById("cssInput"), {
    lineNumbers: true,
    value: 'h1 { color: black; font-size:30pt;}',
    matchBrackets: true,
    mode: "css",
    theme: "dracula"
});

var JS_Editor = CodeMirror.fromTextArea(document.getElementById("jsInput"), {
    value: "function myScript(){return 100;}\n",
    lineNumbers: true,
    matchBrackets: true,
    mode: "javascript",
    theme: "dracula"
});

var delay;

HTML_Editor.on("change", function () {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
});
CSS_Editor.on("change", function () {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
});
JS_Editor.on("change", function () {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
});

function pageCreate() {
    var htmlFrame = HTML_Editor.getValue();
    var styleFrame = CSS_Editor.getValue();
    var scriptFrame = JS_Editor.getValue();

    var page = 
        '<html>' +
        '<head>' +
        '<style>' +
        styleFrame +
        '</style>' +
        '</head>' +
        '<body>' +
        htmlFrame +
        '<script>' +
        scriptFrame +
        '</script>' +
        '</body>' +
        '</html>';
    return page;
}

function updatePreview() {
    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;

    preview.open();
    preview.write(pageCreate());
    preview.close();
}
setTimeout(updatePreview, 300);