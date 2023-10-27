class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    // add new clock in the array
    addClock (time, action) {
        if (time == null || action == null) {
            throw new Error ("Отсутствуют обязательные аргументы");
        }
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time == time) {
                console.warn("Уже присутствует звонок на это же время");
            }
        }
        const alarm = {
            callback: action,
            time: time,
            canCall: true
        }
        this.alarmCollection.push(alarm);
     }

     // remove clock from the array
     removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter((el) => el.time != time);
     }

     // return current time in hh:mm format
     getCurrentFormattedTime () {
        return new Date().toLocaleTimeString("ru-RU", {hour: '2-digit', minute: '2-digit'});
     }

     // start alarm
     start () {
        if (this.intervalId != null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(element => {
                if(element.time == this.getCurrentFormattedTime() && element.canCall == true) {
                    element.canCall = false;
                    element.callback();
                }
            });
        }, 1000);
     }

     // stop alarm
     stop () {
        clearInterval();
        this.intervalId = null;
     }

     // reset all alarms to charge status
     resetAllCalls () {
        this.alarmCollection.forEach(element => element.canCall = true);
     }
     
     // delete all alarms
     clearAlarms () {
        this.stop();
        this.alarmCollection = [];
     }

}