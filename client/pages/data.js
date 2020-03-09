export default  [
  {
    name: "t_phone_collection",
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
        key: "1_1"
      },
      {
        name: "capitalId",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: false,
          comment:
            "资方id 1蔷薇自有资金，2富民银行，3东乔租赁，4中管，5至正融资租赁，6厦门国贸"
        },
        key: "1_2"
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
        key: "1_3"
      },
      {
        name: "term",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: false,
          comment: "当前期数"
        },
        key: "1_4"
      },
      {
        name: "mortgageCycle",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "总期数"
        },
        key: "1_5"
      },
      {
        name: "lesseeRepay",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          comment: "月供"
        },
        key: "1_6"
      },
      {
        name: "repaymentTime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "计划还款日"
        },
        key: "1_7"
      },
      {
        name: "customerName",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "承租人姓名"
        },
        key: "1_8"
      },
      {
        name: "customerMobile",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "承租人电话"
        },
        key: "1_9"
      },
      {
        name: "emergencyContactName1",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人姓名1"
        },
        key: "1_10"
      },
      {
        name: "emergencyContactMobile1",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人电话1"
        },
        key: "1_11"
      },
      {
        name: "emergencyContactName2",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人姓名2"
        },
        key: "1_12"
      },
      {
        name: "emergencyContactMobile2",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人电话2"
        },
        key: "1_13"
      },
      {
        name: "emergencyContactName3",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人姓名3"
        },
        key: "1_14"
      },
      {
        name: "emergencyContactMobile3",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人电话3"
        },
        key: "1_15"
      },
      {
        name: "customerAddress",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "承租人联系地址"
        },
        key: "1_16"
      },
      {
        name: "customerCompanyAddress",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "承租人公司地址"
        },
        key: "1_17"
      },
      {
        name: "mortgageAmount",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          comment: "放款总额"
        },
        key: "1_18"
      },
      {
        name: "repayStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "各资方还款状态"
        },
        key: "1_19"
      },
      {
        name: "repayMode",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "各资方还款方式"
        },
        key: "1_20"
      },
      {
        name: "tradetime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "交易日期"
        },
        key: "1_21"
      },
      {
        name: "repaymentOper",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "还款操作人"
        },
        key: "1_22"
      },
      {
        name: "completeTime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "最终完成时间"
        },
        key: "1_23"
      },
      {
        name: "repayRemark",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "还款备注"
        },
        key: "1_24"
      },
      {
        name: "productName",
        type: {
          datatype: "varchar",
          length: 50
        },
        options: {
          nullable: true,
          comment: "产品名字"
        },
        key: "1_25"
      },
      {
        name: "spOpenName",
        type: {
          datatype: "varchar",
          length: 100
        },
        options: {
          nullable: true,
          comment: "代理商名称"
        },
        key: "1_26"
      },
      {
        name: "channelName",
        type: {
          datatype: "varchar",
          length: 50
        },
        options: {
          nullable: true,
          comment: "门店名称"
        },
        key: "1_27"
      },
      {
        name: "city",
        type: {
          datatype: "varchar",
          length: 50
        },
        options: {
          nullable: true,
          comment: "城市"
        },
        key: "1_28"
      },
      {
        name: "modelName",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "车型"
        },
        key: "1_29"
      },
      {
        name: "phoneCollectionContent",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "催收内容记录"
        },
        key: "1_30"
      },
      {
        name: "phoneCollectionPicUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "催收图片，多个用,分割"
        },
        key: "1_31"
      },
      {
        name: "phoneCollectionVoiceUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "催收录音，多个用,分割"
        },
        key: "1_32"
      },
      {
        name: "phoneRepayPicUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "还款图片，多个用,分割"
        },
        key: "1_33"
      },
      {
        name: "phoneRepayRemark",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "还款备注"
        },
        key: "1_34"
      },
      {
        name: "phoneRepaymentTime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "电催还款日期"
        },
        key: "1_35"
      },
      {
        name: "hisOverdueDay",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "历史逾期天数"
        },
        key: "1_36"
      },
      {
        name: "overdueStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "逾期状态 1-M1,2-M2,3-M3,4-M3+"
        },
        key: "1_37"
      },
      {
        name: "totalCollectionAmount",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          comment: "总催收金额"
        },
        key: "1_38"
      },
      {
        name: "currentStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "当前状态  1逾期中，2已还款"
        },
        key: "1_39"
      },
      {
        name: "followStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment:
            "跟进状态 1未跟进，2可联可还，3可联不还，4失联，5催收成功，6代理商协催，7其他"
        },
        key: "1_40"
      },
      {
        name: "protectStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "保全状态"
        },
        key: "1_41"
      },
      {
        name: "legalStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "法诉状态 1无，2仲裁，3失信人，3已提交，4未提交"
        },
        key: "1_42"
      },
      {
        name: "distributeDate",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "分配日"
        },
        key: "1_43"
      },
      {
        name: "distributeDayNum",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "已分配天数"
        },
        key: "1_44"
      },
      {
        name: "phoneOper",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "电催专员"
        },
        key: "1_45"
      },
      {
        name: "phoneRecordNum",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "电催纪录数"
        },
        key: "1_46"
      },
      {
        name: "nextFollowDate",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "下次跟踪日期"
        },
        key: "1_47"
      },
      {
        name: "wechatStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "微信状态"
        },
        key: "1_48"
      },
      {
        name: "wechatPicUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "微信图片"
        },
        key: "1_49"
      },
      {
        name: "phoneRepayMode",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "电催还款方式  1线上、2线下、3部分-部分金额、4提前-全额金额"
        },
        key: "1_50"
      },
      {
        name: "finalPenaltyInterest",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "最终罚息金额（应缴）每次操作后更新为当天最新"
        },
        key: "1_51"
      },
      {
        name: "totalPenaltyInterest",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "罚息金额（客户实缴）"
        },
        key: "1_52"
      },
      {
        name: "totalLittleRepayment",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "当期合计部分还款金额"
        },
        key: "1_53"
      },
      {
        name: "isInStore",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "是否入库   1已入库  2未入库"
        },
        key: "1_54"
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
        key: "1_55"
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
        key: "1_56"
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
        key: "1_57"
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
        key: "1_58"
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
          },
          {
            column: "term"
          }
        ],
        indexType: "btree"
      }
    ],
    indexes: [
      {
        columns: [
          {
            column: "capital_id"
          }
        ],
        indexType: "btree",
        name: "index_capital_id"
      },
      {
        columns: [
          {
            column: "order_id"
          }
        ],
        indexType: "btree",
        name: "index_order_id"
      },
      {
        columns: [
          {
            column: "term"
          }
        ],
        indexType: "btree",
        name: "index_term"
      }
    ],
    options: {
      charset: "utf8",
      comment: "电话催收表",
      engine: "InnoDB"
    }
  },
  {
    name: "t_phone_collection_detail",
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
        key: "2_1"
      },
      {
        name: "capitalId",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: false,
          comment:
            "资方id 1蔷薇自有资金，2富民银行，3东乔租赁，4中管，5至正融资租赁，6厦门国贸"
        },
        key: "2_2"
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
        key: "2_3"
      },
      {
        name: "term",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: false,
          comment: "当前期数"
        },
        key: "2_4"
      },
      {
        name: "mortgageCycle",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "总期数"
        },
        key: "2_5"
      },
      {
        name: "lesseeRepay",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          comment: "月供"
        },
        key: "2_6"
      },
      {
        name: "repaymentTime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "计划还款日"
        },
        key: "2_7"
      },
      {
        name: "customerName",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "承租人姓名"
        },
        key: "2_8"
      },
      {
        name: "customerMobile",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "承租人电话"
        },
        key: "2_9"
      },
      {
        name: "emergencyContactName1",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人姓名1"
        },
        key: "2_10"
      },
      {
        name: "emergencyContactMobile1",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人电话1"
        },
        key: "2_11"
      },
      {
        name: "emergencyContactName2",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人姓名2"
        },
        key: "2_12"
      },
      {
        name: "emergencyContactMobile2",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人电话2"
        },
        key: "2_13"
      },
      {
        name: "emergencyContactName3",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人姓名3"
        },
        key: "2_14"
      },
      {
        name: "emergencyContactMobile3",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "紧急联系人电话3"
        },
        key: "2_15"
      },
      {
        name: "customerAddress",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "承租人联系地址"
        },
        key: "2_16"
      },
      {
        name: "customerCompanyAddress",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "承租人公司地址"
        },
        key: "2_17"
      },
      {
        name: "mortgageAmount",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          comment: "放款总额"
        },
        key: "2_18"
      },
      {
        name: "repayStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "各资方还款状态"
        },
        key: "2_19"
      },
      {
        name: "repayMode",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "各资方还款方式"
        },
        key: "2_20"
      },
      {
        name: "tradetime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "交易日期"
        },
        key: "2_21"
      },
      {
        name: "repaymentOper",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "还款操作人"
        },
        key: "2_22"
      },
      {
        name: "completeTime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "最终完成时间"
        },
        key: "2_23"
      },
      {
        name: "repayRemark",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "资方还款备注"
        },
        key: "2_24"
      },
      {
        name: "productName",
        type: {
          datatype: "varchar",
          length: 50
        },
        options: {
          nullable: true,
          comment: "产品名字"
        },
        key: "2_25"
      },
      {
        name: "spOpenName",
        type: {
          datatype: "varchar",
          length: 100
        },
        options: {
          nullable: true,
          comment: "代理商名称"
        },
        key: "2_26"
      },
      {
        name: "channelName",
        type: {
          datatype: "varchar",
          length: 50
        },
        options: {
          nullable: true,
          comment: "门店名称"
        },
        key: "2_27"
      },
      {
        name: "city",
        type: {
          datatype: "varchar",
          length: 50
        },
        options: {
          nullable: true,
          comment: "城市"
        },
        key: "2_28"
      },
      {
        name: "modelName",
        type: {
          datatype: "varchar",
          length: 200
        },
        options: {
          nullable: true,
          comment: "车型"
        },
        key: "2_29"
      },
      {
        name: "phoneCollectionContent",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "催收内容记录"
        },
        key: "2_30"
      },
      {
        name: "phoneCollectionPicUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "催收图片，多个用,分割"
        },
        key: "2_31"
      },
      {
        name: "phoneCollectionVoiceUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "催收录音，多个用,分割"
        },
        key: "2_32"
      },
      {
        name: "phoneRepayPicUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "还款图片，多个用,分割"
        },
        key: "2_33"
      },
      {
        name: "phoneRepayRemark",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "还款备注"
        },
        key: "2_34"
      },
      {
        name: "phoneRepaymentTime",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "电催还款日期"
        },
        key: "2_35"
      },
      {
        name: "hisOverdueDay",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "历史逾期天数"
        },
        key: "2_36"
      },
      {
        name: "overdueStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "逾期状态 1-M1,2-M2,3-M3,4-M3+"
        },
        key: "2_37"
      },
      {
        name: "collectionAmount",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "当期催收金额"
        },
        key: "2_38"
      },
      {
        name: "currentStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "当前状态 1逾期中，2已还款"
        },
        key: "2_39"
      },
      {
        name: "followStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment:
            "跟进状态 1未跟进，2可联可还，3可联不还，4失联，5催收成功，6代理商协催，7其他"
        },
        key: "2_40"
      },
      {
        name: "protectStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "保全状态"
        },
        key: "2_41"
      },
      {
        name: "legalStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "法诉状态 1无，2仲裁，3失信人，3已提交，4未提交"
        },
        key: "2_42"
      },
      {
        name: "distributeDate",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "分配日"
        },
        key: "2_43"
      },
      {
        name: "phoneOper",
        type: {
          datatype: "varchar",
          length: 20
        },
        options: {
          nullable: true,
          comment: "电催专员"
        },
        key: "2_44"
      },
      {
        name: "nextFollowDate",
        type: {
          datatype: "datetime",
          fractional: 0
        },
        options: {
          nullable: true,
          comment: "下次跟踪日期"
        },
        key: "2_45"
      },
      {
        name: "wechatStatus",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "微信状态 1已添加，2未添加"
        },
        key: "2_46"
      },
      {
        name: "wechatPictureUrl",
        type: {
          datatype: "varchar",
          length: 1000
        },
        options: {
          nullable: true,
          comment: "微信图片"
        },
        key: "2_47"
      },
      {
        name: "phoneRepayMode",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "电催还款方式  1线上、2线下、3部分-部分金额、4提前-全额金额"
        },
        key: "2_48"
      },
      {
        name: "finalPenaltyInterest",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "最终罚息金额（应缴）"
        },
        key: "2_49"
      },
      {
        name: "penaltyInterest",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "罚息金额（客户实缴）"
        },
        key: "2_50"
      },
      {
        name: "littleRepayment",
        type: {
          datatype: "decimal",
          digits: 17,
          decimals: 2
        },
        options: {
          nullable: true,
          default: "0.00",
          comment: "部分还款金额"
        },
        key: "2_51"
      },
      {
        name: "isInStore",
        type: {
          datatype: "int",
          width: 11
        },
        options: {
          nullable: true,
          comment: "是否入库   1已入库  2未入库"
        },
        key: "2_52"
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
        key: "2_53"
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
        key: "2_54"
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
        key: "2_55"
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
        key: "2_56"
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
    indexes: [
      {
        columns: [
          {
            column: "capital_id"
          }
        ],
        indexType: "btree",
        name: "index_capital_id"
      },
      {
        columns: [
          {
            column: "order_id"
          }
        ],
        indexType: "btree",
        name: "index_order_id"
      },
      {
        columns: [
          {
            column: "term"
          }
        ],
        indexType: "btree",
        name: "index_term"
      }
    ],
    options: {
      charset: "utf8",
      comment: "电话催收明细表",
      engine: "InnoDB"
    }
  },
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
