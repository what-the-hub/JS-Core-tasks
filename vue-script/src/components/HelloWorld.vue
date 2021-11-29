<template>
  <Calendar v-model="value" :inline="true">
    <template #date="slotProps" >
      <strong v-if="checkEnteredDay(slotProps.date).busyness === 'WORK'"
              class="special-day">{{ slotProps.date.day }}</strong >
      <template v-else>{{ slotProps.date.day }}</template>
    </template>
  </Calendar>
</template>

<script>
import Calendar from 'primevue/calendar';

export default {
  name: 'HelloWorld',
  created() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  },
  props: {
    msg: String
  },
  components: {
    Calendar
  },
  data() {
    return {
      value: null
    }
  },
  methods: {
    checkEnteredDay(enteredDate) {
      const twoDayMs = 86400000 * 2
      const firstWorkDayMs = new Date(2021, 10, 26).getTime()

      const inputDateMs = new Date(enteredDate.year, enteredDate.month, enteredDate.day).getTime()
      const differenceMs = inputDateMs - firstWorkDayMs
      const divisionResult = differenceMs / twoDayMs
      const reminder = divisionResult % twoDayMs
      const checkSecondDay = Math.round(reminder) % 2
      const isFirstWorkDay = !(reminder % 2)
      const isFirstFreeDay = !isFirstWorkDay && Number.isInteger(reminder)
      const isSecondFreeDay = !isFirstWorkDay && !checkSecondDay
      const isSecondWorkDay = !isFirstWorkDay && checkSecondDay

      let resultObj = {
        day: '',
        busyness: ''
      }

      if (isFirstWorkDay) {
        resultObj.day = 'first'
        resultObj.busyness = 'WORK'
      }
      if (isSecondWorkDay) {
        resultObj.day = 'second'
        resultObj.busyness = 'WORK'
      }
      if (isFirstFreeDay) {
        resultObj.day = 'first'
        resultObj.busyness = 'REST'
      }
      if (isSecondFreeDay) {
        resultObj.day = 'second'
        resultObj.busyness = 'REST'
      }

      return resultObj
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special-day {
  background-color: #42b983;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
