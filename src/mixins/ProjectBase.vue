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
        if (this.name === null) {
            console.error("Need to override name");
        }
        if (this.path === null) {
            console.error("Need to override path");
        }
        if (this.title === null) {
            console.error("Need to override title");
        }
    }
};
</script>
