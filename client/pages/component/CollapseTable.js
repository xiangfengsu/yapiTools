import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Input, Collapse, Table, Empty } from "antd";
import Highlighter from "react-highlight-words";

// import JsonData from "../data";

const { Panel } = Collapse;

export default ({ emit$, activeTableEmit$,  JsonData = [] }) => {
  const [searchText, setSearchText] = useState("");
  const [activeKeys, setActiveKeys] = useState([]);
  const [selectedTableRowKeys, setSelectedTableRowKeys] = useState([]);

  activeTableEmit$.useSubscription((row = {}) => {
    setSelectedTableRowKeys(
      selectedTableRowKeys.filter(key => key !== row.key)
    );
  });

  useEffect(() => {
    const selectedRows = [];
    selectedTableRowKeys.forEach(key => {
      JsonData.forEach(({ columns }) => {
        const row = columns.find(field => field.key === key);
        if (row) {
          selectedRows.push(row);
        }
      });
    });
    emit$.emit(selectedRows);
  }, [selectedTableRowKeys]);

  const searchTextInTables = useCallback(
    text => {
      const activeNames = [];
      JsonData.forEach(table => {
        const { columns, name } = table;
        columns.forEach(col => {
          const {
            name: fieldName = "",
            options: { comment }
          } = col;
          if (fieldName.includes(text) || comment.includes(text)) {
            activeNames.push(name);
          }
        });
      });
      return [...new Set(activeNames)];
    },
    [JsonData]
  );

  const renderSearchForm = () => {
    function onSearch(value) {
      const rowKeys = searchTextInTables(value);
      setActiveKeys(rowKeys);
      setActiveKeys(preExpandedRowKeys => [...preExpandedRowKeys, ...rowKeys]);
      setSearchText(value.trim());
    }

    return (
      <div style={{ marginBottom: 12, marginTop: 12 }}>
        <Input.Search
          enterButton="搜索"
          onSearch={onSearch}
          style={{ width: 350 }}
          placeholder="请输入字段名或备注"
        />
      </div>
    );
  };

  const renderTableList = () => {
    const columns = [
      {
        title: "字段名",
        dataIndex: "name",
        key: "name",
        render: text => (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        )
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
        key: "comment",
        render: text => (
          <Highlighter
            highlightStyle={{
              color: "#f5222d",
              backgroundColor: "#fff",
              padding: 0
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        )
      }
    ];

    return JsonData.map(tab => {
      const { name, columns: dataSource, options = {} } = tab;
      const { comment } = options;
      const rowSelection = {
        selectedRowKeys: selectedTableRowKeys,
        onChange(selectedRowKeys, selectedRows) {
          setSelectedTableRowKeys(selectedRowKeys);
        }
      };
      const onRow = record => {
        return {
          onClick() {
            if (selectedTableRowKeys.find(key => key === record.key)) {
              setSelectedTableRowKeys(
                selectedTableRowKeys.filter(key => key !== record.key)
              );
            } else {
              setSelectedTableRowKeys(preKeys => [...preKeys, record.key]);
            }
          }
        };
      };
      return (
        <Panel key={name} header={`${name}--${comment}`}>
          <Table
            dataSource={dataSource}
            columns={columns}
            rowKey="key"
            bordered
            size="small"
            rowSelection={rowSelection}
            onRow={onRow}
            pagination={false}
          />
        </Panel>
      );
    });
  };

  function onCollapseChange(activeKey) {
    setActiveKeys(activeKey);
  }

  if (JsonData.length === 0)
    return (
      <div style={{ marginTop: 24 }}>
        <Empty description="暂无sql表数据" />
      </div>
    );
  return (
    <div>
      {renderSearchForm()}
      <Collapse activeKey={activeKeys} onChange={onCollapseChange}>
        {renderTableList()}
      </Collapse>
    </div>
  );
};
