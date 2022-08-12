import axios from "axios";
export default {
  data() {
    return {
      users: [],
      posts: [],
      isCard:true,
    };
  },
  created: async function () {
    await this.userList()
  },
  mounted() {
    this.userPostList()
  },
  methods: {
    async userList() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          this.users = response.data;
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
