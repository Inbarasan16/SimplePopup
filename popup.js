/*
Name    :Simple Popup
ver     :1.0
Author  :Inbarasan
*/

(function ($) {
    displayHide = function (sel) {
        Container = sel.context.hash;
        $(Container).css('display', 'none');
    };
    popclose = function (sel, Container) {
        $('body').append($(Container));
        $(Container).removeClass('popbox').css('display', 'none');
        $('.overlay').remove();
    };

    $.fn.Popup = function () {

        return this.each(function () {

            var sel = $(this);
            displayHide(sel);
            Container = sel.context.hash;
            closebtn = $(Container).find('a.close');
            sel.click(function () {
                $.popup(sel);
            });
            closebtn.click(function () {
                popclose(sel, Container);
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
            });
        });

    };
    $.popup = function (sel) {
        Container = sel.context.hash;
        if (Container) {
            var overlay = document.createElement('div');
            overlay.setAttribute('class', 'overlay');
            document.body.appendChild(overlay);
            $('.overlay').append($(Container));
            $(Container).addClass('popbox').css('display', 'block');
            var popw = $('.popbox').width();
            var poph = $('.popbox').height();
            popw = popw / 2;
            poph = poph / 2;
            $('.popbox').css('margin-top', -poph).css('margin-left', -popw);
        }
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    };
})(jQuery);