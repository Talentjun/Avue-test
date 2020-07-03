<template>
  <div>
    <basic-container>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
          <el-row style="background:#D7D7D7">
            <el-col :span="8">
              <div class="grid-content bg-purple" style="text-align:center">订单信息</div>
            </el-col>
            <el-col :span="4" style="text-align:center">
              <div class="grid-content bg-purple-light">数量</div>
            </el-col>
            <el-col :span="4" style="text-align:center">
              <div class="grid-content bg-purple">实付金额</div>
            </el-col>
            <el-col :span="4" style="text-align:center">
              <div class="grid-content bg-purple-light">状态</div>
            </el-col>
            <el-col :span="4" style="text-align:center">
              <div class="grid-content bg-purple">操作</div>
            </el-col>
          </el-row>
          <div class="order">
            <span style="margin-right:20px;">2020-06-09 00:00:11</span>
            <span style="margin-right:20px;">订单编号：2240978627685350</span>
            <span style="margin-right:10px;">卖家：YLD</span>
            <el-button type="primary" icon="el-icon-headset" size="small">联系卖家</el-button>
          </div>
          <el-row class="content" type="flex">
            <el-col :span="8" style="text-align:;border-right:1px solid #AEAEAE;">
              <div class="con">
                <el-image
                  style="width: 100px; height: 100px"
                  src="https://gitee.com/uploads/61/632261_smallweigit.jpg"
                  :preview-src-list="preview"
                ></el-image>
                <div>
                  <p>王者荣耀648面额=570元</p>
                  <p>手游代充>王者荣耀点券代充>648点券慢充</p>
                </div>
              </div>
              <div class="con">
                <!-- 不同写法 -->
                <el-image
                  style="width: 100px; height: 100px"
                  src="https://gitee.com/uploads/61/632261_smallweigit.jpg"
                  :preview-src-list="['https://gitee.com/uploads/61/632261_smallweigit.jpg']"
                ></el-image>
                <div>
                  <p>王者荣耀648面额=570元</p>
                  <p>手游代充>王者荣耀点券代充>648点券慢充</p>
                </div>
              </div>
            </el-col>
            <el-col
              :span="4"
              style="text-align:center;border-right:1px solid #AEAEAE;display:flex;justify-content:center;align-items:center"
            >
              <div style="padding:10px">1</div>
            </el-col>
            <el-col
              :span="4"
              style="text-align:center;border-right:1px solid #AEAEAE;display:flex;justify-content:center;align-items:center"
            >
              <div class="grid-content bg-purple">实付金额</div>
            </el-col>
            <el-col
              :span="4"
              style="text-align:center;border-right:1px solid #AEAEAE;display:flex;justify-content:center;align-items:center"
            >
              <div class="grid-content bg-purple-light">状态</div>
            </el-col>
            <el-col
              :span="4"
              style="text-align:center;display:flex;justify-content:center;align-items:center"
            >
              <div class="grid-content bg-purple">操作</div>
            </el-col>
          </el-row>

          <div class="block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second" :disabled="true"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>
    </basic-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      formInline: {
        user: "",
        region: ""
      },
      currentPage: 1,
      preview: ["https://gitee.com/uploads/61/632261_smallweigit.jpg"]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-col {
  margin-bottom: 0;
  margin-top: 0;
}
.grid-content {
  margin: 8px 0;
}
.order {
  background: #f9d8dc;
  padding: 5px;
}
.content {
  background: #f2f2f2;
  border: 1px solid #aeaeae;
  .con {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.block {
  overflow: hidden;
  float: right;
  margin-top: 20px;
}
</style>
