<template>
    <div class="wrapper_item">
        <div class="item_icon" :class="{'done_icon': todo.done}">
            <Check class="check_el" />
        </div>
        <div class="item_text" :class="{'done_item': todo.done}" @click="doneTodo()">{{ todo.text }}</div>
        <div class="item_remove" @click="removeTodo()">
            <DeleteFilled class="remove_el" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Check, DeleteFilled } from '@element-plus/icons-vue'
import { Todo } from '@/types/Todo'

export default defineComponent({
    name: 'ItemTodoList',

    props: {
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    },

    methods: {
        doneTodo() {
            this.$emit('doneTodo', this.todo.id)
        },
        removeTodo() {
            this.$emit('removeTodo', this.todo.id)
        }
    },

    emits: {
        doneTodo: (id: number) => Number.isInteger(id),
        removeTodo: (id: number) => Number.isInteger(id)
    },

    components: {
        Check,
        DeleteFilled,
    }
})
</script>

<styles lang="sass">
.done_item
    text-decoration: line-through
.done_icon
    display: block !important
</styles>