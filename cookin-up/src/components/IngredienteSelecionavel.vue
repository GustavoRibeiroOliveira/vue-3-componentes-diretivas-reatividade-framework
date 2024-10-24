<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true}
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado

            if (this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente)
            } else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <button class="ingrediente" v-on:click="aoClicar">
    <!-- <button class="ingrediente" @click="selecionado = !selecionado"></button> -->
        <Tag :texto="ingrediente" :ativa="selecionado" :aria-pressed="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>