<script >
export default {
    name: 'VideogamesFrom'
};
</script>

<template>
    <!-- FORM -->
    <form action="">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Inidirizzo Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Suggerisci</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">1</label>
        </div>
        <button>INVIA</button>
    </form>
</template>

<style scoped></style>
