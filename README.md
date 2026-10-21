# loft.cx

Product site for **loft** — Loft Overlay For TLS.

Live: [https://loft.cx](https://loft.cx). Spec and source stay in [a3app/loft](https://github.com/a3app/loft). Protocol **loft/1.0**. URI `loft://`.

This repository is static HTML for GitHub Pages. Default language follows the browser (Russian, Chinese, otherwise English). The picker order is EN · RU · 中文.

## Preview

```
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## Domain

GitHub Pages serves the `main` branch from `/`. File `CNAME` is `loft.cx`.

At the registrar (Namecheap, hosts `dns1.registrar-servers.com`):

| Type | Host | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `a3app.github.io` |

Drop parking and URL-redirect records on `@`. After DNS answers, GitHub issues the TLS certificate. Enforce HTTPS in the Pages settings.

## Copy

Operator overlay inside ordinary HTTPS. Session holds through short disconnects and packet loss. Canonical English; Russian is native sysadmin register. Brand tokens and the L-mark match [docs/brand](https://github.com/a3app/loft/tree/main/docs/brand) in a3app/loft.

## License

Apache License 2.0.
