import os from "os";
const local = {
  "Home Directory": os.homedir(),
  "Last Reboot": os.uptime(),
};
console.log(os.cpus);
