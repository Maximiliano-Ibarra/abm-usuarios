<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">
                    <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        props: {
            headers: {
                type: Array,
                required: true
            },
            rows: {
                type: Array,
                required: true
            }
        }
    }

</script>