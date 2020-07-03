<template>
  <div>
    <!-- 最简单的input -->
    <basic-container>
      值:{{form1}}
      <br />
      <avue-input v-model="form1" placeholder="请输入内容"></avue-input>
    </basic-container>

    <!-- inputNumber -->
    <!-- <basic-container>
      <el-row :span="24">
        <el-col :span="6">
          值:{{form2}}
          <br />
          <avue-input-number v-model="form2"></avue-input-number>
        </el-col>
        <el-col :span="24"></el-col>
        <el-col :span="6">
          值:{{form2}}
          <br />
          <avue-input-number v-model="form2" precision="2" controls-position></avue-input-number>
        </el-col>
      </el-row>
    </basic-container>-->

    <!-- select下拉菜单 -->
    <basic-container>
      <el-row>
        <el-col :span="6">
          值:{{form3}}
          <br />
          <avue-select v-model="form3" placeholder="请选择内容" type="tree" :dic="dic"></avue-select>
        </el-col>
        <el-col :span="24"></el-col>
        <el-col :span="6">
          值:{{form4}}
          <br />
          <avue-select multiple v-model="form4" placeholder="请选择内容" type="tree" :dic="dic"></avue-select>
        </el-col>
      </el-row>
    </basic-container>

    <!-- datetime -->
    <basic-container>
      <el-row :span="24">
        <el-col :span="6">
          值:{{form5}}
          <br />
          <avue-date
            v-model="form5"
            format="yyyy年MM月dd日"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
          ></avue-date>
          <el-col :span="24"></el-col>
        </el-col>
        <el-col :span="24"></el-col>
        <el-col :span="6">
          值:{{form6}}
          <br />
          <avue-date
            v-model="form6"
            type="datetime"
            format="yyyy年MM月dd日 hh:mm:ss"
            value-format="yyyy-MM-dd hh:mm:ss"
            placeholder="请选择日期"
          ></avue-date>
        </el-col>
        <el-col :span="24"></el-col>
        <el-col :span="6">
          <avue-date
            v-model="form6"
            type="daterange"
            format="yyyy年MM月dd日"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
          ></avue-date>
        </el-col>
      </el-row>
    </basic-container>

    <!-- 基础表单 秀秀秀 -->
    <basic-container>
      <el-row style="margin-bottom:20px">
        <el-radio-group v-model="sizeValue">
          <el-radio label="small">默认</el-radio>
          <el-radio label="medium">medium</el-radio>
          <el-radio label="small">small</el-radio>
          <el-radio label="mini">mini</el-radio>
        </el-radio-group>
      </el-row>
      <avue-form
        ref="form"
        v-model="obj"
        :option="option"
        @reset-change="emptytChange"
        @submit="submit"
      >
        <template slot-scope slot="menuForm">
          <el-button @click="tip">自定义按钮</el-button>
        </template>
      </avue-form>
    </basic-container>

    <basic-container>
      <avue-form :option="options" v-model="obj1"></avue-form>
    </basic-container>

    <basic-container>
      <avue-crud :data="data11" :option="option11" :span-method="spanMethod11"></avue-crud>
    </basic-container>

    <!-- <div class="wel__header">
      <div class="wel__info">
        <img :src="userInfo.avatar"
             alt=""
             class="wel__info-img">
        <div class="wel__info-content">
          <div class="wel__info-title">
            {{$t('wel.info')}}
          </div>
          <div class="wel__info-subtitle">
            {{$t('wel.dept')}}
          </div>
        </div>
      </div>
      <div class="wel__extra">
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            {{ $t('wel.count')}}
          </p>
          <p class="wel__extra-subtitle">
            56
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            {{ $t('wel.team')}}
          </p>
          <p class="wel__extra-subtitle">
            8 <span>/ 24</span>
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">

            {{ $t('wel.project')}}
          </p>
          <p class="wel__extra-subtitle">
            2,223
          </p>
        </div>
      </div>
    </div>
    <basic-container>
      <avue-data-box :option="option1"></avue-data-box>
    </basic-container>

    <el-row :span="24">
      <el-col :span="18">
        <basic-container>
          <avue-data-progress :option="option3"
                              style="margin-bottom:35px"></avue-data-progress>
          <avue-data-tabs :option="option"></avue-data-tabs>
        </basic-container>
      </el-col>
      <el-col :span="6">
        <basic-container>
          <avue-data-icons :option="option2"></avue-data-icons>
        </basic-container>
      </el-col>
    </el-row>
    <basic-container>
      <avue-crud :option="option4"
                 :data="data">
      </avue-crud>
    </basic-container>-->
  </div>
</template>

