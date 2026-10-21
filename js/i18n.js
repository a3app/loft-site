const I = {
  en: {
    navOverlay: "Overlay", navApp: "App", navPanel: "Panel", navDl: "Download", navSpec: "Spec", navSrc: "Source",
    heroH: "A private overlay inside ordinary HTTPS",
    heroTag: "Loft Overlay For TLS",
    heroLead: "SSH, a browser, and curl speak to a local SOCKS5 or TUN. Streams ride one mux, sealed with ChaCha20-Poly1305. On the public path the session is TLS 1.3, so a CDN or reverse proxy may sit in front of the node. Short disconnects and packet loss leave inner TCP standing.",
    ctaDl: "Download", ctaSrc: "Source",
    prodH: "What you run",
    prodCap: "One protocol, loft/1.0. The operator holds the node, the panel, and the member keys.",
    pAppK: "macOS", pAppH: "App", pApp: "Menu-bar client. Named connections, loft:// import, local SOCKS5 and TUN.", pAppA: "Download the DMG",
    pPanelK: "loft-panel", pPanelH: "Panel", pPanel: "Web admin for one server: networks, members, domains, mail, packages. Install without editing files by hand.", pPanelA: "Panel overview",
    pNodeK: "loft-node", pNodeH: "Node", pNode: "Self-hosted edge. Debian package or tarball. Fronts: GET, WebSocket, HTTP/2, QUIC, HTTP/3.", pNodeA: "Install the node",
    pSpecK: "loft/1.0", pSpecH: "Spec", pSpec: "Open protocol. A third party may implement a client or a node from the wire document.", pSpecA: "Read the protocol",
    howH: "How it works",
    howCap: "The public path is ordinary HTTPS. The overlay is the session inside it.",
    s1: "Applications talk to a local SOCKS5 or TUN. The client keeps that listener while the front rotates.",
    s2: "Streams share one mux and are sealed with ChaCha20-Poly1305.",
    s3: "Outside, the session is TLS 1.3. A CDN or reverse proxy may terminate it.",
    s4: "A short gap parks the mux for gap_hold_ms. Resume uses a fresh 0x02 and the same instance_id.",
    appH: "App",
    appCap: "The macOS client lives in the menu bar. Open the overlay, keep several named connections, import a loft:// link or a .loft file.",
    shotStatus: "Status", shotConns: "Connections",
    panelH: "Panel",
    panelCap: "One loft server: the node, networks and members, addresses and upstream channels, domains, certificates, mail, packages, and panel users.",
    dlH: "Download",
    dlCap: "Binaries from the latest GitHub Release. Dist publishes these names on every v* tag.",
    thKind: "Kind", thArm: "Apple Silicon / arm64", thAmd: "Intel / amd64",
    kApp: "macOS app", kMacCLI: "macOS CLI", kLinCLI: "Linux CLI", kNode: "Node", kPanel: "Panel",
    dlNote: "The macOS DMG is ad-hoc signed. CLI archives contain loft, loft-front, loft-probe, and loft-bench. Checksums sit next to the files.",
    sums: "Checksums",
    faqH: "Questions",
    q1: "What is loft?",
    a1: "An HTTPS overlay for operators. A laboratory LAN reached from outside, a server fleet, or a site-to-site path. Protocol loft/1.0. Share links as loft://.",
    q2: "Who holds the keys?",
    a2: "The operator. Member keys live on the controller. The public path is ordinary HTTPS; identity is inside the session.",
    q3: "What do applications speak?",
    a3: "Local SOCKS5 or TUN. SSH, a browser, and curl stay on the machine. The overlay carries those streams.",
    q4: "Where does it run?",
    a4: "macOS app and CLI, Linux CLI, Debian node and panel. RouterOS is a container. Keenetic, iOS, and Android are in the catalog.",
    q5: "Is the protocol open?",
    a5: "Yes. Apache License 2.0. A third party may implement loft from the spec. Software version is independent of protocol loft/1.0.",
    fProd: "Product", fDoc: "Docs", fOrg: "a3app",
    fPrivacy: "Privacy", fLicense: "Apache-2.0", fSrc: "Source",
    footLegal: "loft.cx · protocol loft/1.0",
    privH: "Privacy",
    priv1: "loft.cx is a static site. The language choice is stored in this browser. There is no account and no telemetry on the site.",
    priv2: "loft-node and loft-panel run on machines the operator controls. Member keys, leases, and overlay addresses stay with that operator.",
    priv3: "Downloads are GitHub Releases of a3app/loft. GitHub’s privacy policy applies to that traffic.",
    notFound: "This path is empty. The overlay is at the root.",
    home: "Home"
  },
  ru: {
    navOverlay: "Оверлей", navApp: "Приложение", navPanel: "Панель", navDl: "Скачать", navSpec: "Спека", navSrc: "Исходники",
    heroH: "Закрытый оверлей внутри обычного HTTPS",
    heroTag: "Loft Overlay For TLS",
    heroLead: "SSH, браузер и curl ходят в локальный SOCKS5 или TUN. Потоки едут в одном mux, закрыты ChaCha20-Poly1305. Снаружи сессия — TLS 1.3, поэтому перед нодой может стоять CDN или обратный прокси. Короткие обрывы и потери внутренний TCP не рвут.",
    ctaDl: "Скачать", ctaSrc: "Исходники",
    prodH: "Что ставят",
    prodCap: "Один протокол, loft/1.0. Нода, панель и ключи участников — у оператора.",
    pAppK: "macOS", pAppH: "Приложение", pApp: "Клиент в строке меню. Именованные подключения, импорт loft://, локальные SOCKS5 и TUN.", pAppA: "Скачать DMG",
    pPanelK: "loft-panel", pPanelH: "Панель", pPanel: "Веб-админка одного сервера: сети, участники, домены, почта, пакеты. Ставится без правки файлов руками.", pPanelA: "Обзор панели",
    pNodeK: "loft-node", pNodeH: "Нода", pNode: "Свой край. Пакет Debian или tar.gz. Фронты: GET, WebSocket, HTTP/2, QUIC, HTTP/3.", pNodeA: "Поставить ноду",
    pSpecK: "loft/1.0", pSpecH: "Спека", pSpec: "Открытый протокол. Клиент или ноду можно написать по документу обмена.", pSpecA: "Читать протокол",
    howH: "Как это устроено",
    howCap: "Снаружи обычный HTTPS. Оверлей — сессия внутри него.",
    s1: "Приложения говорят с локальным SOCKS5 или TUN. Клиент держит этот слушатель, пока фронт меняется.",
    s2: "Потоки делят один mux и закрыты ChaCha20-Poly1305.",
    s3: "Снаружи сессия — TLS 1.3. CDN или обратный прокси могут её терминировать.",
    s4: "Короткий разрыв паркует mux на gap_hold_ms. Продолжение — свежий 0x02 и тот же instance_id.",
    appH: "Приложение",
    appCap: "Клиент для macOS живёт в строке меню. Оттуда открывают оверлей, держат несколько подключений, импортируют ссылку loft:// или файл .loft.",
    shotStatus: "Статус", shotConns: "Подключения",
    panelH: "Панель",
    panelCap: "Один сервер loft: нода, сети и участники, адреса и исходящие каналы, домены, сертификаты, почта, пакеты и пользователи панели.",
    dlH: "Скачать",
    dlCap: "Сборки из последнего GitHub Release. Dist на каждый тег v* заливает файлы с этими именами.",
    thKind: "Что", thArm: "Apple Silicon / arm64", thAmd: "Intel / amd64",
    kApp: "macOS, приложение", kMacCLI: "macOS, CLI", kLinCLI: "Linux, CLI", kNode: "Нода", kPanel: "Панель",
    dlNote: "DMG подписан ad-hoc. В архивах CLI: loft, loft-front, loft-probe, loft-bench. Контрольные суммы рядом с файлами.",
    sums: "Контрольные суммы",
    faqH: "Вопросы",
    q1: "Что такое loft?",
    a1: "HTTPS-оверлей для операторов. Лаборатория снаружи, парк серверов, связь двух площадок. Протокол loft/1.0. Ссылка loft://.",
    q2: "У кого ключи?",
    a2: "У оператора. Ключи участников живут на контроллере. Снаружи обычный HTTPS; личность — внутри сессии.",
    q3: "На чём ходят приложения?",
    a3: "Локальный SOCKS5 или TUN. SSH, браузер и curl остаются на машине. Оверлей несёт эти потоки.",
    q4: "Где это бежит?",
    a4: "Приложение и CLI на macOS, CLI на Linux, нода и панель Debian. RouterOS — контейнер. Keenetic, iOS и Android — в каталоге.",
    q5: "Протокол открытый?",
    a5: "Да. Лицензия Apache 2.0. Свою реализацию пишут по спеке. Версия ПО не зависит от протокола loft/1.0.",
    fProd: "Продукт", fDoc: "Документы", fOrg: "a3app",
    fPrivacy: "Конфиденциальность", fLicense: "Apache-2.0", fSrc: "Исходники",
    footLegal: "loft.cx · протокол loft/1.0",
    privH: "Конфиденциальность",
    priv1: "loft.cx — статическая страница. Выбор языка хранится в этом браузере. На сайте нет учёток и телеметрии.",
    priv2: "loft-node и loft-panel крутятся на машинах оператора. Ключи участников, аренды и адреса оверлея остаются у него.",
    priv3: "Сборки — GitHub Releases репозитория a3app/loft. К этому трафику применяется политика GitHub.",
    notFound: "Этого пути нет. Оверлей — в корне.",
    home: "Домой"
  },
  zh: {
    navOverlay: "覆盖网", navApp: "应用", navPanel: "面板", navDl: "下载", navSpec: "规范", navSrc: "源码",
    heroH: "跑在普通 HTTPS 里的私有覆盖网",
    heroTag: "Loft Overlay For TLS",
    heroLead: "SSH、浏览器和 curl 走本机 SOCKS5 或 TUN。流复用在一条 mux 上，用 ChaCha20-Poly1305 封住。外面是 TLS 1.3，节点前面可以接 CDN 或反向代理。短暂掉线和丢包不会把里面的 TCP 拆掉。",
    ctaDl: "下载", ctaSrc: "源码",
    prodH: "你跑什么",
    prodCap: "一个协议，loft/1.0。节点、面板和成员密钥在运营方手里。",
    pAppK: "macOS", pAppH: "应用", pApp: "菜单栏客户端。命名连接、导入 loft://、本机 SOCKS5 和 TUN。", pAppA: "下载 DMG",
    pPanelK: "loft-panel", pPanelH: "面板", pPanel: "一台服务器的网管：网段、成员、域名、邮件、软件包。不用手改文件就能装好。", pPanelA: "面板总览",
    pNodeK: "loft-node", pNodeH: "节点", pNode: "自己的边缘。Debian 包或 tar.gz。前置：GET、WebSocket、HTTP/2、QUIC、HTTP/3。", pNodeA: "安装节点",
    pSpecK: "loft/1.0", pSpecH: "规范", pSpec: "开放协议。第三方可以按交换文档实现客户端或节点。", pSpecA: "读协议",
    howH: "怎么跑起来的",
    howCap: "外面是普通 HTTPS。覆盖网是里面的会话。",
    s1: "应用跟本机 SOCKS5 或 TUN 说话。客户端在前置轮换时按住这个监听。",
    s2: "流共用一条 mux，用 ChaCha20-Poly1305 封住。",
    s3: "外面是 TLS 1.3。CDN 或反向代理可以终结它。",
    s4: "短暂缺口把 mux 停在 gap_hold_ms。续上用新的 0x02 和同一个 instance_id。",
    appH: "应用",
    appCap: "macOS 客户端住在菜单栏。从那里打开覆盖网，保留几条命名连接，导入 loft:// 或 .loft 文件。",
    shotStatus: "状态", shotConns: "连接",
    panelH: "面板",
    panelCap: "一台 loft 服务器：节点、网段和成员、地址和上行通道、域名、证书、邮件、软件包、面板用户。",
    dlH: "下载",
    dlCap: "来自最新 GitHub Release 的二进制。每个 v* 标签 Dist 都用这些文件名。",
    thKind: "种类", thArm: "Apple Silicon / arm64", thAmd: "Intel / amd64",
    kApp: "macOS 应用", kMacCLI: "macOS CLI", kLinCLI: "Linux CLI", kNode: "节点", kPanel: "面板",
    dlNote: "macOS DMG 是 ad-hoc 签名。CLI 包里有 loft、loft-front、loft-probe、loft-bench。校验和在文件旁边。",
    sums: "校验和",
    faqH: "问题",
    q1: "loft 是什么？",
    a1: "给运营方的 HTTPS 覆盖网。从外面进实验室网、管一群服务器、或两条站点之间。协议 loft/1.0。分享用 loft://。",
    q2: "密钥在谁手里？",
    a2: "运营方。成员密钥在控制器上。外面是普通 HTTPS；身份在会话里面。",
    q3: "应用说什么？",
    a3: "本机 SOCKS5 或 TUN。SSH、浏览器和 curl 留在这台机器上。覆盖网带走这些流。",
    q4: "跑在哪？",
    a4: "macOS 应用和 CLI、Linux CLI、Debian 节点和面板。RouterOS 是容器。Keenetic、iOS、Android 在目录里。",
    q5: "协议开放吗？",
    a5: "开放。Apache License 2.0。第三方按规范实现 loft。软件版本和协议 loft/1.0 分开。",
    fProd: "产品", fDoc: "文档", fOrg: "a3app",
    fPrivacy: "隐私", fLicense: "Apache-2.0", fSrc: "源码",
    footLegal: "loft.cx · 协议 loft/1.0",
    privH: "隐私",
    priv1: "loft.cx 是静态站。语言选择存在这只浏览器里。站点没有账号，也没有遥测。",
    priv2: "loft-node 和 loft-panel 跑在运营方自己的机器上。成员密钥、租约和覆盖网地址留在运营方。",
    priv3: "下载是 a3app/loft 的 GitHub Release。那段流量走 GitHub 的隐私政策。",
    notFound: "这条路径是空的。覆盖网在根上。",
    home: "首页"
  }
};

function bootLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && I[q]) return q;
  try {
    const saved = localStorage.getItem("loft-lang");
    if (saved && I[saved]) return saved;
  } catch (e) {}
  const n = (navigator.language || "en").toLowerCase();
  if (n.startsWith("ru")) return "ru";
  if (n.startsWith("zh")) return "zh";
  return "en";
}

function setLang(lang) {
  if (!I[lang]) lang = "en";
  document.documentElement.lang = lang;
  try { localStorage.setItem("loft-lang", lang); } catch (e) {}
  const t = I[lang];
  document.querySelectorAll("[data-i]").forEach((el) => {
    const k = el.getAttribute("data-i");
    if (t[k]) el.textContent = t[k];
  });
  ["en", "ru", "zh"].forEach((l) => {
    const b = document.getElementById("lang-" + l);
    if (b) b.classList.toggle("on", l === lang);
  });
  document.querySelectorAll("[data-shot]").forEach((img) => {
    const kind = img.getAttribute("data-shot");
    img.src = img.getAttribute("data-base") + lang + "-" + kind + ".png";
  });
  const title = document.querySelector("title");
  if (title && document.body.dataset.page === "home") {
    title.textContent = "loft — Loft Overlay For TLS";
  }
}

document.addEventListener("DOMContentLoaded", () => setLang(bootLang()));
