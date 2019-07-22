/*!
 * Dash v1.0.0
 * Dependences: 
 *  - jQuery v3.4.1 (https://code.jquery.com/jquery-3.4.1.min.js)
 *  - Boostrap css v3.3.7 (https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css)
 * 
 *  By JJ Consulting (www.jjconsulting.com.br)
 * 
 */

(function ($) {
    $.fn.dash = function (options) {
        var settings = $.extend({
            url: [], 
            wrapp: 'container-fluid',
            col: '',
            height: '300px',
            loader: true,
            loader_time: 5000,
            rp_adjustments: true
        }, options);

        // set page loader
        if(settings.loader) {
            $('body').append('<style>#loader{z-index:10000;width:100%;height:100vh;background:rgba(255,255,255,1);position:absolute;top:0;left:0;overflow:hidden;display:none}#loader .spin{position:absolute;left:50%;top:50%;z-index:10001;width:150px;height:150px;margin:-75px 0 0 -75px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}</style>');
            $('body').append('<div id="loader"><div class="spin"></div></div>');
            $('#loader').css('display', 'block');
            $('body').css('overflow', 'hidden');
            window.setTimeout(function () {
                $('#loader').css('display', 'none');
                $('body').css('overflow', 'auto');
            }, settings.loader_time);
        }

        // set wrapp
        if(!this.hasClass('container') || !this.hasClass('container-fluid')) {
            this.addClass(settings.wrapp);
        }

        // set col if is not specified
        if(settings.col == '') {
            console.log(settings.url.length);
            if(settings.url.length == 1){
                settings.col = 'col-md-12';
            } else if(settings.url.length == 2) {
                settings.col = 'col-md-6';
            } else if(settings.url.length == 3) {
                settings.col = 'col-md-4';
            } else if(settings.url.length == 4) {
                settings.col = 'col-md-3';
            } else {
                settings.col = 'col-md-12';
            };
        }

        // Insert ReportPortal style adjustments
        if(settings.rp_adjustments){
            $('body').append('<style>body{padding:30px 15px;}iframe{width:100%;height:100%;border:0}.Body{padding:0!important}#idReportTable{width:100%!important;border:none!important;background:#fff!important}#idReportTable td,#idReportTable tr{background:#fff!important;border:none!important}.table>thead>tr>th{border:none!important;background:#fff!important}</style>');
        }

        var html = '';
        
        html += '<div class="row">';

        settings.url.forEach(function(url){
            html += '<div class="' + settings.col + '" style="height:' + settings.height + ';padding-bottom: 20px">';
            html +=     '<iframe src="' + url + '"></iframe>';
            html += '</div>';
        });

        html += '</div>'

        this.append(html);

    };
})(jQuery);