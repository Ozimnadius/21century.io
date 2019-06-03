(function () {

    let mnewsSwitches = $('.mnews__switch'),
        mnewsTabs = $('.mnews__tab'),
    maxH = 0;

    // mnewsTabs.each(function(indx, element){
    //     let item = $(element),
    //         height = item.outerHeight();
    //
    //     debugger;
    //
    //     if (maxH<height){
    //         maxH = height;
    //     }
    // });
    //
    // $('.mnews__tabs').css('height', maxH);


    mnewsSwitches.on('click', function (e) {
        let $this = $(this),
            id = $this.data('id'),
            tab = mnewsTabs.filter('[data-id='+id+']');

        mnewsTabs.removeClass('active');
        mnewsSwitches.removeClass('active');
        tab.addClass('active');
        $this.addClass('active');

    });
}());