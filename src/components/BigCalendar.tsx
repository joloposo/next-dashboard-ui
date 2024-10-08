
'use client'

import { calendarEvents } from '@/lib/data';
import moment from 'moment'
import { useState } from 'react';
import {Calendar, momentLocalizer, View, Views} from 'react-big-calendar'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['work_week', 'day']}
      view={view}
      style={{ height: '98%' }}
      onView={handleOnChangeView}
      min={new Date(2025, 0, 1, 8, 0)}
      max={new Date(2025, 0, 1, 17, 0)}
    />);
}

export default BigCalendar;