const MyPlugin = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.mixin({
      beforeCreate() {
        //console.log("Display name beforeCreate:-" + this.name);
      },
      mounted() {
        // console.log("Mounted!");
        // console.log("Display name:-" + this.name);
      },
      created() {
        // console.log("Created");
        // console.log("Display name:-" + this.name);
      },
      data() {
        return {
          name: "hello plugin",
        };
      },
    });

    Vue.filter("preview", (value) => { 
      return value.split("").reverse().join("");
    });

    Vue.directive("focus", { 
      inserted: function (el) {
        el.focus();
      },
    });
  },
};

export default MyPlugin;
