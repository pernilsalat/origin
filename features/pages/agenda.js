"use strict"

this.World = require('../support/world').World;
var help = require('../support/helper')

module.exports = {
    agendaElements: {
        midday:             element(by.css('tr[data-time="12:00:00"]>td[class="fc-widget-content"]')),
        surnames:           element(by.css('input[name="LastName"]')),
        name:               element(by.css('input[name="FirstName"]')),
        iconCalendar:       element(by.css('icon[name="icon-calendar"]')),
        nextDay:            element.all(by.css('.calendar-datepicker td[class*="fc-future"]')).first(),
        hourDropdown:       element(by.css('div[ng-model*="startHour"]>div>span')),
        lastHour:           element.all(by.css('span[class="ui-select-choices-row-inner"]')).last(),
        saveButton:         element(by.id('save-button')),
        cancelAppointment:  element(by.id('remove')),
        accpetCancelation:  element(by.css('.dralia-button.delete.dralia-button__delete'))

    },

    makeAppointment: function() {
        let agenda = this.agendaElements

        let name = 'test'         + help.randomStr()
        let surname = 'cucumber'  + help.randomStr()
        this.nameP = name
        this.surnameP = surname

        browser.wait(EC.visibilityOf(agenda.midday), 60000)
        browser.actions().mouseMove(agenda.midday).click().perform()
        browser.wait(EC.visibilityOf(agenda.name), 60000)
        agenda.surnames.sendKeys(name)
        agenda.name.sendKeys(surname)
        agenda.iconCalendar.click()
        //console.log(agenda.nextDay.getText())
        browser.actions().mouseMove(agenda.nextDay).click().perform()
        agenda.hourDropdown.click()
        agenda.lastHour.click()
        agenda.saveButton.click()
    },
    deleteAppointment: function(name=this.nameP, surname=this.surnameP) {
        let agenda = this.agendaElements

        let appointment = element(by.xpath('//span[contains(text(),"'+surname+" "+name+'")]/parent::strong/../../../../..'))
        browser.actions().mouseMove(appointment).click().perform()
        agenda.cancelAppointment.click()
        agenda.accpetCancelation.click()
    }
}