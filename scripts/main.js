/**
 * Created by Kirill on 10-Apr-17.
 */
var html = '<h1>Hellow World</h1>';
var css = '';
var js = '';

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

var range = ['#html','#css','#js','#page'];
var widthRange = {4:'25%',3:'33.33333%',2:'50%',1:'100%'};
$('.toggleButton').click(function () {
    number = 4;
    for (var i = 0; i < 4; i++) {
        if($(range[i]).css('display') != 'block') {
            number--;
        }
    }
    $('.vertical').css('width', widthRange[number]);
});

function pageCreate() {
    html = $('#htmlInput').val();
    css = $('#cssInput').val();
    js = $('#jsInput').val();
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

        var html = '<h1>Hellow World</h1>';
        var css = '';
        var js = '';

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

        var range = ['#html','#css','#js','#page'];
        var widthRange = {4:'25%',3:'33.33333%',2:'50%',1:'100%'};
        $('.toggleButton').click(function () {
            number = 4;
            for (var i = 0; i < 4; i++) {
                if($(range[i]).css('display') != 'block') {
                    number--;
                }
            }
            $('.vertical').css('width', widthRange[number]);
        });

        function pageCreate() {
            html = $('#htmlInput').val();
            css = $('#cssInput').val();
            js = $('#jsInput').val();
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
