<template>
  <div class="login-box">
    <div class="div"></div>
    <div class="logo-wrap">
      <svg class="icon logo" aria-hidden="true">
        <use xlink:href="#i-mi"></use>
      </svg>
    </div>
    <h4>小米帐号登录</h4>

    <div class="inp-warp">
      <div class="inp">
        <input type="number" v-model="phone" placeholder="请输入手机号">
      </div>
      <div class="inp">
        <input type="number" v-model="code" placeholder="请输入验证码">
        <span class="code-button">获取验证码</span>
      </div>

      <div class="login-button">
        <a href="###">立即登录/注册</a>
      </div>
    </div>
    <div class="other-login-wrap">
      <h5>其他方式登录</h5>
      <div class="other-icon-list">
        <svg class="icon wechat" aria-hidden="true">
          <use xlink:href="#i-wechat"></use>
        </svg>
        <svg class="icon zfb" aria-hidden="true">
          <use xlink:href="#i-zfb"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      phone: '',
      code: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/public.scss";
  h4{
    text-align: center;
    font-size: px(18);
    color: $color_0;
    margin-bottom: px(10);
  }
  .logo-wrap{
    padding-top: px(30);
    text-align: center;
  }
  .icon.logo{
    width: px(50);
    height: px(50);
    padding: px(5);
    color: #fff;
    background: #333;
    border-radius: px(3);
    background: #fc6720;
    margin-bottom: px(15);
  }

  .inp-warp{
    padding: 0 px(16);
    .inp{
      display: flex;
      align-items: center;
      height: px(54);
      border-bottom: 1px solid $color_light;
      input{
        flex: 1;
      }
      .code-button{
        width: px(100);
        text-align: center;
      }
    }
  }

  .login-button{
    margin-top: px(24);
    padding: px(10);
    height: px(45);
    background: #fc6720;
    border-radius: px(5);
    a{
      display: block;
      text-align: center;
      color: #fff;
      font-size: px(18);
    }
  }

  .other-login-wrap{
    h5{
      position: relative;
      margin-top: px(50);
      margin-right: px(16);
      margin-left: px(16);
      color: $color_2;
      text-align: center;
      &:before,&:after{
        content: '';
        position: absolute;
        top: 50%;
        width: px(120);
        height: 1px;
        transform: translateY(-50%);
        background: $color_light;
      }
      &:before{
        left: 0;
      }
      &:after{
        right: 0;
      }
    }
    .other-icon-list{
      text-align: center;
      .icon{
        width: px(50);
        height: px(50);
        margin: px(20) px(10) 0;
      }
      .wechat{
        color: #1cbc20;
      }
      .zfb{
        color: #6eb7e8;
      }
    }
  }
</style>
