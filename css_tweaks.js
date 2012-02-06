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
}

var css_editor_data_wrapper = {
    'border': '0',
    'top': '5px',
    'left': '5px',
    'right': '35px',
    'padding': '5px',
    'padding-bottom': '40px'
}

$(function() {
    $('#app-name').css('line-height',  '42px');
    $('#charts').css('margin-top', '2em');

    $('#editor').css('background-color', '#191919');
    $('#app-flavor').css(css_app_flavor);
    $('#editor-data').css(css_editor_data);
    $('#editor-data-wrapper').css(css_editor_data_wrapper);
});