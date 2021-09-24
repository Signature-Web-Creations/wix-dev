import { eventList } from 'backend/getEvents'
import moment from 'moment'

$w.onReady(async function () {
  const limit = '5'
  const events = await eventList(limit)
  console.log(events)

  $w('#wu247UpcomingEvents').forEachItem(($item, itemData, index) => {
    $item('#eventMonth').text = moment(events[index].start).format('MMM')
  })
})
