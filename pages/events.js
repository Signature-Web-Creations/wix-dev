import { eventList } from 'backend/getEvents'

$w.onReady(function () {
  eventList().then((events) => console.log(events))
})
