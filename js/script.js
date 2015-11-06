$(document).ready(function() {
    $('.carousel1').bxSlider({
        //mode: 'vertical',
        //or make it fade:
        mode: 'horizontal',
        auto: true,
        pause: 6000,
        slideMargin: 0,
        easing: 'swing',
        speed: 2000,
        pagerCustom: '.carousel__pager'
    });
});


// To load Default Button in Work Section

document.body.onload = function() {
    document.getElementById('button-1').focus();
};

/* Function for ScrollUp */

$('.smoothscroll').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function() {
        window.location.hash = target;
    });
});


/* Bootstrap Carousel */

$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    })
});


/*Team Hover Effect*/

$(".memember1,.person1").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".john-info").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".john-info").hide();
    }
});

$(".memember2,.person2").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".chystine-info").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".chystine-info").hide();
    }
});

$(".memember3,.person3").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".martin-info").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".martin-info").hide();
    }
});

$(".memember4,.person4").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".steve-info").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".steve-info").hide();
    }
});

/*Service Hover Effect*/

$(".research-hover").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".arrow-down1").css('border-top', '130px solid #ed485c');
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".arrow-down1").css('border-top', '130px solid #a9b8cc');
    }
});

$(".develop-hover").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".arrow-down2").css('border-top', '130px solid #ed485c');
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".arrow-down2").css('border-top', '130px solid #a9b8cc');
    }
});

$(".develop-hover1").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".arrow-down2").css('border-top', '130px solid #ed485c');
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".arrow-down2").css('border-top', '130px solid #a9b8cc');
    }
});

$(".testing-hover").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".arrow-down3").css('border-top', '130px solid #ed485c');
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".arrow-down3").css('border-top', '130px solid #a9b8cc');
    }
});

$(".release-hover").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".arrow-down4").css('border-top', '130px solid #ed485c');
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".arrow-down4").css('border-top', '130px solid #a9b8cc');
    }
});


// Function to change Image on Mouseover in Client Section.

function preloader() {
    var allimages = document.getElementsByTagName("img");
    var preloadimages = [];
    for (var i = 0; i < allimages.length; i++) {
        //if image carries "data-over" attribute
        if (allimages[i].getAttribute("data-over")) {
            //preload "over" image
            preloadimages.push(new Image());
            preloadimages[preloadimages.length - 1].src = allimages[i].getAttribute("data-over");
            allimages[i].onmouseover = function() {
                this.src = this.getAttribute("data-over");
            }
            allimages[i].onmouseout = function() {
                this.src = this.getAttribute("data-out");
            }
        } //end of if statement.
    } //end of for loop statement.
}

//Protofolio Section.

$(document).ready(function() {

    (function($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });
    })(jQuery);

});

$(".tabs a").click(function() {
    $(this).css("background-color", " #ed485c");
});

/*Blog Hover Effect*/

$(".image1").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project1").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project1").hide();
    }
});

$(".image2").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project2").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project2").hide();
    }
});

$(".image3").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project3").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project3").hide();
    }
});

$(".image4").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project4").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project4").hide();
    }
});

$(".image5").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project5").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project5").hide();
    }
});


$(".image6").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project6").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project6").hide();
    }
});

$(".image7").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project7").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project7").hide();
    }
});

$(".image8").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project8").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project8").hide();
    }
});

$(".image9").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project9").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project9").hide();
    }
});

$(".image10").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".project10").show();
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".project10").hide();
    }
});


$(".fa.fa-eye").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".eye").css({
            "border-color": "#ce0d3e transparent transparent transparent"
        });
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".eye").css({
            "border-color": "#fff transparent transparent transparent"
        });
    }
});


$(".fa.fa-link").on({

    mouseenter: function() {
        //stuff to do on mouse enter
        $(".link").css({
            "border-color": "transparent #ce0d3e transparent"
        });
    },
    mouseleave: function() {
        //stuff to do on mouse leave
        $(".link").css({
            "border-color": "transparent #fff transparent"
        });
    }
});
