<template>
    <div class="list_items">
        <ItemTodoList v-for="todo in todos" :key="todo.id" :todo="todo" @done-todo="doneTodo" @remove-todo="removeTodo" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '@/types/Todo'
import ItemTodoList from './ItemTodoList.vue'

interface State {
    todos: Todo[]
}

export default defineComponent({
    name: 'ItemsTodoList',

    props: {
        todos: {
            type: Array as PropType<Todo[]>,
            required: true
        }
    },

    methods: {
        doneTodo(id: number) {
            this.$emit('doneTodo', id)
        },

        removeTodo(id:number) {
            this.$emit('removeTodo', id)
        }
    },

    emits: {
        doneTodo: (id: number) => Number.isInteger(id),
        removeTodo: (id: number) => Number.isInteger(id)
    },

    components: {
        ItemTodoList
    }


})
</script>