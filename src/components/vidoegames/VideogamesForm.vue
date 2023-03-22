<script >
export default {
    name: 'VideogamesFrom'
};
</script>

<template>
    <!-- FORM -->
    <form action="">
        <div class="mb-3">
            <label for="email" class="form-label">Inidirizzo Email<sup class="text-danger">*</sup> </label>
            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
            <small class="text-muted form-text">La tua email. Sarai ricontattato a questo indirizzo</small>
        </div>
        <!-- oggetto -->

        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto della mail<sup class="text-danger">*</sup></label>
            <input class="form-control" name="subject" id="subject" rows="3">
        </div>
        <!-- contenuto -->

        <div class="mb-3">
            <label for="message" class="form-label">Contenuto del messaggio<sup class="text-danger">*</sup></label>
            <textarea class="form-control" name="message" id="message" rows="5"></textarea>
        </div>
        <!-- check -->

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="subscription" id="subscription" value="1">
            <label class="form-check-label" for="subscription">Iscrivti alla Newsletter!</label>
        </div>

        <div class="d-flex justify-content-end my-3">
            <button type="submit" class="btn btn-primary">INVIA</button>
        </div>
    </form>
</template>

<style scoped></style>
