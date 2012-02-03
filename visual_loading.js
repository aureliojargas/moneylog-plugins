// Loading indicator Plugin
vl_html = '<div id="visual_loading">loading...</div>';

var css_visual_loading = {
    'position': 'absolute',
    'text-align': 'center',
    'width': '60px',
    'background-color': '#750705',
    'color': '#fff',
    'font-family': 'Helvetica',
    'font-size': '12px',
    'padding': '5px',
    'top': '10px',
    'right': '10px',
    'display': 'none'
}

$(function() {
    // Append elements
    $('body').append(vl_html);

    // Apply plugin elements styles and functions
    $('#visual_loading').css(css_visual_loading);
    $('#visual_loading').ajaxStart(function(){ $(this).show(); });
    $('#visual_loading').ajaxStop(function(){ $(this).hide(); });
});