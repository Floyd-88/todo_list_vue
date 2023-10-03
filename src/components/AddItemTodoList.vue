<template>
    <div class="add_item">
        <el-button round>
            <el-icon :size="20">
                <Plus color="red" />
            </el-icon>
        </el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Plus } from '@element-plus/icons-vue'
export default defineComponent({
    name: 'AddItemTodoList',
    components: {
        Plus
    }
})
</script>