<script setup>
import Swal from 'sweetalert2/dist/sweetalert2';
// methods
function showSuccessAlert(title) {
  Swal.fire({
    title,
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
  });
}
function showErrorAlert(title, method, path) {
  this.isLoading = false;
  Swal.fire({
    icon: 'error',
    title,
    confirmButtonText: '確認',
    timer: 2000,
    timerProgressBar: true,
  }).then(() => {
    if (method && path) {
      this.$router[method](path);
    }
  });
}
</script>
