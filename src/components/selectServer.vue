<template lang="pug">
  div#selectServer
    div.wrapper
      div.ui.form
        input.textbar(type="text",v-model="result")
      div.ui.container
        div.ui.four.columns.grid
          div.column(v-for="k in keys",@click="getKey(k)")
             div.ui.keys.segment
                | {{ k }}
</template>
<script lang="coffee">
export default
  data:()-> 
    data: 'hello'
    keys: [7,8,9,'/',4,5,6,'x',1,2,3,'-',0,'clear','=','+']
    result: ""
    isRes: false
  methods:
    getKey:(k)->
      a = ''
      b = ''
      c = '' 
      if this.isRes
        this.result = ""
        this.isRes = false
      if (k != '=') 
        this.result += k    
      if this.result.indexOf('/') != -1
        a = this.result.slice(0,this.result.indexOf('/'))
        b = this.result.slice(this.result.indexOf('/') + 1)
        if b!=0
          c = a/b
      else if this.result.indexOf('+') != -1
        a = this.result.slice(0,this.result.indexOf('+'))
        b = this.result.slice(this.result.indexOf('+') + 1)
        c = parseInt(a) + parseInt(b)
      else if this.result.indexOf('-') != -1
        a = this.result.slice(0,this.result.indexOf('-'))
        b = this.result.slice(this.result.indexOf('-') + 1)
        c = a-b
      else if this.result.indexOf('x') != -1
        a = this.result.slice(0,this.result.indexOf('x'))
        b = this.result.slice(this.result.indexOf('x') + 1)  
        c = a*b
      if(k == '=')  
        if !isNaN(c)
          this.result = c
        else
          this.result = "" 
        this.isRes = true
      if (k == 'clear')
        this.result = ""
</script>
<style scoped>
.keys
{
  border-radius: 6px;
  width: 54px!important;
  text-align: center;
  cursor:pointer;
  padding: 6px!important;
  border: 1px solid #c3c3c3!important;
  background:whitesmoke;
}
.container
{
  width: 200px;
}
.column
{
  padding:2px!important;
}
.textbar
{
  margin-bottom: 18px!important;
  height: 51px!important;
  border-radius: 0!important;
  width:226px!important;
  text-align: right;
  border: 1px solid #c3c3c3!important;
}
.ui.form
{
  text-align: center!important;
}
.wrapper
{
  background:whitesmoke;
  width: 250px;
  padding-top: 15px;
  padding-bottom: 23px;
}
</style>
