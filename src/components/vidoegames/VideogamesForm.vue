<script >
export default {
    name: 'VideogamesFrom'
};
</script>

<template>
    <!-- FORM -->
    <form action="">
        <div class="mb-3">
            <label for="email" class="form-label">Inidirizzo Email</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="suggest" class="form-label">Suggerisci</label>
            <textarea class="form-control" name="suggest" id="suggest" rows="3"></textarea>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Iscrivti alla Newsletter!</label>
        </div>

        <div class="d-flex justify-content-end my-3">
            <button type="submit" class="btn btn-primary">INVIA</button>
        </div>
    </form>
</template>

<style scoped></style>
