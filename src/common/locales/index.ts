import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import bodyEN from './en/body.json'
import calendarEN from './en/calendar.json'
import commonEN from './en/common.json'
import dashboardEN from './en/dashboard.json'
import menuEN from './en/menu.json'
import moreEN from './en/more.json'
import statisticsEN from './en/statistics.json'
import trainingEN from './en/training.json'

import bodyPL from './pl/body.json'
import calendarPL from './pl/calendar.json'
import commonPL from './pl/common.json'
import dashboardPL from './pl/dashboard.json'
import menuPL from './pl/menu.json'
import morePL from './pl/more.json'
import statisticsPL from './pl/statistics.json'
import trainingPL from './pl/training.json'

const resources = {
  en: {
    body: bodyEN,
    calendar: calendarEN,
    common: commonEN,
    dashboard: dashboardEN,
    menu: menuEN,
    more: moreEN,
    statistics: statisticsEN,
    training: trainingEN
  },
  pl: {
    body: bodyPL,
    calendar: calendarPL,
    common: commonPL,
    dashboard: dashboardPL,
    menu: menuPL,
    more: morePL,
    statistics: statisticsPL,
    training: trainingPL
  },
}

const namespaces = ['common', 'dashboard', 'training', 'history', 'body', 'more']


export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
  .init({
    lng: 'pl',
    fallbackLng: "en",
    resources: resources,
    ns: namespaces,
    defaultNS: "common",
  });