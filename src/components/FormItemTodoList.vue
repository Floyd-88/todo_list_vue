<template>
    <el-form :model="form" v-if="isShowForm">
        <div class="close" @click="closeFormTodod()">
        <el-icon center><CloseBold /></el-icon>
        </div>
        <h3 class="title_form">New task</h3>
        <el-form-item>
            <el-input v-model="form.desc" placeholder="добавить задачу..." type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addTodoList">Создать</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'
import {Todo} from '../types/Todo'

interface State {
    form: {
        desc: string
    }
}

export default defineComponent({
    name: 'FormItemTodoList',

    props: {
        isShowForm: {
            type: Boolean,
            required: true
        }
    },

    data(): State {
        return {
            form: {
                desc: '',
            },
        }
    },

    methods: {
        addTodoList() {
            this.$emit('addTodoList', {
                id: Date.now(),
                text: this.form.desc,
                done: false
            })
            this.form.desc = ''
        },

        closeFormTodod() {
            this.$emit('showForm', false)
        }
    },

    emits:{
        showForm: (bool: false) => Boolean,
        addTodoList: (todo: Todo) =>  todo
    },

    components: {
        CloseBold
    }
})
</script>
<styles lang="sass">
@import '../assets/styles/main.sass' 

.title_form
    padding-bottom: 10px
    margin: 0
    text-align: center
    font-family: $fira

.close
    text-align: end
    margin: 3px 3px 0 3px
    cursor: pointer
    &:hover
        color: red
</styles>