(function () {

    let popup = $('.popup'),
        popupWrapper = popup.find('.popup__wrapper');

    popup.on('click', function (e) {
        let target = $(e.target);

        if (target.closest('.popup__wrapper').length === 0){
            popup.removeClass('active');
        }
    });

    $('body').on('click', '.form__close', function (e) {
        e.preventDefault();
        popup.removeClass('active');
    });

    $('.jsCallback').on('click', function (e) {
        let $this = $(this),
            template = $(document.querySelector('#callback').content),
            html = template.find('.callback').clone();

        popupWrapper.html(html);
        popup.addClass('active');

    });

    $('.jsCallorder').on('click', function (e) {
        let $this = $(this),
            template = $(document.querySelector('#callorder').content),
            html = template.find('.callorder').clone(),
            img = html.find('.form__pic'),
            id = html.find('.form__id'),
            price = html.find('.form__price');

        img.text($this.data('img'));
        id.text($this.data('id'));
        price.text($this.data('price'));

        popupWrapper.html(html);
        popup.addClass('active');

    });



}());