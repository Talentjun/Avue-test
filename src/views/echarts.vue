<template>
  <basic-container>
    <div
      id="main"
      style="width: 600px; height: 400px; border: 1px solid red"
    ></div>
  </basic-container>
</template>

<script>
import * as echarts from 'echarts'
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))

    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        show: false,
      },
      animation: false, // 不展示渲染动画
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          hoverAnimation: false,
          data: [
            {
              value: 30,
              name: '30%',
              itemStyle: {
                color: 'rgb(79,121,189)',
              },
            },
            {
              value: 20,
              name: '20%',
              itemStyle: {
                color: 'rgb(155,187,89)',
              },
            },
            {
              value: 45,
              name: '45%',
              itemStyle: {
                color: 'rgb(192,80,77)',
              },
            },
          ],
          label: { position: 'inside' },
          itemStyle: { borderWidth: 1, borderColor: '#fff' },
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  },
}
</script>

<style lang="scss" scoped>
</style>