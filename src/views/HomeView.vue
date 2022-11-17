<template>
  <div>
    <Toast
      :breakpoints="{
        '920px': { width: '90%', right: '0', left: '0' },
      }"></Toast>

    <Panel header="Cadastro de pessoa">
      <div class="grid p-fluid">
        <div class="col-6">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>
        </div>

        <div class="col-6">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">$</span>
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
          </div>
        </div>

        <div class="col-12 md:col-4">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">W</span>
            <InputText placeholder="Website" />
          </div>
        </div>
      </div>
      <Button
        label="Cadastrar"
        class="p-button-raised p-button-rounded"
        @click="toastMessage()" />
    </Panel>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import Toast from 'primevue/toast';
  import { useToast } from 'primevue/usetoast';
  import Panel from 'primevue/panel';

  export default defineComponent({
    name: 'HomeView',
    components: {
      InputText,
      Button,
      Toast,
      Panel,
    },
    data() {
      const toast = useToast();
      toast.add({
        severity: 'info',
        summary: 'Info Message',
        detail: 'Message Content',
        life: 3000,
      });
    },
    methods: {
      toastMessage(): void {
        this.$toast.add({
          severity: 'error',
          summary: 'Sucesso',
          detail: 'Usuário cadastrado com sucesso',
          life: 5000,
        });
      },
    },
  });
</script>
