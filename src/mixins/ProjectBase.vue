<script>
export default {
    name: null,
    path: null,
    methods: {
        showSummary: function() {
            return this.$route.name !== this.name;
        },
        showDemo: function() {
            return this.$route.name === this.name;
        }
    },
    computed: {
        path: function() {
            return this.$options.path;
        },
        name: function() {
            return this.$options.name;
        }
    },
    created: function() {
        let neededOverrides = ["name", "path", "title", "description"];
        for (let prop of neededOverrides) {
            if (this[prop] === null || this[prop] === undefined) {
                console.error(`Need to override ${prop}`);
            }
        }
    }
};
</script>
