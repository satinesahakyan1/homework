$(document).ready(function () {
    const $email = $('#email');
    const $password = $('#password');
    const $emailError = $('#emailError');
    const $passwordError = $('#passwordError');

    $email.on('input', function () {
        let lowercase = $email.val().toLowerCase();
        $email.val(lowercase);
        $emailError.text('');
        $email.removeClass('error');
    });

    $email.on('keydown', function (e) {
        if (e.shiftKey && e.key.match(/[A-Z?-?]/)) {
            e.preventDefault();
        }
    });

    $password.on('input', function () {
        let password = $password.val();
        if (password.length < 8) {
            $passwordError.text('Password must contain at least 8 characters.');
            $password.addClass('error');
        } else {
            $passwordError.text('');
            $password.removeClass('error');
        }
    });

    $('#myForm').on('submit', function (e) {
        e.preventDefault();

        let email = $email.val().trim();
        let password = $password.val();
        let isValid = true;

        $('.error-message').text('');
        $('input').removeClass('error');

        if (email === '') {
            $emailError.text('This field is required.');
            $email.addClass('error');
            isValid = false;
        }

        if (password === '') {
            $passwordError.text('This field is required.');
            $password.addClass('error');
            isValid = false;
        }

        const emailPattern = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
        if (email !== '' && !emailPattern.test(email)) {
            $emailError.text('Invalid email format.');
            $email.addClass('error');
            isValid = false;
        }

        if (password !== '' && password.length < 8) {
            $passwordError.text('Password must contain at least 8 characters.');
            $password.addClass('error');
            isValid = false;
        }

        if (password.includes(' ')) {
            $passwordError.text('Spaces are not allowed.');
            $password.addClass('error');
            isValid = false;
        }

        if (isValid) {
            console.log("Your email: " + email + "\nYour password: " + password);
            alert("Your email: " + email + "\nYour password: " + password + "\nPlease use \nemail:avromic@gmail.com \npassword:Avromic123")
        }
        if (email === 'avromic@gmail.com' && password === 'Avromic123') {
            window.location.href = 'accordeon.html';
            return;
        }
    });

    $('#togglePassword').on('click', function () {
        const type = $password.attr("type") === "password" ? "text" : "password";
        $password.attr('type', type);
        $(this).toggleClass('fa-eye fa-eye-slash');
    });
});

$(document).ready(function () {
    $('.accordion-content').hide();
    $('.accordion-header').click(function () {
        const content = $(this).next('.accordion-content');
        const symbol = $(this).find('.symbol');
        content.find('.accordion-content-mini').slideUp(300);
        $(this).parent().siblings().find('.accordion-content').slideUp(300);
        $(this).parent().siblings().find('.accordion-content-mini').slideUp(300);
        $(this).parent().siblings().find('.symbol').text('🔽');
        $(this).parent().siblings().find('.minisymbol').text('🔽');
        content.slideToggle(300, function () {
            if (content.is(':visible')) {
                symbol.text('🔼');
            } else {
                symbol.text('🔽');
                content.find('.minisymbol').text('🔽');
            }
        });
    });

    $('.accordion-header-mini').click(function (e) {
        const miniContent = $(this).next('.accordion-content-mini');
        const miniSymbol = $(this).find('.minisymbol');
        miniContent.slideToggle(250, function () {
            if (miniContent.is(':visible')) {
                miniSymbol.text('🔼');
            } else {
                miniSymbol.text('🔽');
            }
        });
        e.stopPropagation();
    });
});

