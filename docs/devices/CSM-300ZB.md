---
title: "ShinaSystem CSM-300ZB control via MQTT"
description: "Integrate your ShinaSystem CSM-300ZB via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/CSM-300ZB.md)*

# ShinaSystem CSM-300ZB

| Model | CSM-300ZB  |
| Vendor  | ShinaSystem  |
| Description | SiHAS multipurpose sensor |
| Exposes | battery, voltage, people, linkquality |
| Picture | ![ShinaSystem CSM-300ZB](../images/devices/CSM-300ZB.jpg) |

## Notes

None


## Exposes

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

### People (numeric)
People count.
Value can be found in the published state on the `people` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"people": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"people": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `50`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

