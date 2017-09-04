<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <input class = "form-control" placeholder="Ingrese la primera letra a buscar..."
               type = "text"
               :value = "value"
               @input = "updateValue($event.target.value)"
               @keydown.enter = "enter"
               @keydown.down = "down"
               @keydown.up = "up"
               @keydown.tab = "isFocussed = false">
        <ul class="dropdown-menu" style="width:100%">
            <li v-for="(suggestion, index) in matches"
                v-bind:class = "{'active': isActive(index)}"
                @click = "suggestionClick(index)">
                <a style="cursor: pointer">{{ suggestion }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            },
            suggestions: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                isFocussed: false,
                current: 0
            }
        },
        computed: {
            // Filtering the suggestion based on the input
            matches () {
                return this.suggestions.filter((obj) => {
                    return obj.indexOf(this.value) >= 0
                })
            },
            openSuggestion () {
                return this.matches.length !== 0 &&
                    this.isFocussed === true
            }
        },
        methods: {
            updateValue (value) {
                if (this.isFocussed === false) {
                    this.isFocussed = true
                    this.current = 0
                }
                let valName = value.toUpperCase()
                this.$emit('input', valName)
            },
            // When enter pressed on the input
            enter () {
                this.$emit('input', this.matches[this.current])
                this.isFocussed = false
            },
            // When up pressed while suggestions are open
            up () {
                if (this.current > 0) {
                    this.current--
                }
            },
            // When up pressed while suggestions are open
            down () {
                if (this.current < this.matches.length - 1) {
                    this.current++
                }
            },
            // For highlighting element
            isActive (index) {
                return index === this.current
            },
            // When one of the suggestion is clicked
            suggestionClick (index) {
                this.$emit('input', this.matches[index])
                this.isFocussed = false
            }
        }
    }
</script>