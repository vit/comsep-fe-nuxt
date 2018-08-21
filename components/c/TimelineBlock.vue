<template>
  <div class="timeline-block">
    <div v-bind:class="[{deadline: this.deadline}, 'line']"></div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['deadline'],
  };
</script>

<style lang="scss" sscoped>

.timeline-block {
  -border-left: solid 3px #009688;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 25px;
    -position: absolute;
    position: relative;
  .container {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 25px 40px;
  }
  .line {
    position: absolute;
    -margin: 0px 50px 0px 0px;
    -height: 100%;
    bottom: 0;
    top: 0;
    width: 15px;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 4px;
      border-radius: 100%;
      background-color: #009688;
      width: 15px;
      height: 15px;
      -border: 3px solid transparent;
    }
  
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: 24px;
      bottom: 0px;
      border-radius: 0;
      background-color: #009688;
      opacity: 0.4;
      width: 3px;
      -height: 100%;
      -border: 3px solid transparent;
      border: 0px solid red;
    }

    &.deadline {
      &:after,&:before {
        background-color: #FF5722;
        animation-name: color;
        animation-duration: 2s;
        animation-iteration-count: infinite;
      }
    }


  }


  @keyframes color {
    0% {
      background-color: #FF5722;
    }
    50% {
      background-color: #FFAB91;
    }
    100 {
      background-color: #FF5722;
    }
  }


}
  
</style>
