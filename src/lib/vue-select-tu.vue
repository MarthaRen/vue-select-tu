<!--
 * @Description: 公用选择图片组件
 * @Version: 1.0.0
 * @Author: Kyle
 * @Date: 2021-03-24 18:42:25
 * @LastEditors: Kyle
 * @LastEditTime: 2021-03-24 19:01:23
-->
<comment>
props
   imgData: [
          {
            name: '样式一',
            value: '1',
            url:
              'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2676935521,922112450&fm=11&gp=0.jpg',
            alt: '标签1'
          }],
    // 是否多选
    multiple: false,
    // 是否必选
    require: false,
    select: ['1'],
    v-model: ['']
</comment>
<template>
  <div id='vueSelectTu'
       class="d-flex">
    <span class="select-image-title">{{label}}</span>
    <div v-for="img in imgData"
         class="select-imgs"
         :class="value.includes(img.value) ? 'active' : ''"
         @click="select(img)"
         :key="img.value">
      <img :style="{width:width? width +'px':'150px',height:height? height + 'px':'100px'}"
           :src="img.url"
           :alt="img.alt" />
      <p class="select-image-name">{{ img.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vueSelectTu',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    width: {
      type: String,
      defalut: '80'
    },
    height: {
      type: String,
      defalut: '50'
    },
    label: {
      type: String,
      defalut: ''
    },
    multiple: {
      type: Boolean,
      defalut: false
    },
    require: {
      type: Boolean,
      defalut: false
    },
    value: {
      type: Array,
      defalut: () => {
        return []
      }
    },
    imgData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    //这里存放数据
    return {
      tmp: this.value
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //监控data中的数据变化
  watch: {
    value() {
      this.tmp = this.value
    }
  },
  //方法集合
  methods: {
    select(val) {
      if (this.multiple) {
        // 多选
        if (!this.tmp.includes(val.value)) {
          // this.value = [val.value, ...this.value]
          this.tmp.push(val.value)
        } else {
          // 是否必选
          if (this.require && this.tmp.length === 1) {
            return
          }
          this.tmp.splice(
            this.tmp.findIndex((i) => i == val.value),
            1
          )
        }
      } else {
        // 单选
        if (!this.tmp.includes(val.value)) {
          this.tmp = [val.value]
        } else {
          // 是否必选
          if (this.require && this.tmp.length === 1) {
            return
          }
          this.tmp.splice(
            this.tmp.findIndex((i) => i == val.value),
            1
          )
        }
      }
      this.$emit('change', this.tmp)
    }
  },
  destroyed() {} //生命周期 - 销毁完成
}
</script>
<style  >
#vueSelectTu {
  padding: 10px;
}
#vueSelectTu.d-flex {
  display: flex;
}
#vueSelectTu .select-image-title {
  font-weight: 300;
  font-size: 14px;
  margin-right: 10px;
}
#vueSelectTu .select-image-name {
  top: 10px;
  font-size: 12px;
  text-align: center;
  color: #000;
  font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
}
#vueSelectTu .select-imgs {
  margin: 0 5px 0 5px;
  padding: 3px 18px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 16px;
  color: #cfeaff;
  line-height: 22px;
}
#vueSelectTu .select-imgs.active {
  border: 1px solid #0060a9;
}
</style>