<script>
var DIC = {
  VAILD: [
    {
      label: "真",
      value: "true"
    },
    {
      label: "假",
      value: "false"
    }
  ],
  SEX: [
    {
      label: "男",
      value: 0
    },
    {
      label: "女",
      value: 1
    }
  ]
};
import { mapGetters } from "vuex";
export default {
  name: "wel",
  data() {
    return {
      data: [
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        },
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        },
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        },
        {
          rw: "这是一条工作任务",
          nr: "这是一条很长很长很长很长很长很长很长很长很长的工作内容",
          sj: "2019-01-01"
        }
      ],
      form1: "我是内容",
      form2: 1,
      form3: "",
      form4: [0, 1],
      dic: [
        {
          label: "选项1",
          value: 0
        },
        {
          label: "选项2",
          value: 1
        }
      ],
      form5: "2020-01-01",
      form6: "2020-01-01 12:00:00",
      obj: {},
      sizeValue: "small",
      obj1: {
        name: "11"
      },
      options: {
        column: [
          {
            label: "姓名",
            prop: "name",
            change: ({ value, column }) => {
              this.$message.success("查看控制台", value, column);
            },
            click: ({ value, column }) => {
              this.$message.success("查看控制台", value, column);
              console.log("点击事件");
            },
            focus: ({ value, column }) => {
              this.$message.success("查看控制台", value, column);
              console.log("获取焦点");
            },
            blur: ({ value, column }) => {
              this.$message.success("查看控制台", value, column);
              console.log("失去焦点");
            }
          }
        ]
      },
      data11: [
        {
          id: "12987122",
          name: "王小虎1",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987122",
          name: "王小虎2",
          amount1: "345",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ],
      option11: {
        page: false,
        border: true,
        menuAlign: "center",
        column: [
          {
            label: "ID",
            prop: "id"
          },
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "数值 1",
            prop: "amount1"
          },
          {
            label: "数值 2",
            prop: "amount2"
          },
          {
            label: "数值 3",
            prop: "amount3"
          }
        ]
      },
      spanArr: []
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
    option1() {
      return {
        span: 6,
        data: [
          {
            title: this.$t("wel.data4.column1"),
            count: 12332,
            icon: "el-icon-warning",
            color: "rgb(49, 180, 141)",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data4.column2"),
            count: 33,
            icon: "el-icon-view",
            color: "rgb(56, 161, 242)",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data4.column3"),
            count: 2223,
            icon: "el-icon-setting",
            color: "rgb(117, 56, 199)",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data4.column4"),
            count: 2223,
            icon: "el-icon-setting",
            color: "rgb(230, 71, 88)",
            href: "https://avuejs.com",
            target: "_blank"
          }
        ]
      };
    },
    option3() {
      return {
        span: 8,
        data: [
          {
            title: this.$t("wel.data3.column1"),
            color: "rgb(178, 159, 255)",
            count: 32,
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data3.column2"),
            color: "rgb(230, 71, 88)",
            count: 32,
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data3.column3"),
            color: "rgb(230, 71, 88)",
            count: 32,
            href: "https://avuejs.com",
            target: "_blank"
          }
        ]
      };
    },
    option2() {
      return {
        span: 12,
        data: [
          {
            title: this.$t("wel.data2.column1"),
            count: 12678,
            icon: "el-icon-tickets",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data2.column2"),
            count: 22139,
            icon: "el-icon-success",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data2.column3"),
            count: 35623,
            icon: "el-icon-info",
            href: "https://avuejs.com",
            target: "_blank"
          },
          {
            title: this.$t("wel.data2.column4"),
            count: 16826,
            icon: "el-icon-message",
            href: "https://avuejs.com",
            target: "_blank"
          }
        ]
      };
    },
    // option() {
    //   return {
    //     span: 8,
    //     data: [
    //       {
    //         title: this.$t("wel.data.column1"),
    //         subtitle: this.$t("wel.data.subtitle"),
    //         count: 7993,
    //         allcount: 10222,
    //         text: this.$t("wel.data.text1"),
    //         color: "rgb(27, 201, 142)",
    //         key: this.$t("wel.data.key1")
    //       },
    //       {
    //         title: this.$t("wel.data.column2"),
    //         subtitle: this.$t("wel.data.subtitle"),
    //         count: 3112,
    //         allcount: 10222,
    //         text: this.$t("wel.data.text2"),
    //         color: "rgb(230, 71, 88)",
    //         key: this.$t("wel.data.key2")
    //       },
    //       {
    //         title: this.$t("wel.data.column3"),
    //         subtitle: this.$t("wel.data.subtitle"),
    //         count: 908,
    //         allcount: 10222,
    //         text: this.$t("wel.data.text3"),
    //         color: "rgb(56, 161, 242)",
    //         key: this.$t("wel.data.key3")
    //       }
    //     ]
    //   };
    // },
    option4() {
      return {
        index: true,
        column: [
          {
            label: this.$t("wel.table.rw"),
            prop: "rw"
          },
          {
            width: 500,
            label: this.$t("wel.table.nr"),
            prop: "nr",
            overHidden: true
          },
          {
            label: this.$t("wel.table.sj"),
            prop: "sj"
          }
        ]
      };
    },
    option() {
      return {
        size: this.sizeValue,
        mockBtn: true,
        submitText: "完成",
        printBtn: true,
        column: [
          {
            label: "用户名",
            prop: "username",
            tip: "这是信息提示",
            span: 8,
            maxlength: 3,
            suffixIcon: "el-icon-tickets",
            prefixIcon: "el-icon-tickets",
            minlength: 2,
            mock: {
              type: "name",
              en: true
            },
            rules: [
              {
                required: true,
                message: "请输入用户名",
                trigger: "blur"
              }
            ],
            change: ({ value, column }) => {
              this.obj.address = value;
              this.$message.success("address change");
            },
            click: ({ value, column }) => {
              this.$message.success("click");
            }
          },
          {
            label: "姓名",
            prop: "name",
            mock: {
              type: "name"
            },
            span: 8
          },
          {
            label: "类型",
            prop: "type",
            type: "select",
            dicData: DIC.VAILD,
            span: 6,
            mock: {
              type: "dic"
            }
          },
          {
            label: "权限",
            prop: "grade",
            span: 6,
            type: "checkbox",
            dicData: DIC.VAILD,
            mock: {
              type: "dic"
            }
          },
          {
            label: "开关",
            prop: "switch",
            span: 6,
            type: "switch",
            dicData: DIC.SEX,
            mock: {
              type: "dic"
            },
            hide: true,
            row: true
          },
          {
            label: "性别",
            prop: "sex",
            span: 6,
            type: "radio",
            dicData: DIC.SEX,
            mock: {
              type: "dic"
            },
            change: ({ value, column }) => {
              this.$message.success("change");
            }
          },
          {
            label: "数字",
            prop: "number",
            type: "number",
            span: 6,
            precision: 2,
            mock: {
              type: "number",
              max: 1,
              min: 2,
              precision: 2
            },
            minRows: 0,
            maxRows: 3,
            row: true
          },
          {
            label: "网站",
            span: 12,
            prop: "url",
            prepend: "http://",
            mock: {
              type: "url",
              header: false
            },
            append: "com",
            row: true
          },
          {
            label: "日期",
            prop: "date",
            type: "date",
            span: 8,
            format: "yyyy-MM-dd",
            valueFormat: "yyyy-MM-dd",
            mock: {
              type: "datetime",
              format: "yyyy-MM-dd"
            }
          },
          {
            label: "日期时间",
            prop: "datetime",
            type: "datetime",
            span: 8,
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            mock: {
              type: "datetime",
              format: "yyyy-MM-dd hh:mm:ss",
              now: true
            }
          },
          {
            label: "时间",
            prop: "time",
            type: "time",
            span: 8,
            format: "hh:mm:ss",
            valueFormat: "hh:mm:ss",
            mock: {
              type: "datetime",
              format: "hh:mm:ss"
            }
          },
          {
            label: "地址",
            span: 24,
            prop: "address",
            mock: {
              type: "county"
            }
          },
          {
            label: "建议",
            span: 24,
            prop: "adit",
            mock: {
              type: "word",
              min: 10,
              max: 30
            }
          },
          {
            label: "手机号",
            mock: {
              type: "phone"
            },
            span: 12,
            prop: "phone"
          }
        ]
      };
    }
  },
  created() {},
  mounted() {
    this.obj = {
      username: "smallwei",
      switch: 0,
      phone: "17547400800"
    };
    let contactDot = 0;
    this.data11.forEach( (item,index) => {
      if(index===0){
        this.spanArr.push(1)
      }else{
        if(item.id === this.data11[index-1].id){
          this.spanArr[contactDot] += 1;
          this.spanArr.push(0)
        }else{
          contactDot = index
          this.spanArr.push(1)
        }
      }
    })
    console.log(this.spanArr);

  },
  methods: {
    emptytChange() {
      this.$message.success("清空方法回调");
    },
    submit() {
      this.$message.success("当前数据" + JSON.stringify(this.obj));
    },
    tip() {
      this.$message.success("自定义按钮");
    },
    spanMethod11({ row, column, rowIndex, columnIndex }) {
      if(columnIndex === 0 || columnIndex === 3 || columnIndex === 4 || columnIndex === 6){
        const _row = this.spanArr[rowIndex]
        const _col = _row>0?1:0;
        console.log(_row,_col);
        return{
          rowspan:_row,
          colspan:_col
        }
      }
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
.wel {
  &__header {
    padding: 25px 40px;
    border-bottom: 1px solid #e8e8e8;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__info {
    display: flex;
    align-items: center;
    &-img {
      border-radius: 72px;
      display: block;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &-content {
      position: relative;
      margin-left: 24px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
    &-title {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }
    &-subtitle {
      position: relative;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
  }
  &__extra {
    &-item {
      position: relative;
      padding: 0 32px;
      display: inline-block;
      &:last-child {
        &::after {
          display: none;
        }
      }
      &:after {
        background-color: #e8e8e8;
        position: absolute;
        top: 30px;
        right: 0;
        width: 1px;
        height: 40px;
        content: "";
      }
    }
    &-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    &-subtitle {
      color: rgba(0, 0, 0, 0.85);
      font-size: 30px;
      line-height: 38px;
      margin: 0;
      span {
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
      }
    }
  }
}
</style>
