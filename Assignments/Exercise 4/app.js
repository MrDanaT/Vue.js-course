new Vue({
  el: '#exercise',
  data: {
    alternate: { highlight: false, shrink: true },
    how: 'highlight',
    myClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: "0px",
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;

      var intervalId = setInterval(function () {
        vm.alternate.highlight = !vm.alternate.highlight;
        vm.alternate.shrink = !vm.alternate.shrink;
      }, 1000);
    },

    startProgress: function () {
      var vm = this;
      var width = 0;
      var intervalId = setInterval(function () {
        console.log("Tick");
        width += 10;
        vm.progressBar.width = width + 'px';

        if (width >= 120){
          clearInterval(intervalId);
        }
      }, 500)
    }
  }
});
