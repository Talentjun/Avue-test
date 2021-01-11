<!--
 改装后的级联选择器，父关联子，子不关联父
-->
<template>
  <div>
    <el-cascader-panel
      ref="myCascader"
      :options="options"
      v-model="vop"
      :show-all-levels="false"
      @change="handleChange"
      :props="{children: 'children',label: 'deptname', 
                    value:'id', multiple: true, checkStrictly: true,
                     emitPath: false, expandTrigger:'click' 
                }"
      clearable
    ></el-cascader-panel>
    <!--      <input type="text" v-model="vop" size="100" name="rex" style="margin-top：200px">-->
  </div>
</template>
<script>
export default {
  props: {
    // 级联树数据定义
    options: {
      type: Array,
      required: false,
      default: false,
    },
    // 级联选择器一开始绑定值，需回显
    updateValue: {
      type: Array,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      // 选中的值
      vop: [],
      // 临时存放的当前选中值，用于后期的点击对比，获得当前节点值
      tmpVop: [],
      // 临时存放的值，用于递归函数给选中值
      tmp: '',
    }
  },
  watch: {
    /** v-model绑定得值 */
    vop: {
      handler(n) {
        // 如果数据发生变化
        if (n) {
          this.$emit('childByValue', this.vop)
        }
      },
      deep: true,
      immediate: true,
    },
    /**  如果一开始就给级联选择器赋值了 */
    updateValue: {
      handler(n) {
        if (n) {
          // 拿到父级节点的值，进行回显
          this.vop = this.updateValue
          this.tmpVop = this.vop
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    // 选中或取消选中后的赋值
    checkArr(value, options, operation) {
      options.map((x) => {
        if (value === x.id) {
          // 选中value项，并循环该节点下的其他所有子节点选中
          if (x.children) {
            this.checkArrNull(x.children, operation)
          }
        } else if (x.children) {
          this.checkArr(value, x.children, operation)
        }
      })
    },
    checkArrNull(options, operation) {
      options.map((x) => {
        // 如果有子项，则递归，没有则选中
        // 选中当前节点2判断子节点，有则继续递归
        if (operation === 'add') {
          this.tmp = this.tmp + ',' + x.id
        } else if (operation === 'sub') {
          this.tmp = this.tmp.split(',')
          // shanchu zhi
          this.tmp = this.removeValue(x.id, this.tmp)
          this.tmp = this.tmp.join(',')
        }
        if (x.children) {
          this.checkArrNull(x.children, operation)
        }
      })
    },
    // 获得点击change事件时点击节点的值
    valueChange(tmp1, tmp2) {
      for (var i = 0; i < tmp2.length; i++) {
        var obj = tmp2[i]
        var isExist = false
        for (var j = 0; j < tmp1.length; j++) {
          var aj = tmp1[j]
          if (obj === aj) {
            isExist = true
            break
          }
        }
        if (!isExist) {
          return obj
        }
      }
    },
    // 删除数组指定的值的元素
    removeValue(v, arr) {
      let index = arr.indexOf(v)
      if (index !== -1) {
        arr.splice(index, 1)
      }
      return arr
    },
    // 数组去重
    unique(arr) {
      var arr2 = arr.sort()
      var res = [arr2[0]]
      for (var i = 1; i < arr2.length; i++) {
        if (arr2[i] !== res[res.length - 1]) {
          res.push(arr2[i])
        }
      }
      return res
    },
    // 将options的value值按照value生成一组数组
    optionsToarr(options) {
      this.tmp = ''
      options.map((x) => {
        this.tmp = this.tmp + x.id + ','
        if (x.children) {
          this.optionsToarrChild(x.children)
        }
      })
    },
    optionsToarrChild(options) {
      console.log(options, 'options')
      options.map((x) => {
        this.tmp = this.tmp + x.id + ','
        if (x.children) {
          this.optionsToarrChild(x.children)
        }
      })
    },
    // change事件
    handleChange() {
      // 获得点击变化时的值，然后判断是加值还是减值。根据值去递归
      let valueCh = ''
      // 操作是选中还是取消
      let action = ''
      // 对比获得是选中还是取消操作
      if (this.vop.length > 0) {
        if (this.tmpVop.length > this.vop.length) {
          valueCh = this.valueChange(this.vop, this.tmpVop)
          action = 'sub'
        } else {
          valueCh = this.valueChange(this.tmpVop, this.vop)
          action = 'add'
        }
      }
      if (valueCh) {
        this.tmp = this.vop.join(',')
        this.checkArr(valueCh, this.options, action)
        // 去重
        this.vop = this.unique(this.tmp.split(','))
      }
      // 获得options的value值一维数组，用于排序对照
      this.optionsToarr(this.options)
      if (this.tmp.substring(this.tmp.length - 1) === ',') {
        this.tmp = this.tmp.substring(0, this.tmp.length - 1)
      }
      this.tmp = this.tmp.split(',')
      // 排序
      this.vop.sort((prev, next) => {
        return this.tmp.indexOf(prev) - this.tmp.indexOf(next)
      })
      this.tmpVop = this.vop
    },
  },
  created() {
    // 创建时默认给tmpVop赋值
    this.tmpVop = this.vop
  },
}
</script>