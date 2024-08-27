document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[class*="txt-anim-"]').forEach(t => {
        let a = 0;
        const i = (t, s) => {
                let n = "";
                return t.childNodes.forEach(t => {
                    var e;
                    t.nodeType === Node.TEXT_NODE ? (e = t.textContent.trim().split(" "), n += e.map(t => {
                        var e;
                        return s ? (e = t.split("").map((t, e) => `<span style="transition-delay: ${(a+.025*(e+1)).toFixed(3)}s">${t}</span>`).join(""), a += .03 * t.length, `<span>${e}</span>`) : `<span style="transition-delay: ${(a+=.04).toFixed(3)}s">${t}</span>`
                    }).join(" ")) : t.nodeType === Node.ELEMENT_NODE && (e = t.outerHTML.replace(t.innerHTML, i(t, s)), n += s ? `<span>${e}</span>` : `<span style="transition-delay: ${a.toFixed(3)}s">${t.outerHTML}</span>`, a += .04)
                }), n
            },
            s = (e, s) => {
                let t = 0;
                s && /^txt-delay-\d+$/.test(s) && (t = parseInt(s.replace("txt-delay-", ""), 10)), setTimeout(() => {
                    var t = e.getBoundingClientRect();
                    t.top < window.innerHeight && 0 < t.bottom && (e.classList.add("txt-anim-visible"), s) && e.classList.remove(s)
                }, t)
            };
        var e = t.classList.contains("txt-split"),
            e = (t.innerHTML = i(t, e), new IntersectionObserver(t => {
                t.forEach(t => {
                    var e;
                    t.isIntersecting ? (e = [...t.target.classList].find(t => t.startsWith("txt-delay-")), s(t.target, e)) : t.target.classList.contains("txt-repeat") && t.target.classList.remove("txt-anim-visible")
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            }).observe(t), [...t.classList].find(t => t.startsWith("txt-delay-")));
        s(t, e)
    })
});