<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card flat bordered class="cadastro-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Postagens</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        Acesse as postagens
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat @click="postagens">Postagens</q-btn>
      </q-card-actions>
    </q-card>

    <q-card flat bordered class="usuarios-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Álbuns</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        Acesse os álbuns
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn @click="albuns" flat>Álbuns</q-btn>
      </q-card-actions>
    </q-card>

    <q-card flat bordered class="cadastro-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">TO-DOs</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        Acesso os TO-DOs
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat @click="toDos">Acesse os TO-DOs</q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    postagens () {
      this.$router.push({ name: 'postagens' })
    },
    albuns () {
      this.$router.push({ name: 'albuns' })
    },
    toDos () {
      this.$router.push({ name: 'to-dos' })
    }
  }
}
</script>

<style lang="sass" scoped>
.cadastro-card, .usuarios-card
  width: 100%
</style>