 if (this.formIsValid) {
        if(this.userList == ""){
           this.userList.push(this.users)
         }else{
           const filterEmail = this.userList.find(x => x.email === this.user.email);
            if (filterEmail) {
            this.userList({
            error: true,
            errorMessage: "Email already Exist"
      });
           }      
      } else {
        console.log("Invalid Form");
      }

    const filterEmail = this.userList.find(x => x === this.user.email);
        if (filterEmail) {
          this.userList({
           error: true,
           errorMessage: "Email already Exist"
      });

 const filterEmail = this.userList.find(x => x.email === this.user.email); 
 if (filterEmail) {
            this.userList({
            error: true,
            errorMessage: "Email already Exist"
   });
 }





for(var i = 1; i < this.userList.length; i++){
    document.write("<p>" + this.userList[i] + "</p>");
}


if (this.formIsValid) {
        //this.$emit("submit", this.users);
      
      const filterEmail = this.userList.find(x => x.email === this.user.email);

        this.userList.push(this.users)
        // this.userList.find(this.users)
        console.log(filterEmail);
      } else {
        console.log("Invalid Form");
      }

      // this.$emit("add:users", this.users);
    
    },