$(document).ready(function () {
    const $sidebar = $(".sidebar-expanded");
    const $subMenu = $(".sub_menu");
    const $arrow = $(".arrow");

    function handleSidebarState() {
        if ($(window).width() > 900) {
            $sidebar.addClass("open");
            $subMenu.hide();
            $arrow.text("🔽");
            $(".sidebar-icons span").each(function (index) {
                if (index !== 0 && !$(this).closest('.logout').length) {
                    $(this).hide();
                }
            });
        } else {
            $sidebar.removeClass("open");
            $subMenu.hide();
            $arrow.text("🔽");
        }
    }

    handleSidebarState();
    $(window).on("resize", handleSidebarState);

    const $searchinput = $('#search-input');
    const $menu_ul = $('#menu_list');

    $(".menu-btn").click(function () {
        $searchinput.val('');
        $searchinput.css("border", "");

        if ($sidebar.hasClass("open")) {
            $sidebar.removeClass("open");
            $(".sub_menu").slideUp(300);
            $(".arrow").text("🔽");
            $(".menu-toggle").text("Open all");
            $(".sidebar-icons span").fadeIn(400);
            $(".menu_item").slideDown(300);
        } else {
            $sidebar.addClass("open");
            $(".menu_item > span").show();
            $(".menu_item > .arrow").show().text("🔽");
            $(".sub_menu").hide();
            $searchinput.val("");
            $searchinput.css("border", "");

            $(".sidebar-icons span").each(function (index) {
                if (index !== 0 && !$(this).closest('.logout').length) {
                    $(this).fadeOut(400);
                }
            });
        }
    });

    $(".menu_item").click(function (e) {
        if ($(e.target).is("a")) return;

        const submenu = $(this).children(".sub_menu");
        const arrow = $(this).children(".arrow");

        $(".sub_menu").slideUp(300);
        $(".menu_item").removeClass("active");
        $(".arrow").text("🔽");

        if (!submenu.is(":visible")) {
            submenu.slideDown(300);
            arrow.text("🔼");
            $(this).addClass("active");
        }

        setTimeout(updateToggleButton, 310);
    });

    $(".menu-toggle").click(function () {
        const value = $searchinput.val().toLowerCase().trim();
        const $visibleItems = $(".menu_item:visible");
        const $visibleSubmenus = $visibleItems.find(".sub_menu");
        const isAllOpen = $visibleSubmenus.filter(":visible").length === $visibleSubmenus.length;

        if (value !== "") {
            if (isAllOpen) {
                $visibleSubmenus.hide(300);
                $visibleItems.find(".arrow").text("🔽");
                $(this).removeClass("openAll").text("Open all");
            } else {
                $visibleSubmenus.show(300);
                $visibleItems.find(".arrow").text("🔼");
                $(this).addClass("openAll").text("Close all");
            }
        } else {
            const $allSubmenus = $(".menu_item").find(".sub_menu");
            const allOpen = $allSubmenus.filter(":visible").length === $allSubmenus.length;

            if (allOpen) {
                $allSubmenus.hide(300);
                $(".arrow").text("🔽");
                $(this).removeClass("openAll").text("Open all");
            } else {
                $allSubmenus.show(300);
                $(".arrow").text("🔼");
                $(this).addClass("openAll").text("Close all");
            }
        }
    });

    $(".sidebar-icons span").click(function () {
        const $menuToggle = $(".menu-toggle");
        const index = $(this).index();
        $searchinput.val('');
        $searchinput.css("border", "");
        $menu_ul.find('span').show();
        $menu_ul.find('.arrow').show().text("🔽");
        $(".sub_menu").slideUp(0);
        $(".menu-toggle").text("Open all");

        const $sidebarExpanded = $(".sidebar-expanded");
        if (!$sidebarExpanded.hasClass("open")) {
            $sidebarExpanded.addClass("open");
            $menuToggle.addClass("openAll");
            $(".sidebar-icons span").not(':first, :last').fadeOut(400);
        }

        $(".sidebar-icons span").each(function (index) {
            if (index !== 0 && !$(this).closest('.logout').length) {
                $(this).hide();
            }
        });

        if (index === 0) {
            $(".sub_menu").slideUp(300);
            $(".arrow").text("🔽");
            $(".search-input").focus().css({
                background: "#eef2ff",
                borderColor: "#000dff"
            });
            setTimeout(() => {
                $(".search-input").css({
                    background: "#f7f7f7",
                    borderColor: "#e0e0e0"
                });
            }, 800);
        } else {
            const targetMenu = $(".menu_item").eq(index - 1);
            const submenu = targetMenu.children(".sub_menu");
            const arrow = targetMenu.children(".arrow");

            $(".sub_menu").slideUp(300);
            $(".arrow").text("🔽");
            submenu.slideDown(300);
            arrow.text("🔼");
        }

        setTimeout(updateToggleButton, 310);
    });

    function updateToggleButton() {
        const allOpen = $(".sub_menu").filter(":hidden").length === 0;
        $(".menu-toggle").text(allOpen ? "Close all" : "Open all");
    }

    $searchinput.on("input", function () {
        const value = $(this).val().toLowerCase().trim();
        const $items = $(".menu_item");
        const $menuToggle = $(".menu-toggle");
        let anyMatch = false;
        let subOnlyMatches = true;

        $items.show();
        $items.find(".sub_menu").slideUp(0);
        $items.find(".arrow").text("🔽");
        $searchinput.css("border", "");

        if (value === "") {
            if ($menuToggle.hasClass("subOnly") && !$menuToggle.hasClass("openAll")) {
                $menuToggle.removeClass("subOnly").text("Open all");
                $items.find(".sub_menu").slideUp(0);
                $items.find(".arrow").text("🔽");
                $(".menu_item").removeClass("active");
            } else if ($menuToggle.hasClass("openAll")) {
                $items.find(".sub_menu").show(0);
                $items.find(".arrow").text("🔼");
                $menuToggle.text("Close all");
            } else {
                $items.find(".sub_menu").slideUp(0);
                $items.find(".arrow").text("🔽");
                $(".menu_item").removeClass("active");
            }
            return;
        }

        $items.each(function () {
            const $item = $(this);
            const itemText = $item.children("span").text().toLowerCase().trim();
            let match = itemText.startsWith(value);
            let submatch = false;

            if (!match) {
                $item.find(".sub_menu li").each(function () {
                    const subText = $(this).text().toLowerCase().trim();
                    if (subText.startsWith(value)) {
                        submatch = true;
                        return false;
                    }
                });
            }

            if (match) {
                if ($item.hasClass("active")) {
                    $item.show();
                    $item.find(".sub_menu").show(0);
                    $item.find(".arrow").text("🔼");
                } else {
                    $item.show();
                    $item.find(".sub_menu").hide(0);
                    $item.find(".arrow").text("🔽");
                }

                anyMatch = true;
                subOnlyMatches = false;

                if ($menuToggle.hasClass("openAll")) {
                    $item.find(".sub_menu").show(150);
                    $item.find(".arrow").text("🔼");
                    $menuToggle.removeClass("subOnly");
                }
            } else if (submatch) {
                $item.show();
                $item.find(".sub_menu").show(150);
                $item.find(".arrow").text("🔼");
                anyMatch = true;
            } else {
                $item.hide();
            }
        });

        if (anyMatch && subOnlyMatches) {
            $menuToggle.text("Close all");
            $menuToggle.addClass("subOnly");
            $menuToggle.on("click", function () {
                $menuToggle.removeClass("openAll");
            });
        } else if (anyMatch) {
            $menuToggle.removeClass("subOnly");
        } else {
            $searchinput.css("border", "1px solid red");
        }
    });


});

//     document.querySelectorAll("select[data-search='true']").forEach(select => {
//   // ստեղծում ենք որոնման input
//   const input = document.createElement("input");
//   input.placeholder = "Որոնել...";
//   select.parentElement.prepend(input);

//   input.addEventListener("input", () => {
//     const term = input.value.toLowerCase();
//     for (const option of select.options) {
//       const match = option.text.toLowerCase().includes(term);
//       option.style.display = match ? "block" : "none";
//     }
//   });
// });