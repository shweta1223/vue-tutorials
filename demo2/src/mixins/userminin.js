import axios from "axios";
export default {
  data() {
    return {
      users: [],
      posts: [],
      isCard:true,
    };
  },
  created: function () {
    this.userList()
  },
  mounted() {
    this.userPostList()
  },
  methods: {
    userList() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          this.users = response.data;
          // console.log(this.users);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    userPostList() {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts`)
          .then((response) => {
            this.posts = response.data;
         //   console.log(this.posts);
          })
          .catch((e) => {
            this.errors.push(e);
          });
      },
  },
};
