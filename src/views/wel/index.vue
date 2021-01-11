<template>
  <div style="height: 100%; background: #fff">
    <!-- <myCascader
      v-model="checkerForm.dept"
      :updateValue="checkerForm.dept"
      v-on:childByValue="childByValue"
      :options="deptList1"
    ></myCascader> -->
    <el-row :gutter="20" style="padding: 10px; height: 100%">
      <el-col :span="4" style="height: 100%">
        <el-scrollbar style="height: 100%">
          <el-menu
            default-active="0"
            active-text-color="#73AEFE"
            @select="selectMenu"
          >
            <el-menu-item
              :index="index.toString()"
              v-for="(item, index) in dataSource"
              :key="index"
            >
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-col>
      <el-col :span="20" style="height: 100%;">
        <el-scrollbar style="height: 100%;">
          <div id="content" class="markdown-body"></div>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import marked from 'marked'
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import Gsix from './gsix'
import myCascader from './myCascader'
export default {
  name: 'wel',
  components: {
    draggable,
    Gsix,
    myCascader,
  },
  data() {
    return {
      dataSource: [
        { title: '导航0', path: 'http://10.25.11.206:8082/work/模板读服务.md' },
        { title: '导航1', path: './模板写服务.md' },
        { title: '导航2' },
        { title: '导航3' },
        { title: '导航4' },
        { title: '导航5' },
        { title: '导航6' },
        { title: '导航7' },
        { title: '导航8' },
        { title: '导航9' },
        { title: '导航10' },
        { title: '导航11' },
        { title: '导航12' },
        { title: '导航13' },
        { title: '导航14' },
        { title: '导航15' },
        { title: '导航16' },
        { title: '导航17' },
        { title: '导航18' },
      ],
      deptList1: [
        {
          id: 'zhinan',
          deptname: '指南',
          children: [
            {
              id: 'shejiyuanze',
              deptname: '设计原则',
              checked: true,
              children: [
                {
                  id: 'yizhi',
                  deptname: '一致',
                },
                {
                  id: 'fankui',
                  deptname: '反馈',
                },
                {
                  id: 'xiaolv',
                  deptname: '效率',
                },
                {
                  id: 'kekong',
                  deptname: '可控',
                },
              ],
            },
            {
              id: 'daohang',
              deptname: '导航',
              children: [
                {
                  id: 'cexiangdaohang',
                  deptname: '侧向导航',
                },
                {
                  id: 'dingbudaohang',
                  deptname: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          id: 'zujian',
          deptname: '组件',
          children: [
            {
              id: 'basic',
              deptname: 'Basic',
              children: [
                {
                  id: 'layout',
                  deptname: 'Layout 布局',
                },
                {
                  id: 'color',
                  deptname: 'Color 色彩',
                },
                {
                  id: 'typography',
                  deptname: 'Typography 字体',
                },
                {
                  id: 'icon',
                  deptname: 'Icon 图标',
                },
                {
                  id: 'button',
                  deptname: 'Button 按钮',
                },
              ],
            },
            {
              id: 'form',
              deptname: 'Form',
              children: [
                {
                  id: 'radio',
                  deptname: 'Radio 单选框',
                },
                {
                  id: 'checkbox',
                  deptname: 'Checkbox 多选框',
                },
                {
                  id: 'input',
                  deptname: 'Input 输入框',
                },
                {
                  id: 'input-number',
                  deptname: 'InputNumber 计数器',
                },
                {
                  id: 'select',
                  deptname: 'Select 选择器',
                },
                {
                  id: 'cascader',
                  deptname: 'Cascader 级联选择器',
                },
                {
                  id: 'switch',
                  deptname: 'Switch 开关',
                },
                {
                  id: 'slider',
                  deptname: 'Slider 滑块',
                },
                {
                  id: 'time-picker',
                  deptname: 'TimePicker 时间选择器',
                },
                {
                  id: 'date-picker',
                  deptname: 'DatePicker 日期选择器',
                },
                {
                  id: 'datetime-picker',
                  deptname: 'DateTimePicker 日期时间选择器',
                },
                {
                  id: 'upload',
                  deptname: 'Upload 上传',
                },
                {
                  id: 'rate',
                  deptname: 'Rate 评分',
                },
                {
                  id: 'form1',
                  deptname: 'Form 表单',
                },
              ],
            },
            {
              id: 'data',
              label: 'Data',
              children: [
                {
                  id: 'table',
                  deptname: 'Table 表格',
                },
                {
                  id: 'tag',
                  deptname: 'Tag 标签',
                },
                {
                  id: 'progress',
                  deptname: 'Progress 进度条',
                },
                {
                  id: 'tree',
                  deptname: 'Tree 树形控件',
                },
                {
                  id: 'pagination',
                  deptname: 'Pagination 分页',
                },
                {
                  id: 'badge',
                  deptname: 'Badge 标记',
                },
              ],
            },
            {
              id: 'notice',
              deptname: 'Notice',
              children: [
                {
                  id: 'alert',
                  deptname: 'Alert 警告',
                },
                {
                  id: 'loading',
                  deptname: 'Loading 加载',
                },
                {
                  id: 'message',
                  deptname: 'Message 消息提示',
                },
                {
                  id: 'message-box',
                  deptname: 'MessageBox 弹框',
                },
                {
                  id: 'notification',
                  deptname: 'Notification 通知',
                },
              ],
            },
            {
              id: 'navigation',
              deptname: 'Navigation',
              children: [
                {
                  id: 'menu',
                  deptname: 'NavMenu 导航菜单',
                },
                {
                  id: 'tabs',
                  deptname: 'Tabs 标签页',
                },
                {
                  id: 'breadcrumb',
                  deptname: 'Breadcrumb 面包屑',
                },
                {
                  id: 'dropdown',
                  deptname: 'Dropdown 下拉菜单',
                },
                {
                  id: 'steps',
                  deptname: 'Steps 步骤条',
                },
              ],
            },
            {
              id: 'others',
              deptname: 'Others',
              children: [
                {
                  id: 'dialog',
                  deptname: 'Dialog 对话框',
                },
                {
                  id: 'tooltip',
                  deptname: 'Tooltip 文字提示',
                },
                {
                  id: 'popover',
                  deptname: 'Popover 弹出框',
                },
                {
                  id: 'card',
                  deptname: 'Card 卡片',
                },
                {
                  id: 'carousel',
                  deptname: 'Carousel 走马灯',
                },
                {
                  id: 'collapse',
                  deptname: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          id: 'ziyuan',
          deptname: '资源',
          children: [
            {
              id: 'axure',
              deptname: 'Axure Components',
            },
            {
              id: 'sketch',
              deptname: 'Sketch Templates',
            },
            {
              id: 'jiaohu',
              deptname: '组件交互文档',
            },
          ],
        },
      ],
      checkerForm: {
        dept: [],
      },
      updateCheckerForm: {
        account: [],
      },

      cascaderOption11: [
        { value: -1, label: '默认新增', checked: false },
        {
          value: 1,
          label: '王者荣耀',
          checked: true,
          children: [
            { value: -1, label: '默认新增', checked: false },
            { value: 11, label: '代充', checked: false },
            {
              value: 12,
              label: '代练',
              checked: true,
              children: [
                { value: -1, label: '默认新增', checked: false },
                { value: 111, label: '点券', checked: true },
                { value: 112, label: '钻石', checked: true },
              ],
            },
          ],
        },
        { value: 1, label: '刺激战场', checked: false },
        { value: 1, label: 'DOTA2', checked: false },
      ],
      cascader11: [],
      cascaderOption: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
      optionsss: { column: [] },
      optionss: {
        submitBtn: false,
        emptyBtn: false,
        column: [],
      },
      objss: {},
      list: [1, 2, 34, 4, 54, 5],
      data: [
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01',
        },
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01',
        },
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01',
        },
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01',
        },
      ],
      form1: '我是内容',
      form2: 1,
      form3: '',
      form4: [0, 1],
      dic: [
        {
          label: '选项1',
          value: 0,
        },
        {
          label: '选项2',
          value: 1,
        },
      ],
      form5: '2020-01-01',
      form6: '2020-01-01 12:00:00',
      obj: {},
      sizeValue: 'small',
      obj1: {
        name: '11',
      },
      options: {
        column: [
          {
            label: '姓名',
            prop: 'name',
            change: ({ value, column }) => {
              this.$message.success('查看控制台', value, column)
            },
            click: ({ value, column }) => {
              this.$message.success('查看控制台', value, column)
              console.log('点击事件')
            },
            focus: ({ value, column }) => {
              this.$message.success('查看控制台', value, column)
              console.log('获取焦点')
            },
            blur: ({ value, column }) => {
              this.$message.success('查看控制台', value, column)
              console.log('失去焦点')
            },
          },
        ],
      },
      data11: [
        {
          id: '12987122',
          name: '王小虎1',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987122',
          name: '王小虎2',
          amount1: '345',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
      option11: {
        page: false,
        border: true,
        menuAlign: 'center',
        editBtn: false,
        delBtn: false,
        menuType: 'menu',
        column: [
          {
            label: 'ID',
            prop: 'id',
          },
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '数值 1',
            prop: 'amount1',
          },
          {
            label: '数值 2',
            prop: 'amount2',
          },
          {
            label: '数值 3',
            prop: 'amount3',
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    option1() {
      return {
        span: 6,
        data: [
          {
            title: this.$t('wel.data4.column1'),
            count: 12332,
            icon: 'el-icon-warning',
            color: 'rgb(49, 180, 141)',
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data4.column2'),
            count: 33,
            icon: 'el-icon-view',
            color: 'rgb(56, 161, 242)',
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data4.column3'),
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(117, 56, 199)',
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data4.column4'),
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(230, 71, 88)',
            href: 'https://avuejs.com',
            target: '_blank',
          },
        ],
      }
    },
    option3() {
      return {
        span: 8,
        data: [
          {
            title: this.$t('wel.data3.column1'),
            color: 'rgb(178, 159, 255)',
            count: 32,
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data3.column2'),
            color: 'rgb(230, 71, 88)',
            count: 32,
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data3.column3'),
            color: 'rgb(230, 71, 88)',
            count: 32,
            href: 'https://avuejs.com',
            target: '_blank',
          },
        ],
      }
    },
    option2() {
      return {
        span: 12,
        data: [
          {
            title: this.$t('wel.data2.column1'),
            count: 12678,
            icon: 'el-icon-tickets',
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data2.column2'),
            count: 22139,
            icon: 'el-icon-success',
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data2.column3'),
            count: 35623,
            icon: 'el-icon-info',
            href: 'https://avuejs.com',
            target: '_blank',
          },
          {
            title: this.$t('wel.data2.column4'),
            count: 16826,
            icon: 'el-icon-message',
            href: 'https://avuejs.com',
            target: '_blank',
          },
        ],
      }
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
            label: this.$t('wel.table.rw'),
            prop: 'rw',
          },
          {
            width: 500,
            label: this.$t('wel.table.nr'),
            prop: 'nr',
            overHidden: true,
          },
          {
            label: this.$t('wel.table.sj'),
            prop: 'sj',
          },
        ],
      }
    },
    option() {
      return {
        size: this.sizeValue,
        mockBtn: true,
        submitText: '完成',
        printBtn: true,
        column: [
          {
            label: '用户名',
            prop: 'username',
            tip: '这是信息提示',
            span: 8,
            maxlength: 3,
            suffixIcon: 'el-icon-tickets',
            prefixIcon: 'el-icon-tickets',
            minlength: 2,
            mock: {
              type: 'name',
              en: true,
            },
            rules: [
              {
                required: true,
                message: '请输入用户名',
                trigger: 'blur',
              },
            ],
            change: ({ value, column }) => {
              this.obj.address = value
              this.$message.success('address change')
            },
            click: ({ value, column }) => {
              this.$message.success('click')
            },
          },
          {
            label: '姓名',
            prop: 'name',
            mock: {
              type: 'name',
            },
            span: 8,
          },
          {
            label: '类型',
            prop: 'type',
            type: 'select',
            dicData: DIC.VAILD,
            span: 6,
            mock: {
              type: 'dic',
            },
          },
          {
            label: '权限',
            prop: 'grade',
            span: 6,
            type: 'checkbox',
            dicData: DIC.VAILD,
            mock: {
              type: 'dic',
            },
          },
          {
            label: '开关',
            prop: 'switch',
            span: 6,
            type: 'switch',
            dicData: DIC.SEX,
            mock: {
              type: 'dic',
            },
            hide: true,
            row: true,
          },
          {
            label: '性别',
            prop: 'sex',
            span: 6,
            type: 'radio',
            dicData: DIC.SEX,
            mock: {
              type: 'dic',
            },
            change: ({ value, column }) => {
              this.$message.success('change')
            },
          },
          {
            label: '数字',
            prop: 'number',
            type: 'number',
            span: 6,
            precision: 2,
            mock: {
              type: 'number',
              max: 1,
              min: 2,
              precision: 2,
            },
            minRows: 0,
            maxRows: 3,
            row: true,
          },
          {
            label: '网站',
            span: 12,
            prop: 'url',
            prepend: 'http://',
            mock: {
              type: 'url',
              header: false,
            },
            append: 'com',
            row: true,
          },
          {
            label: '日期',
            prop: 'date',
            type: 'date',
            span: 8,
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            mock: {
              type: 'datetime',
              format: 'yyyy-MM-dd',
            },
          },
          {
            label: '日期时间',
            prop: 'datetime',
            type: 'datetime',
            span: 8,
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss',
            mock: {
              type: 'datetime',
              format: 'yyyy-MM-dd hh:mm:ss',
              now: true,
            },
          },
          {
            label: '时间',
            prop: 'time',
            type: 'time',
            span: 8,
            format: 'hh:mm:ss',
            valueFormat: 'hh:mm:ss',
            mock: {
              type: 'datetime',
              format: 'hh:mm:ss',
            },
          },
          {
            label: '地址',
            span: 24,
            prop: 'address',
            mock: {
              type: 'county',
            },
          },
          {
            label: '建议',
            span: 24,
            prop: 'adit',
            mock: {
              type: 'word',
              min: 10,
              max: 30,
            },
          },
          {
            label: '手机号',
            mock: {
              type: 'phone',
            },
            span: 12,
            prop: 'phone',
          },
        ],
      }
    },
  },
  mounted() {
    // this.obj = {
    //   username: 'smallwei',
    //   switch: 0,
    //   phone: '17547400800',
    // }
    // let contactDot = 0
    // this.data11.forEach((item, index) => {
    //   if (index === 0) {
    //     this.spanArr.push(1)
    //   } else {
    //     if (item.id === this.data11[index - 1].id) {
    //       this.spanArr[contactDot] += 1
    //       this.spanArr.push(0)
    //     } else {
    //       contactDot = index
    //       this.spanArr.push(1)
    //     }
    //   }
    // })
    // console.log(this.spanArr)
  },
  created () {
    console.log(11)
  },
  methods: {
    selectMenu(index, indexPath) {
      let _this = this
      var xmlhttp
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHttp')
      }

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          document.getElementById('content').innerHTML = marked(
            xmlhttp.responseText
          )
          document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
          })
          document.querySelector('.el-col-20').style.paddingLeft = '10.1px'
        }
      }

      // 向服务器发送请求
      xmlhttp.open('GET', this.dataSource[Number(index)].path, true)
      xmlhttp.send()
    },
    /** 新增时候级联选择器子传值给父 */
    childByValue(childValue) {
      this.checkerForm.dept = childValue
    },
    handleChange(val, e) {
      console.log(val, e)
      // // 判断是否含有指定字段 -1则没有默认新增
      // let copyData = this.deepClone(val)
      // copyData.forEach((outitem, index) => {
      //   if (outitem.includes(-1)) {
      //     copyData.splice(index, 1)
      //   }
      // })
      // this.cascader11 = copyData
    },
    handleSubmit(e) {
      console.log(e)
    },
    pushInput() {
      this.optionss.column.push({
        type: 'input',
        label: '单行文本',
        span: 24,
        display: true,
        size: 'small',
        prop: '1594005845702_42106',
      })
    },
    pushSelect() {
      this.optionss.column.push({
        type: 'select',
        label: '下拉选择器',
        dicData: [
          {
            label: '选项一',
            value: 0,
          },
          {
            label: '选项二',
            value: 1,
          },
          {
            label: '选项三',
            value: 2,
          },
        ],
        span: 24,
        display: true,
        size: 'small',
        prop: '1594006281717_87616',
      })
    },
    emptytChange() {
      this.$message.success('清空方法回调')
    },
    submit() {
      this.$message.success('当前数据' + JSON.stringify(this.obj))
    },
    tip() {
      this.$message.success('自定义按钮')
    },
    spanMethod11({ row, column, rowIndex, columnIndex }) {
      if (
        columnIndex === 0 ||
        columnIndex === 3 ||
        columnIndex === 4 ||
        columnIndex === 6
      ) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        // rowspan和colspan都为0表示 隐藏该单元格。这里必须有，否则单元格会被右移一列
        return {
          rowspan: _row,
          colspan: _col,
        }
      }
    },
  },
}
</script>

<style scoped="scoped" lang="scss">
@import './default.min.css';
@import './markdown.min.css';
// html,
// body {
//   height: 100%;
//   overflow: hidden;
// }

.el-scrollbar__wrap {
  overflow-x: hidden;
  overflow: auto;
}

.el-scrollbar__view {
  height: 100%;
  overflow: auto;
}

.el-menu {
  height: 100%;
}
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
        content: '';
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
.hljs-line-numbers {
  text-align: right;
  //以下3行要加 !important 来避免样式覆盖
  border-right: 1px solid #ccc !important;
  margin-right: 10px !important;
  padding-right: 5px !important;
  color: #999;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
