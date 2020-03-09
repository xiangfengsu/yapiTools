const puppeteer = require("puppeteer");
const { width, height } = require("screenz");
const { parse, stringify, assign } = require("comment-json");
const Parser = require("sql-ddl-to-json-schema");
const humps = require("humps");

function toFormaterJson(coulmn, action) {
  const base = {
    code: 200,
    message: "",
    body: null
  };

  const newObj = [];
  coulmn.forEach(col => {
    const {
      name,
      options: { comment }
    } = col;
    newObj.push(`"${name}":"",// ${comment} \n`);

  });

  const parsed = parse(`{
          ${newObj.join(" ")}
        }`);
  if (action === 1) {
    assign(base, {
      body: {
        "list|10": [parsed],
        pagination: {
          total: 5,
          current: "${body.pagination.current}",
          pageSize: "${body.pagination.pageSize}"
        },
        extra: {}
      }
    });
  } else if (action === 2) {
    assign(base, {
      body: parsed
    });
  }

  const value = stringify(base, null, 4);
  return value;
}

function sqlDdlToJson(ddl) {
  const parser = new Parser("mysql");
  parser.feed(ddl);
  let result;
  result = parser.results;
  result = parser.toCompactJson(result);
  return result.map((tab, index) => {
    const { columns } = tab;
    return {
      ...tab,
      columns: columns.map((row, cindex) => {
        return {
          ...row,
          key: `${index + 1}_${cindex + 1}`,
          name: humps.camelize(row.name)
        };
      })
    };
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width,
    height
  });
  await page.goto("http://localhost:8000/#/");

  await page.exposeFunction("onFileUpload", text => {
    return sqlDdlToJson(text);
  });

  await page.exposeFunction("onFormaterToJson", (data, action) => {
    return toFormaterJson(data, action);
  });
})();
