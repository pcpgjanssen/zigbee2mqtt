---
title: "ShinaSystem MSM-300ZB control via MQTT"
description: "Integrate your ShinaSystem MSM-300ZB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MSM-300ZB.md)*

# ShinaSystem MSM-300ZB

| Model | MSM-300ZB  |
| Vendor  | ShinaSystem  |
| Description | SiHAS remote control 4 button |
| Exposes | action, battery, voltage, linkquality |
| Picture | ![ShinaSystem MSM-300ZB](../images/devices/MSM-300ZB.jpg) |

## Notes

None


## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `1_single`, `1_double`, `1_long`, `2_single`, `2_double`, `2_long`, `3_single`, `3_double`, `3_long`, `4_single`, `4_double`, `4_long`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Voltage (numeric)
Voltage of the battery in millivolts.
Value can be found in the published state on the `voltage` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

