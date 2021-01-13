<template>
  <div>
    <basic-container>
      <el-row :gutter="20">
        <el-col :span="4">
          <el-scrollbar class="scroll">
            <el-menu
              default-active="0"
              active-text-color="#73AEFE"
              @select="selectMenu"
            >
              <el-menu-item
                :index="index.toString()"
                v-for="(item, index) in dataList"
                :key="index"
              >
                <div slot="title" class="title">
                  <span style="width: 24px"
                    ><i
                      class="el-icon-circle-check"
                      v-show="item.checked == true"
                    ></i></span
                  >{{ item.title }}
                </div>
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-col>
        <el-col :span="9" class="transfer">
          <p class="transfer-title">未选商品</p>
          <avue-crud
            :data="leftData"
            :option="tableOption1"
            @selection-change="selectionChangeLeft"
          >
            <template slot="date" slot-scope="scope">
              <p>
                {{
                  scope.row.date.length >= 8
                    ? scope.row.date.substring(0, 8) + '···'
                    : scope.row.date
                }}
                <i class="forbid"><i></i></i>
              </p>
            </template>
          </avue-crud>
        </el-col>
        <el-col :span="2" class="btn-texts">
          <el-button
            icon="el-icon-arrow-left"
            :disabled="listRight.length ? false : true"
            size="mini"
            type="primary"
            @click="handelSelect"
            >加入左侧</el-button
          >
          <el-button
            :disabled="listLeft.length ? false : true"
            size="mini"
            type="primary"
            @click="handleRemoveSelect"
            style="margin-top: 10px; margin-left: 0px"
            >加入右侧<i class="el-icon-arrow-right el-icon--right"></i
          ></el-button>
        </el-col>
        <el-col :span="9" class="transfer">
          <p class="transfer-title">已选商品</p>
          <avue-crud
            :data="rightData"
            :option="tableOption2"
            @selection-change="selectionChangeRight"
          >
          </avue-crud>
        </el-col>
      </el-row>
    </basic-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftData: [
        {
          date: '我我我我我我我我我',
          id: '王小虎1',
        },
        {
          date: '11000KV-三站2',
          id: '王小虎2',
        },
        {
          date: '11000KV-三站3',
          id: '王小虎3',
        },
        {
          date: '11000KV-三站4',
          id: '王小虎4',
        },
        {
          date: '11000KV-三站5',
          id: '王小虎5',
        },
        {
          date: '11000KV-三站6',
          id: '王小虎6',
        },
        {
          date: '11000KV-三站7',
          id: '王小虎7',
        },
      ],
      tableOption1: {
        addBtn: false,
        menu: false,
        selection: true,
        tip: false,
        height: 300,
        column: [
          {
            label: '名称',
            prop: 'id',
          },
          {
            label: '数据',
            prop: 'date',
            slot: true,
          },
        ],
      },
      tableOption2: {
        addBtn: false,
        menu: false,
        selection: true,
        tip: false,
        height: 300,
        column: [
          {
            label: '名称',
            prop: 'id',
          },
          {
            label: '数据',
            prop: 'date',
          },
        ],
      },
      rightData: [],
      listLeft: [], // 左侧选中数据 [{id: xxx, list: []},{}]
      listRight: [], // 右侧选中数据
      dataList: [
        { title: '导航0', checked: true },
        { title: '导航1', checked: true },
        { title: '导航2', checked: true },
        { title: '导航3', checked: true },
        { title: '导航4', checked: true },
        { title: '导航5', checked: true },
        { title: '导航6', checked: true },
        { title: '导航7', checked: true },
        { title: '导航8', checked: true },
        { title: '导航9', checked: true },
        { title: '导航10', checked: true },
      ],
      index: 0,
    }
  },
  watch: {
    leftData: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.dataList[this.index].checked = newVal.length == 0 ? true : false
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    // 选中菜单 通过id请求数据
    selectMenu(index, indexPath) {
      this.index = index
    },
    // 加入左侧
    handelSelect() {
      this.rightData = this.selectChange(this.rightData, this.listRight)
      this.leftData = this.leftData.concat(this.listRight)
    },
    // 加入右侧
    handleRemoveSelect() {
      this.leftData = this.selectChange(this.leftData, this.listLeft)
      this.rightData = this.rightData.concat(this.listLeft)
    },
    // 处理数据入左 & 入右
    selectChange(data, list) {
      let newData = []
      data.map((nowSelectItem) => {
        let flag = list.some((listItem) => listItem.id == nowSelectItem.id)
        if (!flag) {
          newData.push(nowSelectItem)
        }
      })
      return newData
    },
    // 左侧选中
    selectionChangeLeft(list) {
      this.listLeft = list
    },
    // 右侧选中
    selectionChangeRight(list) {
      this.listRight = list
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll {
  height: 390px;
  border: 1px solid #ebeef5;
  border-radius: 5px;
}
.title {
  display: flex;
  align-items: center;
}
.transfer {
  border: 1px solid #ebeef5;
  padding: 0;
  border-radius: 5px;
  &-title {
    border-bottom: 1px solid #ebeef5;
    padding: 5px;
    margin: 0;
    text-align: right;
    line-height: 2;
  }
}
.btn-texts {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 390px;
}
.forbid {
  display: inline-block;
  vertical-align: sub;
  width: 14px;
  height: 14px;
  border: 1px solid #d9001b;
  border-radius: 50%;
  position: relative;
  i {
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 12px;
    height: 1px;
    transform: rotate(-45deg);
    background: #d9001b;
  }
}
</style>