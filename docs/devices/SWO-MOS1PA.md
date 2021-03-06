---
title: "Swann SWO-MOS1PA control via MQTT"
description: "Integrate your Swann SWO-MOS1PA via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SWO-MOS1PA.md)*

# Swann SWO-MOS1PA

| Model | SWO-MOS1PA  |
| Vendor  | Swann  |
| Description | Motion and temperature sensor |
| Exposes | occupancy, battery_low, tamper, linkquality |
| Picture | ![Swann SWO-MOS1PA](../images/devices/SWO-MOS1PA.jpg) |

## Notes


### Temperature not supported
Device is listed as having temperature detection. This feature is still being investigated.



## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

