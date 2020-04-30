$(document).ready(function() {

    $(".menu-btn").on("click", function() {
        $("nav").addClass("mob-menu-active");
    });

    $(".close").on("click", function() {
        $("nav").removeClass("mob-menu-active");
    });

    $(".form-fedback").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: form_data,
            success: function(success) {
                $('.popup-with-form').click();
                console.log(success);
            },
            error: function(error) {
                $('.popup-with-form').click();
                console.log(error);
            }
        });
        return false;
    });

    function f_acc(){
        $(".acc-head").children(".plus").removeClass("minus");
        $('.accordeon .acc-body').not($(this).next()).slideUp(200).parent(".acc-box").removeClass("acc-active");
        $(this).next().slideToggle(200).parent(".acc-box").addClass("acc-active");
        $(this).children(".plus").addClass("minus");
    }

    $('.accordeon .acc-head').on('click', f_acc);

    $('.single').slick({
        infinite: true,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.single-2').slick({
        infinite: true,
        dots: true,
        arrows: false,
        adaptiveHeight: true
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

});