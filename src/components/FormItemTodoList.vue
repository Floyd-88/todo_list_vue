<template>
    <el-form :model="form">
        <el-form-item>
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormItemTodoList',

    data() {
        return {
            form: {
                desc: '',
            },
        }
    },

    methods: {
        onSubmit() {
            console.log('submit!')
        }
    },

    components: {

    }
})
</script>