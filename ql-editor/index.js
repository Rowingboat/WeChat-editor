// components/zxb-editor/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    html:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getHtml(e) {//从组件获取值
      this.triggerEvent('getContent',e.detail.content.html)
    },
  
    insertImage(){ //图片上传插入示例
      wx.chooseImage({
        count: 1,
        success: res => {
          // 本地测试图片插入
          // this.selectComponent('#zxb_editor').insertSrc(res.tempFilePaths[0]);
          console.log(res);
          wx.uploadFile({ //调用图片上传接口
            url: 'https://testimg.zhixinbu.com/upload/image', 
            filePath: res.tempFilePaths[0],
            name: 'imgFile',
            success: res => {
              const imgUrl = JSON.parse(res.data).data
              this.selectComponent('#zxb_editor').insertSrc(imgUrl[0].url);//调用组件insertSrc方法
            }
          })
        }
      })
    },
  }
})
