<template>
<div>
    <h2>Fullname - {{firstname}} {{lastname}}</h2>
    <h2>Computed Fullname : {{fullName}}</h2>
    <button @click="chnageFullname">Chnage Fullname</button>

</div>
</template>

<script>

export default {
    name: "ComputedProperties",
    data() {
        return {

            firstname: 'Shweta',
            lastname: 'Singh',
        }
    },
    methods: {
        chnageFullname() {
            this.fullName = "Shreya Singh"
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstname + this.lastname
            },
            set(value) {
                const names = value.split(' ')
                this.firstname = names[0]
                this.lastname = names[1]
            },

        },
    }
}
</script>

<style scoped>
</style>
