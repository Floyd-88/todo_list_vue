<template>
    <div class="list_items">
        <ItemTodoList v-for="todo in todos" :key="todo.id" :todo="todo" @done-todo="doneTodo" @remove-todo="removeTodo" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '@/types/Todo'
import ItemTodoList from './ItemTodoList.vue'

interface State {
    todos: Todo[]
}

export default defineComponent({
    name: 'ItemsTodoList',

    data(): State {
        return {
            todos: [
                {
                    id: 0,
                    text: 'Задача номер один на сегодня - позаниматься в програмировании, изучить фреймворк вью жс и тайп скрипт!!!',
                    done: false
                },
                {
                    id: 1,
                    text: 'Задача номер два на сегодня - позаниматься в програмировании, изучить фреймворк вью жс и тайп скрипт!!!',
                    done: false
                },
                {
                    id: 2,
                    text: 'Задача номер три на сегодня - позаниматься в програмировании, изучить фреймворк вью жс и тайп скрипт!!!',
                    done: false
                },

            ]
        }
    },

    methods: {
        doneTodo(id: number) {
            this.todos.map((todo: Todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
            })
        },

        removeTodo(id:number) {
            console.log('fff')
            this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
        }
    },

    components: {
        ItemTodoList
    }


})
</script>