<template>
    <div class="q-pa-md">
        <q-table
            title="Postagens"
            :data="data"
            :columns="columns"
            :filter="filter"
            :pagination.sync="pagination"
            :rows-per-page-options="rowsPerPageOptions"
        >
            <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
                </q-input>
            </template>
        </q-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            filter: '',
            pagination: {
                page: 1,
                rowsPerPage: this.getItemsPerPage()
            },
            columns: [
                { name: 'userId',  label: 'Id Usuário', allign: 'left', field: 'userId', sortable: true },
                { name: 'id',  label: 'Id', allign: 'center', field: 'id', sortable: true },
                { name: 'title',  label: 'Título', allign: 'center', field: 'title', sortable: true }
            ],
            data: [],
            errors: []
        }
    },

    computed: {
        rowsPerPageOptions () {
        if (this.$q.screen.gt.xs) {
            return this.$q.screen.gt.sm ? [4, 8, 12] : [4, 8]
        }

        return [4]
        }
    },

    watch: {
        '$q.screen.nome' () {
        this.pagination.rowsPerPage = this.getItemsPerPage()
        }
    },

    created () {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.data = res.data
            }).catch(err => {
                this.errors.push(err)
            })
    },

    methods: {
        getItemsPerPage () {
            const { screen } = this.$q
            if (screen.lt.sm) {
                return 3
            }
            if (screen.lt.md) {
                return 6
            }
            return 8
        }
    }
}
</script>

<style>
.q-table thead th {
    width: 50px;
    white-space: normal;
}

.q-table tbody td {
    width: 50px;
    white-space: normal;
}
</style>