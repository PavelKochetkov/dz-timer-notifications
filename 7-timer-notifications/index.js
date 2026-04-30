import notifier from 'node-notifier';

const data = process.argv;

if (data[2] == undefined || data[3] == undefined || data[4] == undefined) {
  console.log('Invalid time format');
  process.exit(1);
}
const hour = Number.parseFloat(data[2]);
const minute = Number.parseFloat(data[3]);
const second = Number.parseFloat(data[4]);

const timeToMsecConverter = (hour, minute, second) => (hour * 3600 + minute * 60 + second) * 1000;

if (Number.isNaN(hour) || Number.isNaN(minute) || Number.isNaN(second)) {
  console.log('Invalid time format');
  process.exit(1);
}

if (hour < 0 || minute < 0 || second < 0) {
  console.log('Invalid time format');
  process.exit(1);
}

setTimeout(() => {
  notifier.notify({
    title: 'Завершение',
    message: 'Таймер завершил работу',
    sound: true,
    wait: true
  });
  console.log('Таймер завершил работу');
}, timeToMsecConverter(hour, minute, second))
