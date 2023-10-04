<template>
    <div class="add_item" @click="showForm()">
        <el-button round >
            <el-icon :size="30">
                <CirclePlus />
            </el-icon>
        </el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CirclePlus } from '@element-plus/icons-vue'
export default defineComponent({
    name: 'AddItemTodoList',

    methods: {
        showForm() {
            this.$emit('showForm')
        }
    },

    emits:['showForm'],

    components: {
        CirclePlus
    }
})
</script>