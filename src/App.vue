<template>
  <div id="app">
    <vue-select-tu v-model="select"
                   :require="true"
                   :multiple="true"
                   @change="changeData"
                   :imgData="imgData"
                   label="请选择图片:">
    </vue-select-tu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      select: ['1'],
      imgData: [
        {
          name: '流动星空',
          value: '1',
          url:
            'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: '标签1'
        },
        {
          name: '深海蔚蓝',
          value: '2',
          url:
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: '标签2'
        },
        {
          name: '黑色商务',
          value: '3',
          url:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: '标签3'
        }
      ]
    }
  },
  methods: {
    changeData(val) {
      console.log(val)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
