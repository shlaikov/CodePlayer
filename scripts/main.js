var number = 4;

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
$('#pageButton').click(function () {
    if ($('#page').css('display') == 'block' && number > 1) {
        $('#page').css('display', 'none');
    } else {
        $('#page').css('display', 'block');
    }
});

var range = ['#html', '#css', '#js'];
var widthRange = {
    3: '33.33333%',
    2: '50%',
    1: '100%'
};
$('.toggleButton').click(function () {
    number = 4;
    for (var i = 0; i < 4; i++) {
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
    lineNumbers: true,
    value: "function myScript(){return 100;}\n",
    matchBrackets: true,
    mode: "javascript",
    theme: "dracula"
});

function pageCreate() {
    var html = HTML_Editor.getValue();
    var css = CSS_Editor.getValue();
    var js = JS_Editor.getValue();
    $('#page').html(
        '<html>' +
        '<head>' +
        '<style>' +
        css +
        '</style>' +
        '</head>' +
        '<body>' +
        html +
        '</body>' +
        '</html>'
    )
}
pageCreate();

$('.input').keyup(function () {
    pageCreate();
});
