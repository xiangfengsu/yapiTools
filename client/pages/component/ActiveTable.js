import React, { useState, useEffect } from "react";
import { Collapse, Table, Icon, Radio, Empty, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Panel } = Collapse;

const radioList = [
  { key: 1, label: "Yapi Table列表" },
  { key: 2, label: "Yapi 对象" },
  { key: 3, label: "tableColumn数据" }
];

export default ({ emit$, activeTableEmit$ }) => {
  const [dataSource, setDataSource] = useState([]);
  const [radioAction, setRadioAction] = useState(1);
  const [formateText, setFormateText] = useState("");

  emit$.useSubscription((data = []) => {
    setDataSource(data);
  });

  useEffect(() => {
    if ((window.onFormaterToJson && radioAction === 1) || radioAction === 2) {
      window.onFormaterToJson(dataSource, radioAction).then(json => {
        setFormateText(json);
      });
    } else {
      if (radioAction === 3) {
        const tableColumns = dataSource.map(col => {
          const {
            name,
            options: { comment }
          } = col;
          return {
            title: comment,
            dataIndex: name
          };
        });
        setFormateText(JSON.stringify(tableColumns, null, 4));
      }
    }
  }, [dataSource, radioAction]);

  const renderTableList = () => {
    const columns = [
      {
        title: "字段名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "type",
        dataIndex: "type.datatype",
        key: "datatype"
      },
      {
        title: "isNull",
        dataIndex: "options.nullable",
        key: "nullable"
      },
      {
        title: "备注",
        dataIndex: "options.comment",
        key: "comment"
      },
      {
        title: "action",
        dataIndex: "action",
        key: "action",
        render(_, record) {
          return (
            <a
              onClick={() => {
                activeTableEmit$.emit(record);
              }}
            >
              删除
            </a>
          );
        }
      }
    ];

    return (
      <Panel key="activeTable" header="已选中字段列表">
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey="key"
          bordered
          size="small"
          pagination={false}
        />
      </Panel>
    );
  };

  function onRadioChange(e) {
    setRadioAction(e.target.value);
  }

  const genExtra = () => (
    <CopyToClipboard
      text={formateText}
      onCopy={() =>{
        message.success("复制成功")
      }}
    >
      <Icon
        type="copy"
        style={{ color: "#1890ff" }}
        onClick={event => {
          event.stopPropagation();
        }}
      />
    </CopyToClipboard>
  );

  return (
    <div style={{ marginTop: 54 }}>
      <div style={{ margin: "12px 0" }}>
        <Radio.Group value={radioAction} onChange={onRadioChange}>
          {radioList.map(radio => (
            <Radio value={radio.key} key={radio.key}>
              {radio.label}
            </Radio>
          ))}
        </Radio.Group>
        {/* <div style={{ marginTop: 12 }}>
          <Button type="primary" onClick={onSubmit}>
            生成
          </Button>
        </div> */}
      </div>
      <Collapse defaultActiveKey="activeTable">{renderTableList()}</Collapse>
      <div style={{ marginTop: 12 }}>
        <Collapse defaultActiveKey="createData">
          <Panel
            key="createData"
            header={radioList[radioAction - 1].label}
            extra={genExtra()}
          >
            {formateText === "" ? (
              <Empty />
            ) : (
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {formateText}
              </SyntaxHighlighter>
            )}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
