import { eventList } from 'backend/getEvents'
import moment from 'moment'

$w.onReady(async function () {
  const limit = '5'
  const events = await eventList(limit)
  console.log(events)

  $w('#wu247UpcomingEvents').forEachItem(($item, itemData, index) => {
    const event = events[index]

    $item('#eventMonth').text = moment(event.start).format('MMM')
    $item('#eventWeekDay').text = moment(event.start).format('ddd')
    $item('#eventDay').text = moment(event.start).format('D')
    $item('#eventTitle').text = event.name
    $item('#eventHost').text = event.host_organization
    $item('#eventLocation').text = event.city + ', ' + event.state
    $item('#eventTime').text =
      moment(event.start).format('H:mm a') +
      ' - ' +
      moment(event.end).format('H:mm a')
  })
})
