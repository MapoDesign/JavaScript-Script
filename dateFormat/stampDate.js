function stampDate() {
  const today = new Date();

  const options = [
    {
      year: "numeric",
      weekday: "short",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "longGeneric",
    },
    {
      dayPeriod: "long", // del pomeriggio
    },
  ];

  console.log(today.toLocaleString(undefined, options[0]));
  const todayString = today.toLocaleString(undefined,options[0]);
  return todayString;
}
