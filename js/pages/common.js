$.fn.hyphenate = function () {
    var all = "[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]",
        glas = "[аеёиоуыэю\я]",
        sogl = "[бвгджзклмнпрстфхцчшщ]",
        zn = "[йъь]",
        shy = "\xAD",
        re = [];

    re[1] = new RegExp("(" + zn + ")(" + all + all + ")", "ig");
    re[2] = new RegExp("(" + glas + ")(" + glas + all + ")", "ig");
    re[3] = new RegExp("(" + glas + sogl + ")(" + sogl + glas + ")", "ig");
    re[4] = new RegExp("(" + sogl + glas + ")(" + sogl + glas + ")", "ig");
    re[5] = new RegExp("(" + glas + sogl + ")(" + sogl + sogl + glas + ")", "ig");
    re[6] = new RegExp("(" + glas + sogl + sogl + ")(" + sogl + sogl + glas + ")", "ig");
    return this.each(function () {
        var text = $(this).html();
        for (var i = 1; i < 7; ++i) {
            text = text.replace(re[i], "$1" + shy + "$2");
        }
        $(this).html(text);
    });
};

function getComputedTranslateY(obj) {
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(obj),
        transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) return parseFloat(mat[1].split(', ')[13]);
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
}

function getCssValuePrefix() {
    var rtrnVal = '';//default to standard syntax
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    // Create a temporary DOM object for testing
    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++) {
        // Attempt to set the style
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

        // Detect if the style was successfully set
        if (dom.style.background) {
            rtrnVal = prefixes[i];
        }
    }

    dom = null;
    delete dom;

    return rtrnVal;
}

function GetNoun(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number == 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
}

function index(list, item) {
    return Array.prototype.indexOf.call(list, item);
}

let selects = $('.select').selectize();



