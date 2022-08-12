<template>
    <div class="main-radio">
        <input 
            :name="name"
            :value="value"
            :checked="checked"
            type="radio"
            @change="$emit('change', $event.target.value)"
        />
        {{title}}
    </div>
</template>

<script>
    export default {
        name: 'BaseInput',
        model: {
            prop: 'value'
        },
        props: {
            name: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>