<template>
  <div>
    <avue-crud
      :data="tableData"
      :option="tableOption"
      @on-load="tableOnLoad"
      :span-method="spanMethod"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      :row-class-name="rowClassName"
    ></avue-crud>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spanArr: [], //合并单元格的数目
      sameRowArr: [], //为每一条数据添加一个index属性用来标识每行数据
      curRowArr: [], //存合并的行号相同的数据
      tableData: [
        {
          originId: 123,
          originTotalAmount: 456,
          id: 111,
        },
        {
          originId: 123,
          originTotalAmount: 456,
          id: 111,
        },
        {
          originId: 1234,
          originTotalAmount: 456,
          id: 222,
        },
      ],
      tableOption: {
        border: true,
        align: 'center',
        addBtn: false, // 不显示添加
        column: [
          {
            label: '原始订单编号',
            prop: 'originId',
          },
          {
            label: '原始订单金额',
            prop: 'originTotalAmount',
          },
          {
            label: '转单订单编号',
            prop: 'id',
          },
        ],
      },
    }
  },
  mounted() {
    this.spanArr = []
    let contactDot = 0
    let sIdx = 0
    this.tableData.forEach((item, index) => {
      if (index === 0) {
        this.spanArr.push(1)
        this.sameRowArr.push([index])
      } else {
        if (item.originId === this.tableData[index - 1].originId) {
          this.spanArr[contactDot] += 1
          this.spanArr.push(0)
          this.sameRowArr[sIdx].push(index)
        } else {
          contactDot = index
          this.spanArr.push(1)
          sIdx = sIdx + 1
          this.sameRowArr.push([index])
        }
      }
    })
  },
  methods: {
    tableOnLoad() {},
    spanMethod({ row, column, rowIndex, columnIndex }) {
      // 合并操作列的下标要+1
      if (columnIndex === 0 || columnIndex === 2 || columnIndex === 4) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        // rowspan和colspan都为0表示 隐藏该单元格。这里必须有，否则单元格会被右移一列
        return {
          rowspan: _row,
          colspan: _col,
        }
      }
    },
    cellMouseEnter(row, column, cell, event) {
      this.sameRowArr.map((item) => {
        if (item.indexOf(row.$index) != -1) {
          this.curRowArr = item
        }
      })
    },
    cellMouseLeave(row, column, cell, event) {
      this.curRowArr = []
    },
    rowClassName({ row, rowIndex }) {
      let temArr = this.curRowArr
      for (let i = 0; i < temArr.length; i++) {
        if (rowIndex == temArr[i]) {
          // 默认hover-row 这里要用row_class的样式覆盖它
          return 'row_class'
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .row_class > td {
  background: rgba(129, 211, 248, 1) !important;
}
</style>