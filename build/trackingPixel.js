var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    var URL;
    return __generator(this, function (_a) {
        URL = "https://vpsli4228.a24vps.com/nodejs";
        //intial hit
        pageVisit(URL);
        anyLinkClicked(URL);
        cookiePopUpBar();
        cookieCleaner();
        return [2 /*return*/];
    });
}); };
var anyLinkClicked = function (baseurl) { return __awaiter(_this, void 0, void 0, function () {
    var link, i;
    var _this = this;
    return __generator(this, function (_a) {
        link = document.getElementsByTagName("a");
        for (i = 0; i < link.length; i++) {
            link[i].addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                var _a, host, pathname, hostname, href, search, ancestorOrigins, origin, protocol, port, hash, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = window.location, host = _a.host, pathname = _a.pathname, hostname = _a.hostname, href = _a.href, search = _a.search, ancestorOrigins = _a.ancestorOrigins, origin = _a.origin, protocol = _a.protocol, port = _a.port, hash = _a.hash;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, fetch(baseurl + "/api/analytics/link-clicked/", {
                                    method: "post",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        host: host,
                                        pathname: pathname,
                                        hostname: hostname,
                                        href: href,
                                        search: search,
                                        ancestorOrigins: ancestorOrigins,
                                        origin: origin,
                                        protocol: protocol,
                                        port: port,
                                        hash: hash,
                                        clicked: e.target.href
                                    })
                                })];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            if (error_1) {
                                throw new Error("Javascript is blocked");
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
        return [2 /*return*/];
    });
}); };
var pageVisit = function (baseurl) { return __awaiter(_this, void 0, void 0, function () {
    var _a, host, pathname, hostname, href, search, ancestorOrigins, origin, protocol, port, hash, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = window.location, host = _a.host, pathname = _a.pathname, hostname = _a.hostname, href = _a.href, search = _a.search, ancestorOrigins = _a.ancestorOrigins, origin = _a.origin, protocol = _a.protocol, port = _a.port, hash = _a.hash;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetch(baseurl + "/api/analytics/page-visit/", {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            host: host,
                            pathname: pathname,
                            hostname: hostname,
                            href: href,
                            search: search,
                            ancestorOrigins: ancestorOrigins,
                            origin: origin,
                            protocol: protocol,
                            port: port,
                            hash: hash
                        })
                    })];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                if (error_2) {
                    throw new Error("Javascript is blocked");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var cookiePopUpBar = function () {
    var consent = localStorage.getItem("nocookies");
    if (!consent) {
        var barHTML = "\n  <div style=\"background: #00cdff;\n  background: #00cdff;\n  color: #5a5a5a;\n  padding: 20px;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\"><p>Tento web pou\u017E\u00EDv\u00E1 jen technick\u00E9/funk\u010Dn\u00ED cookies, aby web mohl spr\u00E1vn\u011B fungovat. Nepou\u017E\u00EDv\u00E1me \u017E\u00E1dn\u00E9 cookies t\u0159et\u00EDch stran, jako jsou cookies slu\u017Eeb Google Analytics, Facebook atp.</p> <span style=\"background: #229dc5;\n  color: white;\n  padding: 20px;\n  cursor: pointer; margin: 0px 10px;\" id=\"confirm-rg-button-local\">Rozum\u00EDm!</span></div>\n  ";
        var bodyTag = document.getElementsByTagName("body")[0];
        var div_1 = document.createElement("div");
        div_1.innerHTML = barHTML;
        bodyTag.appendChild(div_1);
        var btn = document.getElementById("confirm-rg-button-local");
        btn.addEventListener("click", function () {
            localStorage.setItem("nocookies", "yes");
            div_1.remove();
        });
    }
};
var cookieCleaner = function () {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};
//# sourceMappingURL=trackingPixel.js.map