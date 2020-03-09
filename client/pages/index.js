import React, { useRef, useState } from "react";
import { Button, Row, Col, Card, Icon, Collapse, Alert } from "antd";
import { useEventEmitter } from "@umijs/hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import CollapseTable from "./component/CollapseTable";
import ActiveTable from "./component/ActiveTable";

import "./index.css";

const testData = [
  {
    name: "t_phone_weixin_pic",
    columns: [
      {
        name: "id",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: false,
          autoincrement: true,
          comment: "主键ID"
        },
        key: "3_1"
      },
      {
        name: "orderId",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: false,
          comment: "订单号"
        },
        key: "3_2"
      },
      {
        name: "wechatLinkUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "微信联系人图片"
        },
        key: "3_3"
      },
      {
        name: "isDeleted",
        type: {
          datatype: "int",
          width: 3
        },
        options: {
          unsigned: true,
          nullable: true,
          default: "0",
          comment: "是否删除"
        },
        key: "3_4"
      },
      {
        name: "createtime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "创建时间"
        },
        key: "3_5"
      },
      {
        name: "updateoper",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "修改人"
        },
        key: "3_6"
      },
      {
        name: "updatetime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "更新时间"
        },
        key: "3_7"
      }
    ],
    primaryKey: {
      columns: [
        {
          column: "id"
        }
      ],
      indexType: "btree"
    },
    uniqueKeys: [
      {
        columns: [
          {
            column: "order_id"
          }
        ],
        indexType: "btree"
      }
    ],
    options: {
      charset: "utf8",
      comment: "微信联系人图片表",
      engine: "InnoDB"
    }
  }
];

export default function() {
  const inputFileRef = useRef();
  const [uid, setUid] = useState(Date.now);
  const [sqlDdlText, setSqlDdlText] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [showAlert, setShowAlert] = useState({ err: "", show: false });
  const emit$ = useEventEmitter();
  const activeTableEmit$ = useEventEmitter();

  function saveFileInput(node) {
    inputFileRef.current = node;
  }

  function restInputFile() {
    setUid(Date.now + 1);
  }

  function onFileChange(e) {
    setSqlDdlText("");
    let ddlText = "";
    let count = 0;
    const fileList = [...e.target.files];
    fileList.forEach(file => {
      if (file) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e) {
          ddlText += e.target.result;
          count++;
          if (count === fileList.length) {
            // new Promise(resolve => {
            //   resolve(testData);
            // }).then(value => {
            //   setJsonData(value);
            // });
            if (window.onFileUpload) {
              window
                .onFileUpload(ddlText)
                .then(value => {
                  if (value.length === 0) {
                    setShowAlert({ err: "非sql-ddl格式内容", show: true });
                  } else {
                    setShowAlert({ err: "", show: false });
                  }
                  setJsonData(value);
                })
                .catch(err => {
                  setShowAlert({
                    err: "解析sql-ddl出错，请仔细核对文件",
                    show: true
                  });
                });
            }
            setSqlDdlText(ddlText);
            restInputFile();
          }
        };
      }
    });
  }

  return (
    <div className={"box"}>
      <Card bordered title="自动生成器">
        {showAlert.show && (
          <div style={{ marginBottom: 12 }}>
            <Alert
              message="Error"
              description={showAlert.err}
              type="error"
              showIcon
            />
          </div>
        )}

        <Collapse defaultActiveKey={["sql"]}>
          <Collapse.Panel header="sql文件上传" key="sql">
            <Row style={{ marginBottom: 24 }}>
              <Col span={6}>
                <div className={"uploadWrap"}>
                  <Button type="primary">
                    <Icon type="upload" /> 上传sql文件
                    <input
                      ref={saveFileInput}
                      type="file"
                      onClick={e => e.stopPropagation()}
                      name="file"
                      id="file"
                      className={"fileBtn"}
                      accept=".sql"
                      key={uid}
                      onChange={onFileChange}
                      multiple
                    />
                  </Button>
                </div>
              </Col>
              <Col span={18}>
                <div className={"syntaxWrap"}>
                  <SyntaxHighlighter language="sql" style={atomDark}>
                    {sqlDdlText}
                  </SyntaxHighlighter>
                </div>
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>

        <Row>
          <Col span={12}>
            <CollapseTable
              emit$={emit$}
              activeTableEmit$={activeTableEmit$}
              JsonData={jsonData}
            />
          </Col>
          <Col span={11} offset={1}>
            <ActiveTable emit$={emit$} activeTableEmit$={activeTableEmit$} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
