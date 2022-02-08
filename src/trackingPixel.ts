window.onload = async () => {
  const URL: string = "http://localhost:5001";
  //intial hit
  pageVisit(URL);
  anyLinkClicked(URL);
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
