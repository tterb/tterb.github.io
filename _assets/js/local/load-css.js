! function(b) {
  var a = function(v, g, c) {
    function e(d) {
      return j.body ? d() : void setTimeout(function() {
        e(d)
      })
    }

    function h() {
      m.addEventListener && m.removeEventListener("load", h), m.media = c || "all"
    }
    var p, j = b.document,
      m = j.createElement("link");
    if (g) {
      p = g
    } else {
      var w = (j.body || j.getElementsByTagName("head")[0]).childNodes;
      p = w[w.length - 1]
    }
    var q = j.styleSheets;
    m.rel = "stylesheet", m.href = v, m.media = "only x", e(function() {
      p.parentNode.insertBefore(m, g ? p : p.nextSibling)
    });
    var k = function(f) {
      for (var d = m.href, i = q.length; i--;) {
        if (q[i].href === d) {
          return f()
        }
      }
      setTimeout(function() {
        k(f)
      })
    };
    return m.addEventListener && m.addEventListener("load", h), m.onloadcssdefined = k, k(h), m
  };
  "undefined" != typeof exports ? exports.loadCSS = a : b.loadCSS = a
}("undefined" != typeof global ? global : this),
function(b) {
  if (b.loadCSS) {
    var a = loadCSS.relpreload = {};
    if (a.support = function() {
        try {
          return b.document.createElement("link").relList.supports("preload")
        } catch (d) {}
      }, a.poly = function() {
        for (var d = b.document.getElementsByTagName("link"), f = 0; f < d.length; f++) {
          var e = d[f];
          "preload" === e.rel && "style" === e.getAttribute("as") && (b.loadCSS(e.href, e), e.rel = null)
        }
      }, !a.support()) {
      a.poly();
      var c = b.setInterval(a.poly, 300);
      b.addEventListener && b.addEventListener("load", function() {
        b.clearInterval(c)
      })
    }
  }
}(this);
var $fonts = "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Merriweather:300,300i,400,400i,700,700i,900,900i";
loadCSS($fonts);
loadCSS("/assets/fonts/AvenirNext.css");
loadCSS("/assets/fonts/GothamHTF.css");
loadCSS("/assets/fonts/FiraCode.css");
loadCSS("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css");
loadCSS("/assets/styles/main.css");
