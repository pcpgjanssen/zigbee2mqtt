---
title: "HEIMAN HS1CA-E control via MQTT"
description: "Integrate your HEIMAN HS1CA-E via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS1CA-E.md)*

# HEIMAN HS1CA-E

| Model | HS1CA-E  |
| Vendor  | HEIMAN  |
| Description | Smart carbon monoxide sensor |
| Exposes | carbon_monoxide, battery_low, battery, linkquality |
| Picture | ![HEIMAN HS1CA-E](../images/devices/HS1CA-E.jpg) |

## Notes

None


## Exposes

### Carbon_monoxide (binary)
Indicates if CO (carbon monoxide) is detected.
Value can be found in the published state on the `carbon_monoxide` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` carbon_monoxide is ON, if `false` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

