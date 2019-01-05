const CONFIG = require("./config");

const express = require("express");
const proxy = require("express-http-proxy");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      "/api",
      proxy(CONFIG.HOST, {
        proxyReqPathResolver: function(req) {
          return CONFIG.EXTENDED_PATH + require("url").parse(req.url).path;
        }
      })
    );

    server.get("/news/:slug", (req, res) => {
      console.log("test news 1");
      const actualPage = "/news";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/category/:categoryId", (req, res) => {
      const actualPage = "/category";
      const queryParams = { categoryId: req.params.categoryId };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/timeline/:timelineId", (req, res) => {
      const actualPage = "/timeline";
      const queryParams = { timelineId: req.params.timelineId };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/tag/:tagId", (req, res) => {
      const actualPage = "/tag";
      const queryParams = { tagId: req.params.tagId };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/product/:id", (req, res) => {
      const actualPage = "/product";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/timeline/:timeline_id", (req, res) => {
      const actualPage = "/list";
      const queryParams = { timeline_id: req.params.timeline_id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
