window.addEventListener('load', function () {
    var links = document.querySelectorAll('section.tabbed-box > nav > a');
    Array.prototype.forEach.call(links, function (link) {
        var targetId = link.getAttribute('data-target-id');
        if (!targetId) {
            return;
        }
        var target = document.getElementById(targetId);
        if (!target) {
            return;
        }
        link.addEventListener('click', function () {
            Array.prototype.forEach.call(links, function (link0) {
                if (link0 == link) {
                    link0.classList.add("selected");
                }
                else {
                    link0.classList.remove("selected");
                }
            });
            var panes = link.parentElement.parentElement.children;
            Array.prototype.forEach.call(panes, function (pane) {
                if (pane.tagName === "NAV") {
                    return;
                }
                if (pane === target) {
                    pane.classList.add("selected");
                }
                else {
                    pane.classList.remove("selected");
                }
            });
        });
    });
});