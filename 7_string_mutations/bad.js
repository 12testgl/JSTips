const classNames = ["primary", "selected", "active", "medium"];

const result = classNames.map((c) => `button--${c}`).join(" ");

//.trim(), .replace()