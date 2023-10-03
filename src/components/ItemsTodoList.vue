<template>
           <div class="list_items">
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер один на сегодня - позаниматься в програмировании, изучить фреймворк вью жс
              и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер два на сегодня - позаниматься в програмировании, изучить фреймворк вью жс
              и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер три на сегодня - позаниматься в програмировании, изучить фреймворк вью жс
              и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
          <div class="wrapper_item">
            <div class="item_icon">
              <Check class="check_el" />
            </div>
            <div class="item_text">Задача номер четыре на сегодня - позаниматься в програмировании, изучить фреймворк вью
              жс и тайп скрипт!!!</div>
            <div class="item_remove">
              <DeleteFilled class="remove_el" />
            </div>
          </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Check, DeleteFilled} from '@element-plus/icons-vue'

export default defineComponent({
name: 'ItemsTodoList',

components: {
    Check,
    DeleteFilled
}


})

</script>