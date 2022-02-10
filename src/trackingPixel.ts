window.onload = async () => {
  const URL: string = "https://vpsli4228.a24vps.com/nodejs";
  //intial hit
  pageVisit(URL);
  anyLinkClicked(URL);
  cookiePopUpBar();
  cookieCleaner();
};
const anyLinkClicked = async (baseurl: string) => {
  const link = document.getElementsByTagName("a");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", async (e: any) => {
      const {
        host,
        pathname,
        hostname,
        href,
        search,
        ancestorOrigins,
        origin,
        protocol,
        port,
        hash,
      } = window.location;
      try {
        await fetch(baseurl + "/api/analytics/link-clicked/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            host,
            pathname,
            hostname,
            href,
            search,
            ancestorOrigins,
            origin,
            protocol,
            port,
            hash,
            clicked: e.target.href,
          }),
        });
      } catch (error) {
        if (error) {
          throw new Error("Javascript is blocked");
        }
      }
    });
  }
};
const pageVisit = async (baseurl: string) => {
  const {
    host,
    pathname,
    hostname,
    href,
    search,
    ancestorOrigins,
    origin,
    protocol,
    port,
    hash,
  } = window.location;
  try {
    await fetch(baseurl + "/api/analytics/page-visit/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        host,
        pathname,
        hostname,
        href,
        search,
        ancestorOrigins,
        origin,
        protocol,
        port,
        hash,
      }),
    });
  } catch (error) {
    if (error) {
      throw new Error("Javascript is blocked");
    }
  }
};

const cookiePopUpBar = () => {
  const consent = localStorage.getItem("nocookies");
  if (!consent) {
    const barHTML = `
  <div style="background: #00cdff;
  background: #00cdff;
  color: #5a5a5a;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;"><p>Tento web používá jen technické/funkční cookies, aby web mohl správně fungovat. Nepoužíváme žádné cookies třetích stran, jako jsou cookies služeb Google Analytics, Facebook atp.</p> <span style="background: #229dc5;
  color: white;
  padding: 20px;
  cursor: pointer; margin: 0px 10px;" id="confirm-rg-button-local">Rozumím!</span></div>
  `;
    const bodyTag = document.getElementsByTagName("body")[0];
    const div = document.createElement("div");
    div.innerHTML = barHTML;
    bodyTag.appendChild(div);
    const btn = document.getElementById("confirm-rg-button-local");
    btn.addEventListener("click", () => {
      localStorage.setItem("nocookies", "yes");
      div.remove();
    });
  }
};

const cookieCleaner = () => {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};
