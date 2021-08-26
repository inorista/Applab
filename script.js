window.onload = function() {
    const header = document.getElementsByClassName('header')[0];
    const phone = document.getElementsByClassName('phone')[0];
    const screenHeight = screen.height - 140;
    phone.style.height = screenHeight - 100 + "px"
    header.style.height = screenHeight + "px";
    const arrow = document.getElementsByClassName('fast_perf')[0];
    const phone2_front = document.getElementsByClassName('phone2_front')[0];
    const phone2_bg = document.getElementsByClassName('bg_phone2')[0];
    const phone2_an = document.getElementsByClassName('animation_phone2')[0];
    const drawhand = document.getElementsByClassName('vec_perf')[0];
    const coin = document.getElementsByClassName('autoprf_img')[0];
    const network = document.getElementsByClassName('networkprf_img')[0];
    const reward = document.getElementsByClassName('rewdprf_img')[0];
    const button = document.getElementsByClassName('back_to_top')[0];
    const hd_moveon = document.getElementsByClassName('navbar_hd')[0];
    const menuBtn = document.getElementsByClassName('menu')[0];
    let menuOpen = false;
    phone2_front.style.height = screenHeight - 100 + 'px';
    phone2_bg.style.height = screenHeight - 280 + 'px';
    phone2_an.style.height = screenHeight - 1800 + 'px';
    arrow.addEventListener("mouseover", arrowAn, true);
    arrow.addEventListener("mouseout", arrowAns, true);
    drawhand.addEventListener('mouseover', drawAn, true);
    drawhand.addEventListener('mouseout', drawAns, true);
    coin.addEventListener('mouseover', spinIn, true);
    coin.addEventListener('mouseout', spinOut, true);
    network.addEventListener('mouseover', networkSpinIn, true);
    network.addEventListener('mouseout', networkSpinOut, true);
    reward.addEventListener('mouseover', rewardSpinIn, true);
    reward.addEventListener('mouseout', rewardSpinOut, true);

    window.onscroll = function() {
        appearFunc()
    };

    function appearFunc() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            button.style.display = "block";
            anime({
                targets: ".back_to_top",
                translateY: -50,
                opacity: 1,
                easing: "linear",
                duration: 50,
            })
        } else {
            anime({
                targets: ".back_to_top",
                translateY: 100,
                opacity: 0,
                easing: "linear",
                duration: 100,

            })
        }
    }

    function arrowAn() {
        anime({
            targets: '.arrow_animation',
            rotate: '0.48turn',
            duration: 1400,
        })
    }

    function arrowAns() {
        anime({
            targets: '.arrow_animation',
            rotate: '-0.1turn',
            duration: 1400,
        })
    }

    function drawAn() {
        anime({
            targets: '.drawhand_animation',
            translateY: -18,
            duration: 3000,
        })
    }

    function drawAns() {
        anime({
            targets: '.drawhand_animation',
            translateY: -5,
            duration: 3000,
        })
    }

    function spinIn() {
        anime({
            targets: '.coin',
            rotate: '3turn',
            duration: 3500,
            scale: 1.18,
        })
    }

    function spinOut() {
        anime({
            targets: '.coin',
            rotate: '-3turn',
            duration: 5000,
            scale: 1,
        })
    }

    function networkSpinIn() {
        anime({
            targets: '.network',
            scale: {
                value: 0.9,
                duration: 500,
                easing: 'easeInOutQuart'
            },
            rotate: {
                value: '0.5turn',
                duration: 1400,
                delay: 300,
                easing: 'easeInOutSine'
            },
        })
    }

    function networkSpinOut() {
        anime({
            targets: '.network',
            scale: {
                value: 1,
                duration: 500,
                easing: 'easeInOutQuart'
            },
            rotate: {
                value: '-1turn',
                duration: 1400,
                delay: 300,
                easing: 'easeInOutSine'
            },
        })
    }

    function rewardSpinIn() {
        anime({
            targets: '.reward',
            scale: 1.125,
            easing: 'easeInOutQuart',
            duration: 1000,
        })
    }

    function rewardSpinOut() {
        anime({
            targets: '.reward',
            scale: 1,
            easing: 'easeInOutQuart',
            duration: 1000,
        })
    }
    particlesJS('particles-js2',

        {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FCAE61"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#ffffff",
                    "opacity": 1,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            hd_moveon.classList.remove('wrap');
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;

            hd_moveon.classList.add('wrap');
        }
    })
}