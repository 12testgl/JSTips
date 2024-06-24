const classNames = ["primary", "selected", "active", "medium"];

const result = classNames
  .map((c) => "button--" + c)
  .reduce((acc, c) => acc + " " + c, "");
