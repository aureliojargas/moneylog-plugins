// Personal CSS Tweaks

var css_app_flavor = {
    'font-size': '13px',
    'line-height': '6px',
    'padding': '0 0 0 112px',
    'text-transform': 'lowercase',
    'margin-top': '-6px'
}

var css_editor_data = {
    'background-color': '#222',
    'color': '#EEE',
    'line-height': '16px',
    'font-size': '12px',
    'padding': '15px',
    'font-family': 'Monaco'
}

var css_editor_filename = {
    'left': '10px',
    'top': '16px',
    'line-height': '32px',
    'padding': '0 15px',
    'color': '#777',
    'background-color': '#222',
    'font-family': 'Monaco'
}

var css_editor_data_wrapper = {
    'border': '0',
    'top': '5px',
    'left': '5px',
    'right': '35px',
    'padding': '40px 5px 40px',
}

$(function() {
    //fileName = $('#editor-file-name').html();
    $('#app-name').css('line-height',  '42px');
    $('#charts').css('margin-top', '2em');

    $('#editor').css('background-color', '#191919');
    $('#app-flavor').css(css_app_flavor);
    $('#editor-data').css(css_editor_data);
    $('#editor-file-name').css(css_editor_filename);
    //$('#editor-file-name').html(fileName.substr(fileName.lastIndexOf('/') + 1, fileName.length));
    $('#editor-data-wrapper').css(css_editor_data_wrapper);
});